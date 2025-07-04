export type ElementType = 'rock' | 'paper' | 'scissor';

export interface Element {
  id: string;
  type: ElementType;
  x: number;
  y: number;
  dx: number;
  dy: number;
  size: number;
}
