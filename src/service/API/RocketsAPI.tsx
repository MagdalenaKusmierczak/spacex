import { http } from "./http";

export const fetcher = (url: string) => http.get(url).then((res) => res.data);
