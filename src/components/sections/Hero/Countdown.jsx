import { useEffect, useState } from "react";
import "./Countdown.css";

function Countdown() {
  const targetDate = new Date("2026-08-17T09:00:00").getTime();

  const calculateTime = () => {
    const now = new Date().getTime();
    const difference = targetDate - now;

    return {
      days: Math.max(0, Math.floor(difference / (1000 * 60 * 60 * 24))),
      hours: Math.max(
        0,
        Math.floor((difference / (1000 * 60 * 60)) % 24)
      ),
      minutes: Math.max(
        0,
        Math.floor((difference / (1000 * 60)) % 60)
      ),
      seconds: Math.max(
        0,
        Math.floor((difference / 1000) % 60)
      ),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTime());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="countdown">

      <h3>17 – 23 Agosto 2026</h3>

      <div className="countdown__grid">

        <div className="countdown__card">
          <span>{timeLeft.days}</span>
          <small>Días</small>
        </div>

        <div className="countdown__card">
          <span>{timeLeft.hours}</span>
          <small>Horas</small>
        </div>

        <div className="countdown__card">
          <span>{timeLeft.minutes}</span>
          <small>Min</small>
        </div>

        <div className="countdown__card">
          <span>{timeLeft.seconds}</span>
          <small>Seg</small>
        </div>

      </div>

    </div>
  );
}

export default Countdown;