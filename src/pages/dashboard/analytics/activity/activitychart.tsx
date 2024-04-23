import { Icons } from '@/components/icons';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { IDataPoint } from '@/types/IDataPoint';
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import { Skeleton } from '@/components/ui/skeleton';

interface IActivityChartProps {
  data: IDataPoint[];
}

export const ActivityChart = (props: IActivityChartProps) => {
  return (
    <Card className='md:col-span-2 row-span-2'>
      <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
        <CardTitle className='text-sm font-medium'>Activity</CardTitle>
        <Icons.community className='h-4 w-4 text-muted-foreground' />
      </CardHeader>
      <CardContent>
        {props.data.length > 0 ? (
          <ResponsiveContainer width='100%' height={390}>
            <BarChart data={props.data}>
              <XAxis
                dataKey='datetime'
                tickFormatter={(value: Date) => {
                  return value.getDate() + '.' + (value.getMonth() + 1);
                }}
                minTickGap={5}
                stroke='#888888'
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <YAxis
                stroke='#888888'
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <Bar dataKey='value' fill='#0FE872' radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        ) : (
          <Skeleton className='h-96 pt-5'></Skeleton>
        )}
      </CardContent>
    </Card>
  );
};
