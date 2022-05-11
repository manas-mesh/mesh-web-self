import { EndpointBuilder } from '@reduxjs/toolkit/dist/query/endpointDefinitions';
import { api } from '../../api';

export const userApi = api.injectEndpoints({
  endpoints: (build) => ({
    fetchPosts: build.query<any, number>({
      query: (page) => `posts/${page}`,
    }),
  }),
  overrideExisting: false,
});

export const { useFetchPostsQuery } = userApi;
