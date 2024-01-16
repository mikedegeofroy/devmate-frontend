import { Icons } from '@/components/icons';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useEffect, useState } from 'react';
import { IPeer } from '@/models/IPeer';

export const ActiveMembers = () => {
  // const [communities] = useAnalyticsStore((store) => [store.communities]);
  const [data, setData] = useState<IPeer[]>([]);

  useEffect(() => {
    const communities: IPeer[] = [];

    const fetchData = async (id: number) => {
      const url = `http://localhost:5207/api/analytics/user-activity?id=${id}`;

      try {
        const res = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization:
              'bearer eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTUxMiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiKzc5MjEzODc3NjYwIiwiZXhwIjoxNzA2MzgxMzY4fQ.J-5FR-bzje7EQUis_Q2uOakL1j-dkq0ZQy3Zp0qEBt9GorVWEKtbd0FfHlBaz-kORbc94WPIPkrt2UMHCkYbPw',
          },
        });

        setData(await res.json());
      } catch (err) {
        console.error('error:' + err);
      }
    };

    communities.forEach((comm) => {
      fetchData(comm.id);
    });
  });

  return (
    <Card className='flex flex-col justify-between row-span-2'>
      <CardHeader className='flex flex-row items-center justify-between space-y-0'>
        <CardTitle className='text-sm font-medium'>Most active users</CardTitle>
        <Icons.question className='w-4 h-4 text-muted-foreground' />
      </CardHeader>
      <CardContent>
        <div className='space-y-6'>
          {data.slice(0, 5).map((value, index) => {
            return (
              <div className='flex items-center' key={index}>
                <Avatar className='h-9 w-9'>
                  <AvatarImage
                    src={`http://localhost:5207${value.photo}`}
                    alt='Avatar'
                  />
                  <AvatarFallback>?</AvatarFallback>
                </Avatar>
                <div className='ml-4 space-y-1'>
                  <p className='text-sm font-medium leading-none'>
                    {value.displayName}
                  </p>
                  <p className='text-sm text-muted-foreground'>
                    {value.username}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};
