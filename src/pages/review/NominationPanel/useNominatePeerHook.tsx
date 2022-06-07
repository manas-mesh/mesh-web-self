import React from 'react';
import { useMutation, useQuery, UseQueryOptions, UseQueryResult } from 'react-query';
import axios, { AxiosRequestConfig } from 'axios';
import { NominatePeerUtil } from './NominatePeerUtil';

export default function useNominatePeerHook(id: number) {
  const url = 'https://dev-review-ws.mesh.ai/service/custom/auth/review/peer/poolDetails?review_id=239';

  const fetchData = () =>
    axios.get(url, {
      withCredentials: true,
    });
  const { isLoading, error, data } = useQuery(url, fetchData, {
    onSuccess: (response) => {
      const entity = response?.data?.entity ?? {};
      const fileterObjectModified = NominatePeerUtil.getFilters(entity?.peerLimits);
      entity['peerLimits'] = fileterObjectModified;
    },
  });

  return { data };
}
