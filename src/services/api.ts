import { BaseQueryFn, FetchArgs, createApi, fetchBaseQuery, FetchBaseQueryError } from '@reduxjs/toolkit/query/react';

export const Config = {
  API_URL: 'https://jsonplaceholder.typicode.com/',
};

const baseQuery = fetchBaseQuery({
  baseUrl: Config.API_URL,
});

const baseQueryWithInterceptor: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (
  args,
  api,
  extraOptions,
) => {
  const result = await baseQuery(args, api, extraOptions);
  if (result.error && result.error.status === 401) {
  }
  if (result.error) {
    console.log('result', result);
  }
  return result;
};

export const api = createApi({
  baseQuery: baseQueryWithInterceptor,
  endpoints: () => ({}),
});
