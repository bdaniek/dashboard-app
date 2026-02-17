import { useState, useEffect } from 'react';

export const useCurrentDate = () => {
  const [date, setDate] = useState<Date>(() => new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000); // updates every second

    return () => clearInterval(interval);
  }, []);

  return date;
};
