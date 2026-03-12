import { type TimeRange, TIME_RANGES } from '@/types/types.ts';
import { Wrapper, RangeButton } from '@/components/TimeRangeSwitcher/TimeRangeSwitcher.styles.ts';
import { useIsMobile } from '@/hooks/useIsMobile.ts';

interface TimeRangeSwitcherProps {
  value: TimeRange;
  onChange: (range: TimeRange) => void;
}

const TimeRangeSwitcher = ({ value, onChange }: TimeRangeSwitcherProps) => {
  const isMobile = useIsMobile();
  return (
    <Wrapper isMobile={isMobile}>
      {TIME_RANGES.map((range) => (
        <RangeButton isSelected={value === range} key={range} onClick={() => onChange(range)}>
          {range}
        </RangeButton>
      ))}
    </Wrapper>
  );
};

export default TimeRangeSwitcher;
