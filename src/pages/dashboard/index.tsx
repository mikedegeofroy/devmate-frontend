import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Icons } from '@/components/icons';
import { CommunitySelector } from './components/communityselector';
import { Events } from './events';

export const Dashboard = () => {
  const loading = true;

  return (
    <div className='pt-24 px-5 h-full'>
      <Tabs className='h-full w-full' defaultValue='events'>
        <div className='h-9 flex items-center mb-5 mt-1 gap-5'>
          <TabsList>
            <TabsTrigger value='events'>Events</TabsTrigger>
          </TabsList>
          <CommunitySelector />
          <Icons.loading
            className={`w-4 h-4 animate-spin ml-auto mr-2 ${
              loading ? '' : 'hidden'
            }`}
          />
        </div>
        <Events value='events' />
      </Tabs>
    </div>
  );
};
