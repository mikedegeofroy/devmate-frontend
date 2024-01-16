import { useState } from 'react';

const data: boolean[] = [];

export const useLoading = () => {
  const [loadingState, setLoadingState] = useState(false);
  data.push(loadingState);

  const setLoading = (state: boolean) => {
    setLoadingState(state);
    console.log(data);
  };

  const notLoading = () => {
    console.log(data);
    return data.every((x) => x === false);
  };

  return { loadingState, setLoading, notLoading };
};
