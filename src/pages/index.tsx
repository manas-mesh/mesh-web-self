import type { NextPage } from 'next';
import Image from 'next/image';

import { useFetchPostsQuery } from '../services/modules/users/';

const Home: NextPage = () => {
  const { data: posts } = useFetchPostsQuery(1);

  return <div>Develop</div>;
};

export default Home;
