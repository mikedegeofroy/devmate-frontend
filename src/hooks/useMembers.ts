import { IPeer } from '@/types/IPeer';
import { useQuery } from 'react-query';
import { useAuth } from './useAuth';
import { useAnalyticsStore } from '@/store/analytics.store';

export const useMembers = () => {
  const communities = useAnalyticsStore((store) => store.communities);
  const { token } = useAuth();

  const fetchPeers = async () => {
    const url = `http://localhost:5207/api/analytics/user-activity?id=${communities[0].id}`;

    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `bearer ${token}`,
      },
    });

    return await res.json();
  };

  return useQuery<IPeer[], Error>(['members', communities], fetchPeers, {
    enabled: communities.length > 0,
  });
};
