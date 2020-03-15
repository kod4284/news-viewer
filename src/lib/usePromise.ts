import { useState, useEffect, DependencyList } from 'react';

export default function usePromise(
  promiseCreator: Function,
  deps: DependencyList | undefined,
) {
  const [loading, setLoading]: [boolean, Function] = useState(false);
  const [resolved, setResolved]: [any, Function] = useState(null);
  const [error, setError]: [String | null, Function] = useState(null);

  useEffect(() => {
    const process = async () => {
      setLoading(true);
      try {
        const proResolved = await promiseCreator();
        setResolved(proResolved);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };
    process();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
  return [loading, resolved, error];
}
