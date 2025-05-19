import { RocketDetails } from "../RocketDetails/RocketDetails";
import { Intro } from "../RocketSpecs";
import { Loader } from "../Loader/Loader";
import { Main } from "../../pages/Main.styled";
import { useRocketContext } from "../RocketProvider/RocketProvider";

export const RocketContent = () => {
  const { rocket, error } = useRocketContext();

  if (error) {
    console.log(error);
    return <Main>Error: {error.message}</Main>;
  }

  if (!rocket) {
    return <Loader />;
  }

  return (
    <Main>
      <Intro />
      <RocketDetails />
    </Main>
  );
};
