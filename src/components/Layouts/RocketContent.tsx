import { RocketDetails } from "../RocketDetails/RocketDetails";
import { Loader } from "../Loader/Loader";
import { RocketMain } from "../../pages/Main.styled";
import { useRocketContext } from "../RocketProvider/RocketProvider";
import { SpecsNav } from "../SpecsNav/SpecsNav";

export const RocketContent = () => {
  const { rocket, error } = useRocketContext();

  if (error) {
    console.log(error);
    return <RocketMain>Error: {error.message}</RocketMain>;
  }

  if (!rocket) {
    return <Loader />;
  }

  return (
    <>
      <SpecsNav />
      <RocketMain>
        <RocketDetails />
      </RocketMain>
    </>
  );
};
