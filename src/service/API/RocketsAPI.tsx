import useSWR from "swr";
import http from "./http";

const fetcher = (url: string) => http.get(url).then((res) => res.data);

export const useRockets = () => {
  const { data, error } = useSWR("rockets", fetcher);
  return { data, error };
};

export const useRocket = (rocketId: string) => {
  const { data, error } = useSWR(`rockets/${rocketId}`, fetcher);
  return { data, error };
};
