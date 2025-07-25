// src/hooks/useApi.ts
import { useState, useCallback } from "react";
import {type AxiosRequestConfig, AxiosError } from "axios";
import { useAuth } from "@clerk/clerk-react";
import axiosInstance from "@/lib/axios";

type HttpMethod = "get" | "post" | "put" | "delete";

interface RequestOptions extends AxiosRequestConfig {
  requireAuth?: boolean; 
}

export interface ApiResponse<T = any> {
  data: T | null;
  error: string | null;
  isLoading: boolean;
  request: (
    method: HttpMethod,
    url: string,
    body?: any,
    options?: RequestOptions
  ) => Promise<T | null>;
}

export function useApi<T = any>(): ApiResponse<T> {
  const { getToken } = useAuth();
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const request = useCallback(
    async (
      method: HttpMethod,
      url: string,
      body: any = null,
      options: RequestOptions = {}
    ): Promise<T | null> => {
      setIsLoading(true);
      setError(null);

      try {
        const token = options.requireAuth ? await getToken() : null;

        const headers = {
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
          ...options.headers,
        };

        const config: AxiosRequestConfig = {
          ...options,
          headers,
        };

        let response;

        switch (method) {
          case "get":
            response = await axiosInstance.get<T>(url, config);
            break;
          case "post":
            response = await axiosInstance.post<T>(url, body, config);
            break;
          case "put":
            response = await axiosInstance.put<T>(url, body, config);
            break;
          case "delete":
            response = await axiosInstance.delete<T>(url, config);
            break;
          default:
            throw new Error("Unsupported HTTP method");
        }

        setData(response.data);
        return response.data;
      } catch (err) {
        const axiosErr = err as AxiosError;
        const message =
          axiosErr.response?.data && typeof axiosErr.response.data === "object"
            ? JSON.stringify(axiosErr.response.data)
            : axiosErr.message;
        setError(message);
        return null;
      } finally {
        setIsLoading(false);
      }
    },
    [getToken]
  );

  return { data, error, isLoading, request };
}
