import type { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import axios from 'axios';

export async function axiosQueryFn<T>(
  config: AxiosRequestConfig
): Promise<AxiosResponse<T, AxiosError>> {
  const prom = new Promise<AxiosResponse<T, AxiosError>>((resolve, reject) => {
    axios({ ...config })
      .then((resp) => resolve(resp))
      .catch((error) => reject(error));
  });

  return prom;
}
