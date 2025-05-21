import useSWR from "swr";
import { fetcher } from "../service/API/RocketsAPI";

export const useRockets = () => {
  const { data, error } = useSWR("rockets", fetcher);
  return { data, error };
};

export const useRocket = (rocketId: string) => {
  const { data, error } = useSWR(`rockets/${rocketId}`, fetcher);
  return { data, error };
};
