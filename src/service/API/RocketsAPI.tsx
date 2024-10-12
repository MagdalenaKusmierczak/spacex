import axios from "axios";
import Rocket from "../Interfaces/RocketInterface";

const ROCKETS_URL = "https://api.spacexdata.com/v4/";
axios.defaults.baseURL = ROCKETS_URL;

export const getRockets = async () => {
  const response = await axios.get(`rockets`);
  const rockets: Rocket[] = response.data;
  return rockets;
};

export const getRocket = async (rocketId: string) => {
  const response = await axios.get(`rockets/${rocketId}`);
  const rocket: Rocket = response.data;
  return rocket;
};
