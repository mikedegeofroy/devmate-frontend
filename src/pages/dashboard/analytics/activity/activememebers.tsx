import { Icons } from '@/components/icons';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { IUser } from '@/models/IUser';
import { useEffect, useState } from 'react';

export const ActiveMembers = () => {
  const [data, setData] = useState<IUser[]>([]);

  useEffect(() => {
    const url = 'http://localhost:5207/api/useractivitydata';

    const fetchData = () => {
      fetch(url)
        .then((res) => res.json())
        .then((json) => {
          setData(json);
        })
        .catch((err) => console.error('error:' + err));
    };

    fetchData();
  }, []);

  return (
    <Card className='flex flex-col justify-between row-span-2'>
      <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
        <CardTitle className='text-sm font-medium'>Most active users</CardTitle>
        <Icons.question className='w-4 h-4 text-muted-foreground' />
      </CardHeader>
      <CardContent>
        <div className='space-y-8'>
          {data.slice(0,5).map((value, index) => {
            return (
              <div className='flex items-center' key={index}>
                <Avatar className='h-9 w-9'>
                  <AvatarImage
                    src={
                      'http://localhost:5207/profile_pictures/' +
                      value.id +
                      '.png'
                    }
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
