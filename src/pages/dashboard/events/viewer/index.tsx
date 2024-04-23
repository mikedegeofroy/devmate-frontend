import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { useEventsStore } from '@/store/events.store';
import { AspectRatio } from '@radix-ui/react-aspect-ratio';

export const Viewer = () => {
  const { selectedEvent } = useEventsStore((store) => store);

  return (
    <Card className='md:col-span-2 md:block hidden'>
      <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
        <CardTitle className='text-sm font-medium'>Event Card</CardTitle>
        <Icons.community className='h-4 w-4 text-muted-foreground' />
      </CardHeader>
      <CardContent className='space-y-5'>
        <div className='overflow-hidden rounded-md'>
          <AspectRatio
            className='bg-gradient-to-r from-indigo-500 to-blue-400'
            ratio={16 / 9}
          >
            {selectedEvent.cover == '' ? (
              ''
            ) : (
              <img
                className='object-cover object-center h-full w-full'
                src={`http://localhost:5207${selectedEvent.cover}`}
                alt=''
              />
            )}
          </AspectRatio>
        </div>
        <div className='flex flex-row justify-between'>
          <Button variant={'outline'}>Back</Button>
          <Button variant={'outline'}>{selectedEvent.price}₽</Button>
        </div>
        <div className='text-3xl font-semibold'>{selectedEvent.title}</div>
        <div className='text-lg text-muted-foreground'>
          {selectedEvent.description}
        </div>
      </CardContent>
    </Card>
  );
};
