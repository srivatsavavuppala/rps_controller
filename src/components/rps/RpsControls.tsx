import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Play, Pause, RefreshCw } from 'lucide-react';

interface RpsControlsProps {
  speed: number;
  onSpeedChange: (speed: number) => void;
  numElements: number;
  onNumElementsChange: (num: number) => void;
  onReset: () => void;
  onToggleSimulation: () => void;
  isSimulating: boolean;
  isFinished: boolean;
}

export default function RpsControls({
  speed,
  onSpeedChange,
  numElements,
  onNumElementsChange,
  onReset,
  onToggleSimulation,
  isSimulating,
  isFinished,
}: RpsControlsProps) {
  return (
    <div className="p-4 border-t bg-background/80 backdrop-blur-sm z-10">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto items-center">
        <div className="space-y-2">
          <Label htmlFor="num-elements">Elements per type</Label>
          <Input
            id="num-elements"
            type="number"
            value={numElements}
            onChange={(e) => onNumElementsChange(Math.max(1, parseInt(e.target.value, 10) || 1))}
            min="1"
            max="100"
            className="w-full"
            disabled={isSimulating}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="speed">Simulation Speed</Label>
          <Slider
            id="speed"
            min={0.1}
            max={3}
            step={0.1}
            value={[speed]}
            onValueChange={(value) => onSpeedChange(value[0])}
            disabled={!isSimulating}
          />
        </div>
        <div className="flex justify-center md:justify-end">
          <Button onClick={onToggleSimulation} className="w-full md:w-auto" disabled={isFinished}>
            {isSimulating ? <Pause className="mr-2 h-4 w-4" /> : <Play className="mr-2 h-4 w-4" />}
            {isSimulating ? 'Pause' : 'Start'}
          </Button>
        </div>
        <div className="flex justify-center md:justify-end">
          <Button onClick={onReset} className="w-full md:w-auto" variant="outline">
            <RefreshCw className="mr-2 h-4 w-4" /> Reset
          </Button>
        </div>
      </div>
    </div>
  );
}
