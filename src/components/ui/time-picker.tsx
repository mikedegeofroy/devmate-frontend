'use client';

import * as React from 'react';
import { TimePickerInput } from './time-picker-input';

interface TimePickerDemoProps {
  date: Date | undefined;
  setDate: (date: Date | undefined) => void;
}

export function TimePicker({ date, setDate }: TimePickerDemoProps) {
  const minuteRef = React.useRef<HTMLInputElement>(null);
  const hourRef = React.useRef<HTMLInputElement>(null);

  return (
    <div className='flex items-end justify-center gap-2 pb-2'>
      <div className='grid gap-1 text-center items-end'>
        <TimePickerInput
          picker='hours'
          date={date}
          setDate={setDate}
          ref={hourRef}
          onRightFocus={() => minuteRef.current?.focus()}
        />
      </div>
      <div className='text-xl flex items-end pb-2'>:</div>
      <div className='grid gap-1 text-center'>
        <TimePickerInput
          picker='minutes'
          date={date}
          setDate={setDate}
          ref={minuteRef}
          onLeftFocus={() => hourRef.current?.focus()}
        />
      </div>
    </div>
  );
}
