import React from 'react';
import { useMutation } from 'react-query';
import axios, { AxiosRequestConfig } from 'axios';
import { EmployeeModel } from 'models/EmployeeModel';

interface ISearchData {
  text?: string | null;
  cohortType?: any;
  limit?: number;
  feedbackFormId?: number;
}

const searchData = {
  text: null,
  cohortType: null,
  limit: 10,
  feedbackFormId: 4112,
};

const useSearchMutation = () => {
  const { mutate, data } = useMutation(
    (data: ISearchData) =>
      axios.post(`https://dev-review-ws.mesh.ai/service/custom/auth/review/peer/search/`, data, {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      }),
    {
      onSuccess: (response) => {
        const entity = response?.data?.entity ?? [];
        return entity.map((item: any) => {
          item['employee'] = new EmployeeModel(item.employee);
          return item;
        });
      },
    },
  );
  return { mutate, data };
};

export default useSearchMutation;
