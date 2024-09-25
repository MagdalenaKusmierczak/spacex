import axios from "axios";
//Interface
import Rocket from "../Interfaces/RocketInterface";
//Axios settings
const ROCKETS_URL = "https://api.spacexdata.com/v3/";
axios.defaults.baseURL = ROCKETS_URL;

//Function to get all rockets
export const getRockets = async () => {
  const response = await axios.get(`rockets`);
  const rockets: Rocket[] = response.data;
  return rockets;
};

//Function to get rocket by id
export const getRocket = async (rocketId: string) => {
  const response = await axios.get(`rockets/${rocketId}`);
  const rocket: Rocket= response.data;
  return rocket;
};
