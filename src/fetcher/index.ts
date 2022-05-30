import { QueryFunctionContext, useQuery, UseQueryOptions } from 'react-query';
import axios from 'axios';

type QueryKeyT = [string, object | undefined];

export const fetcher = async <T>({ queryKey, pageParam }: QueryFunctionContext<QueryKeyT>): Promise<T> => {
  const [url, params] = queryKey;
  const res = await axios.get<T>(url, { params: { ...params, pageParam } });
  return res.data;
};

export const useFetch = <T>(url: string | null, params?: object, config?: UseQueryOptions<T, Error, T, QueryKeyT>) => {
  const context = useQuery<T, Error, T, QueryKeyT>([url!, params], fetcher, {
    enabled: !!url,
    ...config,
  });

  return context;
};
