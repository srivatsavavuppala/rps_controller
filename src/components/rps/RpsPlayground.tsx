"use client";

import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import type { Element, ElementType } from './types';
import RpsElement from './RpsElement';
import RpsCounter from './RpsCounter';

const NUM_ELEMENTS_PER_TYPE = 10;
const ELEMENT_SIZE = 40;
const MIN_SPEED = 0.5;
const MAX_SPEED = 1.2;

const getWinner = (type1: ElementType, type2: ElementType): ElementType | null => {
  if (type1 === type2) return null;
  if (
    (type1 === 'rock' && type2 === 'scissor') ||
    (type1 === 'scissor' && type2 === 'rock')
  ) {
    return 'rock';
  }
  if (
    (type1 === 'paper' && type2 === 'rock') ||
    (type1 === 'rock' && type2 === 'paper')
  ) {
    return 'paper';
  }
  if (
    (type1 === 'scissor' && type2 === 'paper') ||
    (type1 === 'paper' && type2 === 'scissor')
  ) {
    return 'scissor';
  }
  return null;
};

export default function RpsPlayground() {
  const [elements, setElements] = useState<Element[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationFrameId = useRef<number>();
  const isInitialized = useRef(false);

  useEffect(() => {
    if (!containerRef.current || isInitialized.current) return;

    const { width, height } = containerRef.current.getBoundingClientRect();
    if (width === 0 || height === 0) return;

    const initialElements: Element[] = [];
    const types: ElementType[] = ['rock', 'paper', 'scissor'];

    types.forEach(type => {
      for (let i = 0; i < NUM_ELEMENTS_PER_TYPE; i++) {
        const angle = Math.random() * 2 * Math.PI;
        const speed = MIN_SPEED + Math.random() * (MAX_SPEED - MIN_SPEED);
        initialElements.push({
          id: crypto.randomUUID(),
          type,
          x: Math.random() * (width - ELEMENT_SIZE) + ELEMENT_SIZE / 2,
          y: Math.random() * (height - ELEMENT_SIZE) + ELEMENT_SIZE / 2,
          dx: Math.cos(angle) * speed,
          dy: Math.sin(angle) * speed,
          size: ELEMENT_SIZE,
        });
      }
    });
    setElements(initialElements);
    isInitialized.current = true;
  }, []);

  const runAnimation = useCallback(() => {
    setElements(prevElements => {
      if (!containerRef.current || prevElements.length === 0) {
        return prevElements;
      }
      
      const { width, height } = containerRef.current.getBoundingClientRect();
      const newElements = prevElements.map(e => ({ ...e }));
      const changes = new Map<string, ElementType>();
      
      for (const el of newElements) {
        el.x += el.dx;
        el.y += el.dy;

        if (el.x - el.size / 2 < 0 && el.dx < 0) {
            el.dx *= -1;
            el.x = el.size / 2;
        }
        if (el.x + el.size / 2 > width && el.dx > 0) {
            el.dx *= -1;
            el.x = width - el.size / 2;
        }
        if (el.y - el.size / 2 < 0 && el.dy < 0) {
            el.dy *= -1;
            el.y = el.size / 2;
        }
        if (el.y + el.size / 2 > height && el.dy > 0) {
            el.dy *= -1;
            el.y = height - el.size / 2;
        }
      }
      
      for (let i = 0; i < newElements.length; i++) {
        for (let j = i + 1; j < newElements.length; j++) {
          const el1 = newElements[i];
          const el2 = newElements[j];

          if (changes.has(el1.id) || changes.has(el2.id)) continue;

          const dist = Math.hypot(el1.x - el2.x, el1.y - el2.y);

          if (dist < el1.size) {
            const winnerType = getWinner(el1.type, el2.type);
            if (winnerType) {
              if (el1.type === winnerType) {
                changes.set(el2.id, winnerType);
              } else {
                changes.set(el1.id, winnerType);
              }
            }
          }
        }
      }

      if (changes.size > 0) {
        return newElements.map(el => {
          if (changes.has(el.id)) {
            return { ...el, type: changes.get(el.id)! };
          }
          return el;
        });
      }

      return newElements;
    });

    animationFrameId.current = requestAnimationFrame(runAnimation);
  }, []);

  useEffect(() => {
    if (isInitialized.current) {
        animationFrameId.current = requestAnimationFrame(runAnimation);
    }
    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [isInitialized.current, runAnimation]);

  const counts = useMemo(() => {
    return elements.reduce((acc, el) => {
      acc[el.type]++;
      return acc;
    }, { rock: 0, paper: 0, scissor: 0 });
  }, [elements]);

  return (
    <div className="flex-grow flex flex-col min-h-0">
      <RpsCounter counts={counts} />
      <div ref={containerRef} className="flex-grow relative w-full h-full">
        {elements.map(el => (
          <RpsElement key={el.id} element={el} />
        ))}
        {elements.length === 0 && (
          <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
            <p>Loading simulation...</p>
          </div>
        )}
      </div>
    </div>
  );
}
