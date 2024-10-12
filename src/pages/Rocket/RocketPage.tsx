import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getRocket } from "../../service/API/RocketsAPI";
import IntroSection from "../../components/RocketSections/IntroSection";
import RocketDetails from "../../components/RocketDetails/RocketDetails";
import Rocket from "../../service/Interfaces/RocketInterface";
import { Main } from "../Main.styled";

const RocketPage = () => {
  const [rocketData, setRocketData] = useState<Rocket | null>(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const rocket = await getRocket(id as string);
        setRocketData(rocket);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);

  return (
    rocketData && (
      <Main>
        <IntroSection rocketData={rocketData} />
        <RocketDetails rocketData={rocketData} />
      </Main>
    )
  );
};

export default RocketPage;
