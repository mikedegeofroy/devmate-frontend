import { Icons } from '@/components/icons';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface IInteractionCountProps {
  count: number;
  compared: number;
}

export const InteractionCount = (props: IInteractionCountProps) => {
  return (
    <Card>
      <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
        <CardTitle className='text-sm font-medium'>Total Messages</CardTitle>
        <Icons.clock className='w-4 h-4 text-muted-foreground' />
      </CardHeader>
      <CardContent>
        <div className='text-2xl font-bold'>{props.count}</div>
        <p className='text-xs text-muted-foreground'>
          {props.compared > 0 ? '+' : ''}
          {props.compared}% from last month
        </p>
      </CardContent>
    </Card>
  );
};
