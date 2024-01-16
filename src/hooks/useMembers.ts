import { IPeer } from '@/models/IPeer';
import { useQuery } from 'react-query';
import { useAuth } from './useAuth';

export const useMembers = () => {
  // const communities = useAnalyticsStore((store) => store.communities);

  const { token } = useAuth();

  const fetchPeers = async () => {
    // const url = `http://localhost:5207/api/analytics/user-activity?id=${communities[0].id}`;
    const url = `http://localhost:5207/api/analytics/user-activity?id=${1259762719}`;

    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization:
          `bearer ${token}`,
      },
    });

    function sleep(ms: number) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    }

    return sleep(2000).then(async () => {
      return await res.json();
    });
  };

  return useQuery<IPeer[], Error>(['members'], fetchPeers);
};
