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
        setRocketsData(rockets);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <section>
      <RocketsList rockets={rocketsData} />
    </section>
  );
};
export default HomePage;
