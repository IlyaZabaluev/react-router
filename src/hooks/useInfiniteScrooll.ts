import { useState, useEffect, useCallback, useRef } from 'react';

export const useInfiniteScroll = <T,>(
  fetchFn: (page: number) => Promise<{ results: T[]; info: { next: string | null } }>
) => {
  const [data, setData] = useState<T[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const observerRef = useRef<IntersectionObserver>(null);

  const fetchData = useCallback(async () => {
    if (loading || !hasMore) return;
    setLoading(true);
    
    try {
      const response = await fetchFn(page);
      setData(prev => [...prev, ...response.results]);
      setHasMore(!!response.info.next);
      setPage(prev => prev + 1);
    } catch (error) {
      console.error('Fetch error:', error);
    } finally {
      setLoading(false);
    }
  }, [page, loading, hasMore, fetchFn]);

  const lastElementRef = useCallback(
    (node: HTMLElement | null) => {
      if (loading) return;
      if (observerRef.current) observerRef.current.disconnect();

      observerRef.current = new IntersectionObserver(entries => {
        if (entries[0]?.isIntersecting && hasMore) {
          fetchData();
        }
      });

      if (node) observerRef.current.observe(node);
    },
    [loading, hasMore, fetchData]
  );

  useEffect(() => {
    fetchData();
  }, []);

  return { data, loading, lastElementRef };
};