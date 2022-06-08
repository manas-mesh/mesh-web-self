import type { NextPage } from 'next';
import { useFetch } from '../fetcher/';
import { TextBodyLargeBold } from '@uiToolkit/Typography/Typography';
import { ScrollableSectionNav } from '@uiToolkit/ScrollableSectionNav';

const Home: NextPage = () => {
  //const { data: posts } = useFetchPostsQuery(1);

  const data = useFetch<any[]>('https://jsonplaceholder.typicode.com/posts', undefined, { retry: false });

  // console.log(data, 'data');

  return <TextBodyLargeBold>Develop</TextBodyLargeBold>;
};

export default Home;
