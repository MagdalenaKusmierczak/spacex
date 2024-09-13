import axios from "axios";
//Interface
import Rocket from "../Interfaces/RocketInterface";
//Axios settings
const ROCKETS_URL = "https://api.spacexdata.com/v3/";
axios.defaults.baseURL = ROCKETS_URL;

//Function to get all rockets
export const getRockets = async () => {
  const response: Rocket[] = await axios.get(`/rockets`);
  return response;
};

//Function to get rocket by id
export const getRocketDetails = async (rocketId: string) => {
  const response: Rocket[] = await axios.get(`/rockets/{${rocketId}}`);
  return response;
};
