import { Icons } from '@/components/icons';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { IEvent } from '@/types/IEvent';
import { Link } from 'react-router-dom';

interface IEventComponentProps {
  event: IEvent;
}

export const EventComponent = ({ event }: IEventComponentProps) => {
  return (
    <Card className='overflow-hidden'>
      <AspectRatio
        className='bg-gradient-to-r from-indigo-500 to-blue-400 w-full'
        ratio={16 / 9}
      >
        {event.cover == '' ? (
          ''
        ) : (
          <img
            className='object-cover object-center h-full w-full'
            src={`http://localhost:5207${event.cover}`}
            alt=''
          />
        )}
      </AspectRatio>
      <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-1'>
        <CardTitle className='text-md font-medium'>{event.title}</CardTitle>
        <Icons.community className='h-4 w-4 text-muted-foreground' />
      </CardHeader>
      <CardContent className='space-y-2'>
        <p className='text-muted-foreground text-sm'>{event.description}</p>
        <div className='flex justify-between items-center'>
          <div className='h-full'>
            <h1 className='text-xl font-bold text-muted-foreground'>
              {event.occupied} / {event.total}
            </h1>
          </div>
          <Link to={event.id.toString()}>
            <Button variant={'outline'}>Book</Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};
