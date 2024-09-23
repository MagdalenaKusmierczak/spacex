import { useState, useEffect } from "react";
import { getRockets } from "../../service/API/RocketsAPI";
import RocketsList from "../../components/RocketsList/RocketsList";
import Rocket from "../../service/Interfaces/RocketInterface";

const HomePage = () => {
  const [rocketsData, setRocketsData] = useState<Rocket[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const rockets = await getRockets();
        console.log(rockets);
        setRocketsData(rockets);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <RocketsList rockets={rocketsData} />
    </div>
  );
};
export default HomePage;
