import { useEffect, useState } from 'react';
import moment from 'moment';

interface Current {
  years: number;
  months: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const Age = () => {
  const [current, setCurrent] = useState<Current>();
  const birthTime = 998078400000;

  useEffect(() => {
    const interval = setInterval(() => {
      const birthday = moment(birthTime);
      const now = moment(new Date());
      const years = now.diff(birthday, 'years');
      birthday.add(years, 'years');
      const months = now.diff(birthday, 'months');
      birthday.add(months, 'months');
      const days = now.diff(birthday, 'days');
      birthday.add(days, 'days');
      const hours = now.diff(birthday, 'hours');
      birthday.add(hours, 'hours');
      const minutes = now.diff(birthday, 'minutes');
      birthday.add(minutes, 'minutes');
      const seconds = now.diff(birthday, 'seconds');

      setCurrent({ years, months, days, hours, minutes, seconds });
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="text-sm text-green-500 mt-2 col-span-8 row-start-4">
      Current level:&nbsp;
      {current && (
        <>
          {current.years}
          &nbsp;
          <span className="hidden md:inline-block">years,</span>
          <span className="inline-block md:hidden">Y,</span>
          &nbsp;
          {current.months}
          &nbsp;
          <span className="hidden md:inline-block">months,</span>
          <span className="inline-block md:hidden">M,</span>
          &nbsp;
          {current.days}
          &nbsp;
          <span className="hidden md:inline-block">days,</span>
          <span className="inline-block md:hidden">D,</span>
          &nbsp;
          {current.hours}
          &nbsp;
          <span className="hidden md:inline-block">hours,</span>
          <span className="inline-block md:hidden">HRS,</span>
          &nbsp;
          {current.minutes}
          &nbsp;
          <span className="hidden md:inline-block">minutes and</span>
          <span className="inline-block md:hidden">MINS and</span>
          &nbsp;
          {current.seconds}
          &nbsp;
          <span className="hidden md:inline-block">seconds</span>
          <span className="inline-block md:hidden">S</span>
        </>
      )}
    </div>
  );
};

export default Age;
