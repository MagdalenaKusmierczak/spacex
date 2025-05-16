import { useState, useEffect } from "react";
import { Sky, StarOne, StarTwo, StarThree } from "./AnimatedStars.styled";

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
      <StarOne $shoot={isShooting} />
      <StarTwo $shoot={isShooting} />
      <StarThree $shoot={isShooting} />
    </Sky>
  );
};
