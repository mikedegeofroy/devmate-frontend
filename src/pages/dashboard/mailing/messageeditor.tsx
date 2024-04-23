import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { IPeer } from '@/types/IPeer';

interface IMessageEditorProps {
  recipients: IPeer[];
}

export const MessageEditor = (props: IMessageEditorProps) => {
  const [message, setMessage] = useState('');
  const { token } = useAuth();

  const sendMessage = async (message: string) => {
    const url = `http://localhost:5207/api/mailing/send?message=${message}`;

    await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `bearer ${token}`,
      },
      body: JSON.stringify(props.recipients),
    });

    toast('Sent!', {
      duration: 800,
    });
  };

  return (
    <Card className='md:col-span-2 h-min'>
      <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
        <CardTitle className='text-sm font-medium'>Message</CardTitle>
        <Icons.message className='w-4 h-4 text-muted-foreground' />
      </CardHeader>
      <CardContent className='space-y-8'>
        <Textarea
          rows={15}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></Textarea>
        <Button
          onClick={() => {
            sendMessage(message);
            setMessage('');
          }}
          variant='outline'
        >
          Send
        </Button>
      </CardContent>
    </Card>
  );
};
