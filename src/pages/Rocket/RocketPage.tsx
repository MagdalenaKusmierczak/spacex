import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getRocket } from "../../service/API/RocketsAPI";
import Rocket from "../../service/Interfaces/RocketInterface";
import GeneralSection from "../../components/RocketSections/GeneralSection";
import DimensionsSection from "../../components/RocketSections/DimensionsSection";
import StagesSection from "../../components/RocketSections/StagesSection";
import EnginesSection from "../../components/RocketSections/EnginesSection";
import GallerySection from "../../components/RocketSections/GallerySection";
import PayloadsSection from "../../components/RocketSections/PayloadsSection";
import LandingLegsSection from "../../components/RocketSections/LandingLegsSection";
import MoreSection from "../../components/RocketSections/MoreSection";

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

  return rocketData ? (
    <main>
      <GeneralSection rocketData={rocketData} />
      <DimensionsSection rocketData={rocketData} />
      <EnginesSection rocketData={rocketData} />
      <LandingLegsSection rocketData={rocketData} />
      <StagesSection rocketData={rocketData} />
      <PayloadsSection rocketData={rocketData} />
      <GallerySection rocketData={rocketData} />
      <MoreSection rocketData={rocketData} />
    </main>
  ) : null;
};
export default RocketPage;
