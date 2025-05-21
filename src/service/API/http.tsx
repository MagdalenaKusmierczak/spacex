import axios, { AxiosInstance, AxiosRequestConfig, ResponseType } from "axios";

const ROCKETS_URL = "https://api.spacexdata.com/v4/";

const httpOptions: AxiosRequestConfig = {
  baseURL: ROCKETS_URL,
  responseType: "json" as ResponseType,
};

export const http: AxiosInstance = axios.create(httpOptions);
