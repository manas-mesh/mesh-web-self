import { ICON_NAMES } from '@constants/icons';
import { useTheme } from '@emotion/react';
import { ThemeType } from '@themes/clients/baseTheme';
import Icon from '@uiToolkit/Icon/Icon';
import type { NextPage } from 'next';
import Image from 'next/image';

import { useFetch } from '../fetcher/';

import { useFetchPostsQuery } from '../services/modules/users/';

const Home: NextPage = () => {
  //const { data: posts } = useFetchPostsQuery(1);

  const data = useFetch<any[]>('https://jsonplaceholder.typicode.com/posts', undefined, { retry: false });

  console.log(data, 'data');
  const theme: ThemeType = useTheme();

  return (
    <div>
      Develop
      <Icon name={ICON_NAMES.testIcon} sx={{ color: theme.colors.icon.red400, fontSize: '56px' }} />
    </div>
  );
};

export default Home;
