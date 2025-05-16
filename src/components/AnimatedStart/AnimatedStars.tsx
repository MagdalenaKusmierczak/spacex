import { useState, useEffect } from "react";
import { Sky, Star } from "./AnimatedStars.styled";

export const AnimatedStars = () => {
  const [isShooting, setIsShooting] = useState(true);

  useEffect(() => {
    const timer = setInterval(
      () => {
        setIsShooting(!isShooting);
      },
      15000 * Math.floor(Math.random() * 3),
    );
    return () => clearInterval(timer);
  }, [isShooting]);

  return (
    <Sky>
      <Star
        $shoot={isShooting}
        $shootTime="2s"
        $shootDelay="0.5s"
        $position="0px"
      />
      <Star
        $shoot={isShooting}
        $shootTime="2.5s"
        $shootDelay="2.5s"
        $position="80px"
      />
      <Star
        $shoot={isShooting}
        $shootTime="2s"
        $shootDelay="1.5s"
        $position="180px"
      />
      <Star
        $shoot={isShooting}
        $shootTime="2.5s"
        $shootDelay="2.5s"
        $position="-280px"
      />
      <Star
        $shoot={isShooting}
        $shootTime="2s"
        $shootDelay="3s"
        $position="-180px"
      />
    </Sky>
  );
};
