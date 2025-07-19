import React, { useEffect, useState } from "react";

const CountdownTimer = ({ expiryTimestamp, countCompleted }) => {
  const calculateTimeLeft = () => {
    const now = Math.floor(Date.now() / 1000); // in seconds
    const diff = expiryTimestamp - now;
    return diff > 0 ? diff : 0;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(127));

  useEffect(() => {
    if (timeLeft <= 0) {
        countCompleted();
        return;
    };

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, expiryTimestamp]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="mt-4 text-center">
      <div className="inline-block px-4 py-2 bg-yellow-100 border border-yellow-400 text-yellow-800 rounded-xl shadow-md">
        <span className="text-sm font-semibold">QR expires in </span>
        <span className="font-bold text-lg">
          {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
        </span>
        <span className="text-sm font-semibold"> mins</span>
      </div>
    </div>
  );
};

export default CountdownTimer;
