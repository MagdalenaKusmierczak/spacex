import { useState, useEffect } from "react";
import { getRockets } from "../../service/API/RocketsAPI";
import RocketsList from "../../components/RocketsList/RocketsList";
import Rocket from "../../service/interfaces/RocketInterface";
import { Main } from "../Main.styled";

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
    rocketsData && (
      <Main>
        <RocketsList rockets={rocketsData} />
      </Main>
    )
  );
};

export default HomePage;
