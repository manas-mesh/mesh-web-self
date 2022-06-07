import type { NextPage } from 'next';
import Image from 'next/image';
import { useFetch } from '../fetcher/';
import { AppNavigationOutlined, ArrowRight, Test } from '@iconComponents';
import { TextBodyLargeBold } from '@uiToolkit/Typography/Typography';

const Home: NextPage = () => {
  //const { data: posts } = useFetchPostsQuery(1);

  const data = useFetch<any[]>('https://jsonplaceholder.typicode.com/posts', undefined, { retry: false });

  // console.log(data, 'data');
  return <TextBodyLargeBold>Develop</TextBodyLargeBold>;
};

export default Home;
