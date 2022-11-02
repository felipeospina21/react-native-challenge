import type { AxiosRequestConfig } from 'axios';
import axios from 'axios';

export async function axiosQueryFn<T>(config: AxiosRequestConfig): Promise<T> {
  return await axios({ ...config });
}
