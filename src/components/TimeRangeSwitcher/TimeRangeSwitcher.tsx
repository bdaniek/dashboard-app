import { type TimeRange, TIME_RANGES } from '@/types/types.ts';
import { Wrapper, RangeButton } from '@/components/TimeRangeSwitcher/TimeRangeSwitcher.styles.ts';

interface TimeRangeSwitcherProps {
  value: TimeRange;
  onChange: (range: TimeRange) => void;
}

const TimeRangeSwitcher = ({ value, onChange }: TimeRangeSwitcherProps) => {
  return (
    <Wrapper>
      {TIME_RANGES.map((range) => (
        <RangeButton isSelected={value === range} key={range} onClick={() => onChange(range)}>
          {range}
        </RangeButton>
      ))}
    </Wrapper>
  );
};

export default TimeRangeSwitcher;
