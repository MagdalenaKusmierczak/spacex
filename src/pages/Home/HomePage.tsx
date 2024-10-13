import { useState, useEffect } from "react";
import { getRockets } from "../../service/API/RocketsAPI";
import Loader from "../../utils/Loader/Loader";
import RocketsList from "../../components/RocketsList/RocketsList";
import Rocket from "../../service/types/RocketInterface";
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

  if (!rocketsData) {
    return <Loader />;
  }

  return (
      <Main>
        <RocketsList rockets={rocketsData} />
      </Main>
  );
};

export default HomePage;
