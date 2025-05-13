import useSWR from "swr";
import http from "./http";

// It's a good idea to abstract the data fetching into a separate file 🙂
// I'd only think about moving hooks into e.g. `hooks` catalog and only leave the data fetcher here.
// (hooks are usually closer to the components than API services)
const fetcher = (url: string) => http.get(url).then((res) => res.data);

export const useRockets = () => {
  const { data, error } = useSWR("rockets", fetcher);
  return { data, error };
};

export const useRocket = (rocketId: string) => {
  const { data, error } = useSWR(`rockets/${rocketId}`, fetcher);
  return { data, error };
};
