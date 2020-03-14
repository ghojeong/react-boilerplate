import { OperatorFunction } from "rxjs";
import { map } from "rxjs/operators";
import { AxiosResponse } from "axios";
import AxiosObservable from "axios-observable";
import { API_ENDPOINT } from "app/configs";

export const httpClient = AxiosObservable.create({
  baseURL: API_ENDPOINT
});

type ProxyAxiosResponse<T> = T extends AxiosResponse<infer D> ? D : never;
export const mapApiResponse: <
  T extends AxiosResponse<R>,
  R = ProxyAxiosResponse<T>
>() => OperatorFunction<T, R> = () => map(({ data }) => data);
