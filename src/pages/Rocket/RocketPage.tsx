import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getRocket } from "../../service/API/RocketsAPI";
import RocketSection from "../../components/RocketSection/RocketSection";
import Rocket from "../../service/Interfaces/RocketInterface";

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
   
  return rocketData? <RocketSection rocketData={rocketData} />:null;
};
export default RocketPage;
