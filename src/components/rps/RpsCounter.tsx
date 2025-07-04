import type { ElementType } from './types';

interface RpsCounterProps {
  counts: Record<ElementType, number>;
}

export default function RpsCounter({ counts }: RpsCounterProps) {
  return (
    <div className="flex justify-center items-center gap-8 md:gap-12 p-4 bg-background/80 backdrop-blur-sm z-10 border-b">
      <div className="text-center">
        <p className="text-3xl font-bold text-accent font-headline">{counts.rock}</p>
        <p className="text-sm text-muted-foreground font-medium">Rocks</p>
      </div>
      <div className="text-center">
        <p className="text-3xl font-bold text-accent font-headline">{counts.paper}</p>
        <p className="text-sm text-muted-foreground font-medium">Papers</p>
      </div>
      <div className="text-center">
        <p className="text-3xl font-bold text-accent font-headline">{counts.scissor}</p>
        <p className="text-sm text-muted-foreground font-medium">Scissors</p>
      </div>
    </div>
  );
}
