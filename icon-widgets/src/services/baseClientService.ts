import axios, { AxiosRequestConfig } from 'axios';
import * as R from 'ramda';

export const BaseClientService = ({ baseURL }) => {
  const instance = axios.create({
    baseURL,
    timeout: 30000,
    headers: {},
  });

  instance.interceptors.response.use(
    response => response.data,
    error => {
      const config: AxiosRequestConfig = error.config;

      const data = R.path(['response', 'data'], error);

      const message = {
        url: `[${R.toUpper(config.method)}] ${config.url}`,
        status: R.pathOr(
          R.toLower(String(error.code)),
          ['response', 'status'],
          error,
        ),
        code: R.propOr('unknown', 'errorCode', data),
        message: R.propOr(error.message, 'message', data),
      };

      console.error(
        `{error on api calling | url: ${message.url} | status: ${message.status} | code: ${message.code} | message: ${message.message}}`,
      );

      // should return error for handle error
      return Promise.reject(message);
    },
  );

  const apis = {
    request: <T>(config: AxiosRequestConfig): Promise<T> => {
      return instance.request<T, T>(config);
    },
    get: <T>(url: string, config?: AxiosRequestConfig): Promise<T> => {
      return instance.get<T, T>(url, config);
    },
    delete: <T>(url: string, config?: AxiosRequestConfig): Promise<T> => {
      return instance.delete<T, T>(url, config);
    },
    head: <T>(url: string, config?: AxiosRequestConfig): Promise<T> => {
      return instance.head<T, T>(url, config);
    },
    options: <T>(url: string, config?: AxiosRequestConfig): Promise<T> => {
      return instance.options<T, T>(url, config);
    },
    post: <T>(url: string, config?: AxiosRequestConfig): Promise<T> => {
      return instance.post<T, T>(url, config);
    },
    put: <T>(url: string, config?: AxiosRequestConfig): Promise<T> => {
      return instance.put<T, T>(url, config);
    },
    patch: <T>(url: string, config?: AxiosRequestConfig): Promise<T> => {
      return instance.patch<T, T>(url, config);
    },
  };

  return { ...instance, ...apis };
};
