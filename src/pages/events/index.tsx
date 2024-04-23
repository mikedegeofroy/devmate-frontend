import { useEvents } from '@/hooks/useEvents';
import { EventComponent } from './components/eventcomponent';

export const Events = () => {
  const { events } = useEvents();

  return (
    <div className='grid gap-5 sm:grid-cols-2 lg:grid-cols-3 pt-20 px-5 h-full pb-5'>
      {events.data?.map((event, index) => {
        return <EventComponent key={index} event={event}></EventComponent>;
      })}
    </div>
  );
};
