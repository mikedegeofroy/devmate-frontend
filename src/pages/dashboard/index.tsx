import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Analytics } from './analytics';
import { Mailing } from './mailing';
import { Icons } from '@/components/icons';
import { CommunitySelector } from './components/communityselector';
import { Events } from './events';

export const Dashboard = () => {
  const loading = true;

  return (
    <div className='pt-20 px-5 h-full'>
      <Tabs className='h-full w-full' defaultValue='analytics'>
        <div className='h-9 flex items-center mb-5 mt-1 gap-5'>
          <TabsList>
            <TabsTrigger value='analytics'>Analytics</TabsTrigger>
            <TabsTrigger value='mailing'>Mailer</TabsTrigger>
            <TabsTrigger value='events'>Events</TabsTrigger>
          </TabsList>
          <CommunitySelector />
          <Icons.loading
            className={`w-4 h-4 animate-spin ml-auto mr-2 ${
              loading ? '' : 'hidden'
            }`}
          />
        </div>
        <Analytics value='analytics' />
        <Mailing value='mailing' />
        <Events value='events' />
      </Tabs>
    </div>
  );
};
