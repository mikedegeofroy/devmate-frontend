import { Icons } from '@/components/icons';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { useEvents } from '@/hooks/useEvents';
import { useEventsStore } from '@/store/events.store';
import { AspectRatio } from '@radix-ui/react-aspect-ratio';

export const Selector = () => {
  const { events, createEvent } = useEvents();
  const { editSelectedEvent } = useEventsStore((store) => store);

  return (
    <Card>
      <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
        <CardTitle className='text-sm font-medium'>Events</CardTitle>
        <Icons.community className='h-4 w-4 text-muted-foreground' />
      </CardHeader>
      <CardContent className='space-y-3 max-h-[70vh] overflow-y-scroll'>
        {events.data?.map((event, index) => {
          return (
            <div
              key={index}
              className='border rounded-md overflow-hidden'
              onClick={() => {
                editSelectedEvent(event);
              }}
            >
              <AspectRatio
                className='bg-gradient-to-r from-indigo-500 to-blue-400 w-full overflow-hidden'
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
              <div className='p-2 flex flex-col'>
                <h1 className='font-semibold text-sm'>{event.title}</h1>
                <h1 className='text-muted-foreground text-sm'>
                  {event.description.slice(0, 25) +
                    (event.description.length > 25 ? '...' : '')}
                </h1>
              </div>
            </div>
          );
        })}
        <div
          className='border rounded-md overflow-hidden'
          onClick={() => {
            createEvent.mutate();
          }}
        >
          <Skeleton className='w-full min-w-0'>
            <AspectRatio
              className='w-full flex justify-center items-center cursor-pointer'
              ratio={16 / 9}
            >
              <span className='text-3xl font-thin'>+</span>
            </AspectRatio>
          </Skeleton>
        </div>
      </CardContent>
    </Card>
  );
};
