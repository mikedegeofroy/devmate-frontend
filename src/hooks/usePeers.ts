import { IPeer } from '@/models/IPeer';
import { useQuery } from 'react-query';
import { useAuth } from './useAuth';

export const usePeers = () => {
  const { token } = useAuth();

  const fetchPeers = async () => {
    const url = `http://localhost:5207/api/analytics/peers`;

    const res = await fetch(url, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    });

    return await res.json();
  };

  return useQuery<IPeer[], Error>('peers', fetchPeers);
};
