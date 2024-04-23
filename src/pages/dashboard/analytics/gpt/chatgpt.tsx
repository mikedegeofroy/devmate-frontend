import { Icons } from '@/components/icons';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';

export const ChatGpt = () => {
  return (
    <Card className='flex flex-col justify-between row-span-2'>
      <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
        <CardTitle className='text-sm font-medium'>ask gpt</CardTitle>
        <Icons.question className='w-4 h-4 text-muted-foreground' />
      </CardHeader>
      <Card className='m-6 p-10 h-full'>
        <CardContent></CardContent>
      </Card>
      <CardContent>
        <Textarea
          placeholder='Type your message here.'
          className='resize-none'
        />
      </CardContent>
    </Card>
  );
};
