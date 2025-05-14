import { useParams } from "react-router-dom";
import { useRocket } from "../../service/API/RocketsAPI";
import Loader from "../../components/Loader/Loader";
import IntroSection from "../../components/RocketSections/IntroSection";
import RocketDetails from "../../components/RocketDetails/RocketDetails";
import { Main } from "../Main.styled";

const shipsIds = {
  Falcon1: "5e9d0d95eda69955f709d1eb",
  Falcon9: "5e9d0d95eda69973a809d1ec",
  FalconHeavy: "5e9d0d95eda69974db09d1ed",
  Starship: "5e9d0d96eda699382d09d1ee",
} as const;

type ShipName = keyof typeof shipsIds;

const RocketPage = () => {
  const { shipName } = useParams<{ shipName: ShipName }>();
  const id = shipName ? shipsIds[shipName] : "";
  const { data, error } = useRocket(id as string);

  if (error) {
    console.log(error);
    return <Main>Error: {error.message}</Main>;
  }

  if (!data) {
    return <Loader />;
  }

  return (
    <Main>
      <IntroSection rocketData={data} />
      <RocketDetails rocketData={data} />
    </Main>
  );
};

export default RocketPage;
