import { Hand, FileText, Scissors } from 'lucide-react';
import type { Element, ElementType } from './types';
import { cn } from '@/lib/utils';
import React from 'react';

interface RpsElementProps {
  element: Element;
}

const elementComponents: Record<ElementType, { Icon: React.ElementType; className: string; fillIcon: boolean }> = {
  rock: {
    Icon: Hand,
    className: "text-primary",
    fillIcon: true,
  },
  paper: {
    Icon: FileText,
    className: "text-secondary-foreground",
    fillIcon: false,
  },
  scissor: {
    Icon: Scissors,
    className: "text-accent",
    fillIcon: false,
  }
};

const RpsElement = ({ element }: RpsElementProps) => {
  const { Icon, className, fillIcon } = elementComponents[element.type];
  
  return (
    <div
      className="absolute flex items-center justify-center"
      style={{
        left: element.x,
        top: element.y,
        width: element.size,
        height: element.size,
        transform: `translate(-50%, -50%)`,
      }}
    >
      <Icon
        className={cn('w-full h-full drop-shadow-lg transition-colors duration-300', className)}
        strokeWidth={1.5}
        {...(fillIcon ? { fill: 'currentColor' } : {})}
      />
    </div>
  );
};

export default React.memo(RpsElement);
