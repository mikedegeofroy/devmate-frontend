import { Button } from '@/components/ui/button';
import { useEvents } from '@/hooks/useEvents';
import { AspectRatio } from '@radix-ui/react-aspect-ratio';
import { Link, useParams } from 'react-router-dom';

export const Event = () => {
  const { id } = useParams();
  const { events } = useEvents();

  const event = events.data?.find((x) => x.id.toFixed() == id);

  return (
    <div className='pt-24 p-5 space-y-5 max-w-2xl mx-auto'>
      <div className='overflow-hidden rounded-md'>
        <AspectRatio
          className='bg-gradient-to-r from-indigo-500 to-blue-400'
          ratio={16 / 9}
        >
          {event?.cover == '' ? (
            ''
          ) : (
            <img
              className='object-cover object-center h-full w-full'
              src={`http://localhost:5207${event?.cover}`}
              alt=''
            />
          )}
        </AspectRatio>
      </div>
      <div className='flex flex-row justify-between'>
        <Link to={'/events/'}>
          <Button variant={'outline'}>Back</Button>
        </Link>
        <Link to={'/'}>
          <Button variant={'outline'}>Action</Button>
        </Link>
      </div>
      <div className='text-3xl font-semibold'>{event?.title}</div>
    </div>
  );
};
