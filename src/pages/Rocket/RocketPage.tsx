import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getRocket } from "../../service/API/RocketsAPI";

import Rocket from "../../service/Interfaces/RocketInterface";

const RocketPage = () => {
  const [rocketData, setRocketData] = useState<Rocket[]>([]);
  const { id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const rocket = await getRocket(id as string);
        console.log(rocket);
        setRocketData(rocket);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);
  return <div>Hello</div>;
};
export default RocketPage;
