import { useParams } from "react-router-dom";
import { useRocket } from "service/API/RocketsAPI";
import Loader from "utils/Loader/Loader";
import IntroSection from "components/RocketSections/IntroSection";
import RocketDetails from "components/RocketDetails/RocketDetails";
import { Main } from "../Main.styled";

const RocketPage = () => {
  const { id } = useParams();
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
