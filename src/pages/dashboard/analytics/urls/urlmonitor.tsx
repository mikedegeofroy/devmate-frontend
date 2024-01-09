import { Icons } from '@/components/icons';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const UrlMonitor = () => {
  return (
    <Card className='md:col-span-2'>
      <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
        <CardTitle className='text-sm font-medium'>Traking URL's</CardTitle>
        <Icons.share className='w-4 h-4 text-muted-foreground' />
      </CardHeader>
      <CardContent className=''>
        <div className='text-2xl font-bold'>something</div>
        <div className='text-2xl font-bold'>something</div>
        <div className='text-2xl font-bold'>something</div>
        <div className='text-2xl font-bold'>something</div>
        <p className='text-xs text-muted-foreground'>+20.1% from last month</p>
      </CardContent>
    </Card>
  );
};
