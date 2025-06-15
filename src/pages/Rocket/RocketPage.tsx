import { useParams } from "react-router-dom";
import { useRocket } from "../../hooks/rocketsHooks";
import { Loader } from "../../components/Loader/Loader";
import { RocketContent } from "../../components/Layouts/RocketContent";
import { RocketProvider } from "../../components/RocketProvider/RocketProvider";
import { Main } from "../Main.styled";
import { useScrollToTop } from "../../utils/useScrollToTop";

const shipsIds = {
  Falcon1: "5e9d0d95eda69955f709d1eb",
  Falcon9: "5e9d0d95eda69973a809d1ec",
  FalconHeavy: "5e9d0d95eda69974db09d1ed",
  Starship: "5e9d0d96eda699382d09d1ee",
} as const;

type ShipName = keyof typeof shipsIds;

export const RocketPage = () => {
  useScrollToTop();
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
    <RocketProvider rocketId={id as string}>
      <RocketContent />
    </RocketProvider>
  );
};

export default RocketPage;
