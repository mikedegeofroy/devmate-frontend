import { TabsContent } from '@/components/ui/tabs';
import { ITab } from '../itab';
import { ActivityChart } from './activity/activitychart';
import { UrlMonitor } from './urls/urlmonitor';
import { InteractionCount } from './activity/interactioncount';
import { Trending } from './activity/trending';
import { ChatGpt } from './gpt/chatgpt';
import { ActiveMembers } from './activity/activememebers';
import { useEffect, useState } from 'react';
import { IAnalyticsData } from '@/models/IAnalyticsData';

export const Analytics = (props: ITab) => {
  const [data, setData] = useState<IAnalyticsData>({
    dataPoints: [],
    total: 0,
  });

  useEffect(() => {
    const url = 'http://localhost:5207/api/ActivityData?id=1600634396';

    const fetchData = () => {
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
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

    fetchData();
  }, []);

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
