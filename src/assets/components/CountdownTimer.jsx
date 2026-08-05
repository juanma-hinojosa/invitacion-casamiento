import { useState, useEffect } from 'react';

const CountdownTimer = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date();
      let timeLeft = {};

      if (difference > 0) {
        timeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      } else {
        timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }
      return timeLeft;
    };

    setTimeLeft(calculateTimeLeft());
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const formatNumber = (num) => (num < 10 ? `0${num}` : num);

  return (
    <div className="countdown-container">
      <div className="time-block">
        <span className="time-number">{formatNumber(timeLeft.days)}</span>
        <span className="time-label">DÍAS</span>
      </div>
      <span className="separator">|</span>
      <div className="time-block">
        <span className="time-number">{formatNumber(timeLeft.hours)}</span>
        <span className="time-label">HORAS</span>
      </div>
      <span className="separator">|</span>
      <div className="time-block">
        <span className="time-number">{formatNumber(timeLeft.minutes)}</span>
        <span className="time-label">MINUTOS</span>
      </div>
      <span className="separator">|</span>
      <div className="time-block">
        <span className="time-number">{formatNumber(timeLeft.seconds)}</span>
        <span className="time-label">SEGUNDOS</span>
      </div>
    </div>
  );
};

export default CountdownTimer;