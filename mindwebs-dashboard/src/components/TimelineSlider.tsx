'use client';

import React, { useEffect, useState } from 'react';
import { Slider } from 'antd';
import dayjs from 'dayjs';

const TOTAL_HOURS = 48;
const now = dayjs();

const TimelineSlider = () => {
  const [range, setRange] = useState<[number, number]>([TOTAL_HOURS - 6, TOTAL_HOURS]);

  const marks: Record<number, string> = {};
  for (let i = 0; i <= TOTAL_HOURS; i += 6) {
    const label = now.subtract(TOTAL_HOURS - i, 'hour').format('DD MMM, HH:mm');
    marks[i] = label;
  }

  useEffect(() => {
    const startTime = now.subtract(TOTAL_HOURS - range[0], 'hour');
    const endTime = now.subtract(TOTAL_HOURS - range[1], 'hour');
    console.log(`Selected range: ${startTime.format()} to ${endTime.format()}`);
  }, [range]);

  return (
    <div style={{ padding: '2rem' }}>
      <h2>🕒 Select Timeline Range</h2>
      <Slider
        range
        min={0}
        max={TOTAL_HOURS}
        value={range}
        onChange={(value) => {
          if (Array.isArray(value)) {
            setRange([value[0], value[1]]);
          }
        }}
        marks={marks}
        tipFormatter={(val) =>
          now.subtract(TOTAL_HOURS - (val ?? 0), 'hour').format('DD MMM, HH:mm')
        }
      />
    </div>
  );
};

export default TimelineSlider;
