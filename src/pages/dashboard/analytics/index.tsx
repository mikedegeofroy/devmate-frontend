import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TabsContent } from '@/components/ui/tabs';
import { ITab } from '../itab';
import { Icons } from '@/components/icons';

const data = [
  {
    name: '01.01',
    total: Math.floor(Math.random() * 3000) + 1000,
  },
  {
    name: '02.01',
    total: Math.floor(Math.random() * 3000) + 1000,
  },
  {
    name: '03.01',
    total: Math.floor(Math.random() * 3000) + 1000,
  },
  {
    name: '04.01',
    total: Math.floor(Math.random() * 3000) + 1000,
  },
  {
    name: '05.01',
    total: Math.floor(Math.random() * 3000) + 1000,
  },
  {
    name: '06.01',
    total: Math.floor(Math.random() * 3000) + 1000,
  },
  {
    name: '07.01',
    total: Math.floor(Math.random() * 3000) + 1000,
  },
  {
    name: '08.01',
    total: Math.floor(Math.random() * 3000) + 1000,
  },
  {
    name: '09.01',
    total: Math.floor(Math.random() * 3000) + 1000,
  },
  {
    name: '10.01',
    total: Math.floor(Math.random() * 3000) + 1000,
  },
  {
    name: '11.01',
    total: Math.floor(Math.random() * 3000) + 1000,
  },
  {
    name: '12.01',
    total: Math.floor(Math.random() * 3000) + 1000,
  },
  {
    name: '13.01',
    total: Math.floor(Math.random() * 3000) + 1000,
  },
  {
    name: '14.01',
    total: Math.floor(Math.random() * 3000) + 1000,
  },
];

export const Analytics = (props: ITab) => {
  return (
    <TabsContent className='grid gap-5 grid-cols-4' value={props.value}>
      <Card>
        <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
          <CardTitle className='text-sm font-medium'>Total Messages</CardTitle>
          <Icons.clock className='w-4 h-4 text-muted-foreground'/>
        </CardHeader>
        <CardContent>
          <div className='text-2xl font-bold'>3,012</div>
          <p className='text-xs text-muted-foreground'>
            +20.1% from last month
          </p>
        </CardContent>
      </Card>
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
      <Card className='flex flex-col justify-between row-span-2'>
        <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
          <CardTitle className='text-sm font-medium'>
            Most active users
          </CardTitle>
          <Icons.question className='w-4 h-4 text-muted-foreground' />
        </CardHeader>
        <CardContent>
          <div className='space-y-8'>
            <div className='flex items-center'>
              <Avatar className='h-9 w-9'>
                <AvatarImage src='/avatars/01.png' alt='Avatar' />
                <AvatarFallback>OM</AvatarFallback>
              </Avatar>
              <div className='ml-4 space-y-1'>
                <p className='text-sm font-medium leading-none'>
                  Olivia Martin
                </p>
                <p className='text-sm text-muted-foreground'>
                  olivia.martin@email.com
                </p>
              </div>
            </div>
            <div className='flex items-center'>
              <Avatar className='flex h-9 w-9 items-center justify-center space-y-0 border'>
                <AvatarImage src='/avatars/02.png' alt='Avatar' />
                <AvatarFallback>JL</AvatarFallback>
              </Avatar>
              <div className='ml-4 space-y-1'>
                <p className='text-sm font-medium leading-none'>Jackson Lee</p>
                <p className='text-sm text-muted-foreground'>
                  jackson.lee@email.com
                </p>
              </div>
            </div>
            <div className='flex items-center'>
              <Avatar className='h-9 w-9'>
                <AvatarImage src='/avatars/03.png' alt='Avatar' />
                <AvatarFallback>IN</AvatarFallback>
              </Avatar>
              <div className='ml-4 space-y-1'>
                <p className='text-sm font-medium leading-none'>
                  Isabella Nguyen
                </p>
                <p className='text-sm text-muted-foreground'>
                  isabella.nguyen@email.com
                </p>
              </div>
            </div>
            <div className='flex items-center'>
              <Avatar className='h-9 w-9'>
                <AvatarImage src='/avatars/04.png' alt='Avatar' />
                <AvatarFallback>WK</AvatarFallback>
              </Avatar>
              <div className='ml-4 space-y-1'>
                <p className='text-sm font-medium leading-none'>William Kim</p>
                <p className='text-sm text-muted-foreground'>will@email.com</p>
              </div>
            </div>
            <div className='flex items-center'>
              <Avatar className='h-9 w-9'>
                <AvatarImage src='/avatars/05.png' alt='Avatar' />
                <AvatarFallback>SD</AvatarFallback>
              </Avatar>
              <div className='ml-4 space-y-1'>
                <p className='text-sm font-medium leading-none'>Sofia Davis</p>
                <p className='text-sm text-muted-foreground'>
                  sofia.davis@email.com
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      <Card className='flex flex-col justify-between row-span-2'>
        <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
          <CardTitle className='text-sm font-medium'>ask gpt</CardTitle>
          <Icons.question className='w-4 h-4 text-muted-foreground' />
        </CardHeader>
        <Card className='m-6 p-10 h-full'>
          <CardContent></CardContent>
        </Card>
        <CardContent>
          <Textarea placeholder='Type your message here.' />
        </CardContent>
      </Card>
      <Card className='col-span-2 row-span-2'>
        <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
          <CardTitle className='text-sm font-medium'>Activity</CardTitle>
          <Icons.community className='h-4 w-4 text-muted-foreground'/>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width='100%' height={390}>
            <BarChart data={data}>
              <XAxis
                dataKey='name'
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
              <Bar dataKey='total' fill='#0FE872' radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
      <Card className='col-span-2'>
        <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
          <CardTitle className='text-sm font-medium'>Traking URL's</CardTitle>
          <Icons.share className='w-4 h-4 text-muted-foreground'/>
        </CardHeader>
        <CardContent className=''>
          <div className='text-2xl font-bold'>something</div>
          <div className='text-2xl font-bold'>something</div>
          <div className='text-2xl font-bold'>something</div>
          <div className='text-2xl font-bold'>something</div>
          <p className='text-xs text-muted-foreground'>
            +20.1% from last month
          </p>
        </CardContent>
      </Card>
    </TabsContent>
  );
};
