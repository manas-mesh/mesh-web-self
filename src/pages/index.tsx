import type { NextPage } from 'next';
import Image from 'next/image';

import { useFetch } from '../fetcher/';
import { AppNavigationOutlined, ArrowRight, Test } from '@iconComponents';
import { useFetchPostsQuery } from '../services/modules/users/';
import Sliderr from '../uiToolkit/Slider';

const Home: NextPage = () => {
  //const { data: posts } = useFetchPostsQuery(1);

  const data = useFetch<any[]>('https://jsonplaceholder.typicode.com/posts', undefined, { retry: false });

  // console.log(data, 'data');

  return (
    <div style={{ width: 150, marginLeft: 20 }}>
      Develop
      <Sliderr
        onChangeEnd={(e) => {
          console.log(e, 'final value');
        }}
        value={1}
        max={20}
      />
    </div>
  );
};

export default Home;
