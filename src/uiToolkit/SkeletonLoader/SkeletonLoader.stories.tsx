import { SkeletonLoader } from '.';

const SkeletonLoaderStory = {
  title: 'Core Components/SkeletonLoader',
  component: SkeletonLoader,
};

export const Primary = () => <SkeletonLoader />;

export const Custom = () => <SkeletonLoader skeletons={['10px', '20px', '30px', '40px']} />;

export default SkeletonLoaderStory;
