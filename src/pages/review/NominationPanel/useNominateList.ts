import React from 'react';
import { useQuery } from 'react-query';
import axios, { AxiosRequestConfig } from 'axios';
import { NominatePeerUtil } from './NominatePeerUtil';

export default function useNominateList() {
  const url = 'https://dev-review-ws.mesh.ai/service/custom/auth/review/peer/nominateList?review_id=234';

  const fetchData = () =>
    axios.get(url, {
      withCredentials: true,
    });
  const { isLoading, error, data } = useQuery(url, fetchData, {
    onSuccess: (response) => {
      //const data = NominatePeerUtil.getNominatedList(response.data.entity);
    },
  });

  return { data };
}
