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
  const shootTimer = setInterval(() => {
    setIsShooting(!isShooting);
  }, 15000);
  return (
    <Sky>
      <StarOne isShooting={isShooting} />
      <StarTwo isShooting={isShooting} />
      <StarThree isShooting={isShooting} />
      <StarFour isShooting={isShooting} />
      <StarFive isShooting={isShooting} />
    </Sky>
  );
};
export default AnimatedStars;
