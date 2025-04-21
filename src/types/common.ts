import { BaseQueryApi } from "@reduxjs/toolkit/query";
import { TMeta } from "./meta";
import { TError } from "./error";

export type TResponse<T> = {
  data?: {
    data: T[] | T;
    success?: boolean;
    message?: string;
    statusCode?: number;
  };
  error?: TError;
  meta?: TMeta;
  success: boolean;
  message: string;
  statusCode: number;
};

export type TReduxResponse<T> = TResponse<T> & BaseQueryApi;
