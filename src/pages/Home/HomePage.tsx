import { useRockets } from "../../service/API/RocketsAPI";
import Loader from "../../utils/Loader/Loader";
import RocketsList from "../../components/RocketsList/RocketsList";
import { Main } from "../Main.styled";

const HomePage = () => {
const { data, error } = useRockets();

 if (error) {
   console.log(error);
   return <Main>Error: {error.message}</Main>;
 }

 if (!data) {return <Loader />;}

 return (
   <Main>
     <RocketsList rockets={data} />
   </Main>
 );
};

export default HomePage;
