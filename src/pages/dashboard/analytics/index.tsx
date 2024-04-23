import { TabsContent } from '@/components/ui/tabs';
import { ITab } from '../itab';
import { ActivityChart } from './activity/activitychart';
import { UrlMonitor } from './urls/urlmonitor';
import { InteractionCount } from './activity/interactioncount';
import { Trending } from './activity/trending';
import { ChatGpt } from './gpt/chatgpt';
import { ActiveMembers } from './activity/activememebers';
import { useEffect, useState } from 'react';
import { IAnalyticsData } from '@/types/IAnalyticsData';
import { useAnalyticsStore } from '@/store/analytics.store';

export const Analytics = (props: ITab) => {
  const [communities] = useAnalyticsStore((store) => [store.communities]);

  const [data, setData] = useState<IAnalyticsData>({
    dataPoints: [],
    total: 0,
  });

  useEffect(() => {
    const fetchData = async (id: number) => {
      const url = `http://localhost:5207/api/analytics/peer-activity?id=${id}`;

      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization:
            'bearer eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTUxMiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiKzc5MjEzODc3NjYwIiwiZXhwIjoxNzA2MzgxMzY4fQ.J-5FR-bzje7EQUis_Q2uOakL1j-dkq0ZQy3Zp0qEBt9GorVWEKtbd0FfHlBaz-kORbc94WPIPkrt2UMHCkYbPw',
        },
      })
        .then((res) => res.json())
        .then((json) => {
          const updatedDataPoints = json.dataPoints.map(
            (dataPoint: {
              value: number;
              dateTime: string | number | Date;
            }) => ({
              value: dataPoint.value,
              datetime: new Date(dataPoint.dateTime),
            })
          );

          setData({
            total: json.total,
            dataPoints: updatedDataPoints,
          });
        })
        .catch((err) => console.error('error:' + err));
    };

    communities.forEach(async (com) => {
      fetchData(com.id);
    });
  });

  return (
    <TabsContent className='grid gap-5 md:grid-cols-4' value={props.value}>
      <InteractionCount count={data.total} compared={21.3} />
      <Trending />
      <ActiveMembers />
      <ChatGpt />
      <ActivityChart data={data.dataPoints} />
      <UrlMonitor />
    </TabsContent>
  );
};
