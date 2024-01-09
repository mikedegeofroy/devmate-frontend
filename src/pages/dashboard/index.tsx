import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Analytics } from './analytics';
import { Mailing } from './mailing';

export const Dashboard = () => {
  return (
    <div className='pt-20 px-5 h-full'>
      <Tabs className='h-full w-full' defaultValue='analytics'>
        <TabsList className='mb-5'>
          <TabsTrigger value='analytics'>Analytics</TabsTrigger>
          <TabsTrigger value='mailing'>Mailer</TabsTrigger>
        </TabsList>
        <Analytics value='analytics' />
        <Mailing value='mailing' />
      </Tabs>
    </div>
  );
};
