import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

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

export const Dashboard = () => {
  return (
    <>
      <div className='pt-20 px-5'>
        <Tabs className='h-full w-full' defaultValue='analytics'>
          <TabsList>
            <TabsTrigger value='analytics'>Статистика</TabsTrigger>
            <TabsTrigger value='mailing'>Рассылка</TabsTrigger>
            <TabsTrigger value='events'>Мероприятия</TabsTrigger>
          </TabsList>
          <TabsContent
            className='pt-5 grid gap-5 grid-cols-4'
            value='analytics'
          >
            <Card>
              <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                <CardTitle className='text-sm font-medium'>
                  Total Messages
                </CardTitle>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke-width='2'
                  stroke='currentColor'
                  className='w-4 h-4 text-muted-foreground'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    d='M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
                  />
                </svg>
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
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke-width='2'
                  stroke='currentColor'
                  className='w-4 h-4 text-muted-foreground'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    d='M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z'
                  />
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    d='M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z'
                  />
                </svg>
              </CardHeader>
              <CardContent>
                <div className='text-2xl font-bold'>Mashed potatoes</div>
                <p className='text-xs text-muted-foreground'>
                  Programming, Cow shit
                </p>
              </CardContent>
            </Card>
            <Card className='flex flex-col justify-between row-span-2'>
              <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                <CardTitle className='text-sm font-medium'>
                  Most active users
                </CardTitle>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke-width='2'
                  stroke='currentColor'
                  className='w-4 h-4 text-muted-foreground'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    d='M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z'
                  />
                </svg>
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
                      <p className='text-sm font-medium leading-none'>
                        Jackson Lee
                      </p>
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
                      <p className='text-sm font-medium leading-none'>
                        William Kim
                      </p>
                      <p className='text-sm text-muted-foreground'>
                        will@email.com
                      </p>
                    </div>
                  </div>
                  <div className='flex items-center'>
                    <Avatar className='h-9 w-9'>
                      <AvatarImage src='/avatars/05.png' alt='Avatar' />
                      <AvatarFallback>SD</AvatarFallback>
                    </Avatar>
                    <div className='ml-4 space-y-1'>
                      <p className='text-sm font-medium leading-none'>
                        Sofia Davis
                      </p>
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
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke-width='2'
                  stroke='currentColor'
                  className='w-4 h-4 text-muted-foreground'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    d='M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z'
                  />
                </svg>
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
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  className='h-4 w-4 text-muted-foreground'
                >
                  <path d='M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2' />
                  <circle cx='9' cy='7' r='4' />
                  <path d='M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75' />
                </svg>
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
                <CardTitle className='text-sm font-medium'>
                  Traking URL's
                </CardTitle>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke-width='2'
                  stroke='currentColor'
                  className='w-4 h-4 text-muted-foreground'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    d='M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15m0-3-3-3m0 0-3 3m3-3V15'
                  />
                </svg>
              </CardHeader>
              <CardContent className=''>
                <div className='text-2xl font-bold'>$45,231.89</div>
                <div className='text-2xl font-bold'>$45,231.89</div>
                <div className='text-2xl font-bold'>$45,231.89</div>
                <p className='text-xs text-muted-foreground'>
                  +20.1% from last month
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
};
