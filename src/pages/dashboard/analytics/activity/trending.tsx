import { Icons } from '@/components/icons';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const Trending = () => {
  return (
    <Card>
      <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
        <CardTitle className='text-sm font-medium'>Trending</CardTitle>
        <Icons.hot className='w-4 h-4 text-muted-foreground' />
      </CardHeader>
      <CardContent>
        <div className='text-2xl font-bold'>Mashed potatoes</div>
        <p className='text-xs text-muted-foreground'>Programming, Cow shit</p>
      </CardContent>
    </Card>
  );
};
