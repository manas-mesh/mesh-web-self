// Libraries
import { useEffect, useRef, RefObject } from 'react';

// Hooks
import useIntersectionObserver from '@hooks/useIntersectionObserver';

type useInfiniteLoadingArgs = {
  isLoading: boolean;
  canLoadMore: boolean;
  onLoadMore: () => void;
  delayInMs?: number;
};

const DEFAULT_DELAY_IN_MS = 100;

function useInfiniteLoading({
  isLoading,
  canLoadMore,
  onLoadMore,
  delayInMs = DEFAULT_DELAY_IN_MS,
}: useInfiniteLoadingArgs): RefObject<HTMLDivElement> {
  const loadingTriggerRef = useRef<HTMLDivElement | null>(null);
  const loaderObserver = useIntersectionObserver(loadingTriggerRef, {});

  const shouldLoadMore = !isLoading && canLoadMore && loaderObserver?.isIntersecting;

  useEffect(() => {
    if (shouldLoadMore) {
      // When we trigger 'onLoadMore' and new items are added to the list,
      // right before they become rendered on the screen, 'loading' becomes false
      // and 'isIntersecting' can be true for a brief time, based on the scroll position.
      // So, it triggers 'onLoadMore' just after the first one is finished.
      // We use a small delay here to prevent this kind of situation.
      // The delay can also configured through hooks params, the default value is 100ms
      const timer = setTimeout(() => {
        onLoadMore();
      }, delayInMs);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [onLoadMore, shouldLoadMore, delayInMs]);

  return loadingTriggerRef;
}

export default useInfiniteLoading;
