import React from 'react';
import { useMutation } from 'react-query';
import axios, { AxiosRequestConfig } from 'axios';

const useNominateListMutation = () => {
  const { mutate, data } = useMutation(
    (data: any) =>
      axios.put(`https://dev-review-ws.mesh.ai/service/custom/auth/review/peer/nominateList?review_id=${234}`, data, {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      }),
    {
      onSuccess: (response) => {},
    },
  );
  return { mutate, data };
};

export default useNominateListMutation;
