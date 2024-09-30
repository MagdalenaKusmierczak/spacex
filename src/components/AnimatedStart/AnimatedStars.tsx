import { useState, useEffect } from "react";

import {
  Sky,
  StarOne,
  StarTwo,
  StarThree,
  StarFour,
  StarFive,
} from "./AnimatedStars.styled";
const AnimatedStars = () => {
  const [isShooting, setIsShooting] = useState(true);
  useEffect(() => {
    const timer = setInterval(() => {
      setIsShooting(!isShooting);
    }, 15000);
    return () => clearInterval(timer);
  }, [isShooting]);
  return (
    <Sky>
      <StarOne $shoot={isShooting} />
      <StarTwo $shoot={isShooting} />
      <StarThree $shoot={isShooting} />
      <StarFour $shoot={isShooting} />
      <StarFive $shoot={isShooting} />
    </Sky>
  );
};
export default AnimatedStars;
