import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { RefreshCw } from 'lucide-react';

interface RpsControlsProps {
  speed: number;
  onSpeedChange: (speed: number) => void;
  numElements: number;
  onNumElementsChange: (num: number) => void;
  onReset: () => void;
  isSimulating: boolean;
}

export default function RpsControls({
  speed,
  onSpeedChange,
  numElements,
  onNumElementsChange,
  onReset,
  isSimulating,
}: RpsControlsProps) {
  return (
    <div className="p-4 border-t bg-background/80 backdrop-blur-sm z-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto items-center">
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
          <Button onClick={onReset} className="w-full md:w-auto">
            <RefreshCw className="mr-2 h-4 w-4" /> Reset Simulation
          </Button>
        </div>
      </div>
    </div>
  );
}
