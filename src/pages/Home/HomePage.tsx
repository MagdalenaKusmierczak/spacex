import { useRockets } from "../../service/API/RocketsAPI";
import { Loader } from "../../components/Loader/Loader";
import { RocketsList } from "../../components/RocketsList/RocketsList";
import { Main } from "../Main.styled";

export const HomePage = () => {
  const { data, error } = useRockets();

  if (error) {
    console.log(error);
    return <Main>Error: {error.message}</Main>;
  }

  if (!data) {
    return <Loader />;
  }

  return (
    <Main>
      <RocketsList rockets={data} />
    </Main>
  );
};
