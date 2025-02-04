import React from 'react';

interface SliderProps {
  min: number;
  max: number;
  step: number;
  value: [number, number];
  onChange: (value: [number, number]) => void;
}

export const Slider: React.FC<SliderProps> = ({
  min,
  max,
  step,
  value,
  onChange,
}) => {
  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newMin = Math.min(Number(e.target.value), value[1] - step);
    onChange([newMin, value[1]]);
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newMax = Math.max(Number(e.target.value), value[0] + step);
    onChange([value[0], newMax]);
  };

  return (
    <div className="relative">
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value[0]}
        onChange={handleMinChange}
        className="absolute pointer-events-none appearance-none z-20 h-2 w-full opacity-0 cursor-pointer"
      />
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value[1]}
        onChange={handleMaxChange}
        className="absolute pointer-events-none appearance-none z-20 h-2 w-full opacity-0 cursor-pointer"
      />

      <div className="relative z-10 h-2">
        <div className="absolute z-10 left-0 right-0 bottom-0 top-0 rounded-md bg-gray-200" />
        <div
          className="absolute z-20 top-0 bottom-0 rounded-md bg-black"
          style={{
            left: `${(value[0] / max) * 100}%`,
            right: `${100 - (value[1] / max) * 100}%`,
          }}
        />
        <div
          className="absolute z-30 w-4 h-4 top-[-6px] bg-black rounded-full"
          style={{ left: `${(value[0] / max) * 100}%` }}
        />
        <div
          className="absolute z-30 w-4 h-4 top-[-6px] bg-black rounded-full"
          style={{ left: `${(value[1] / max) * 100}%` }}
        />
      </div>
    </div>
  );
};