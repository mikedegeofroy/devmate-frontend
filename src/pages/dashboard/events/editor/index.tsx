import { Icons } from '@/components/icons';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { DatePicker } from '@/components/ui/date-picker';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useEventsStore } from '@/store/events.store';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import { useEvents } from '@/hooks/useEvents';

export const Editor = () => {
  const {
    state,
    editTitle,
    editDescription,
    editState,
    editPrice,
    editDate,
    selectedEvent,
  } = useEventsStore((state) => state);

  const { updateEvent, uploadFile } = useEvents();

  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (file) {
      uploadFile.mutate(file);
    }
  };

  return (
    <Card className='md:col-span-2'>
      <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
        <CardTitle className='text-sm font-medium'>Detail</CardTitle>
        <Icons.community className='h-4 w-4 text-muted-foreground' />
      </CardHeader>
      <CardContent className='space-y-5'>
        <div className='flex flex-row gap-5'>
          <Input
            className='w-[100px]'
            disabled={state != 'editing'}
            id='file'
            type='file'
            accept='image/png, image/gif, image/jpeg'
            onChange={handleFileChange}
          ></Input>
          <DatePicker
            disabled={state != 'editing'}
            date={
              selectedEvent.startDateTime != ''
                ? new Date(selectedEvent.startDateTime)
                : undefined
            }
            setDate={(date) => {
              editDate(date?.toISOString() ?? '');
            }}
          ></DatePicker>
        </div>
        <Input
          className={cn(
            'w-full',
            state != 'editing' ? 'text-muted-foreground opacity-50' : ''
          )}
          readOnly={state != 'editing'}
          value={selectedEvent.title}
          onChange={(e) => {
            editTitle(e.target.value);
          }}
        ></Input>
        <Textarea
          rows={10}
          className={cn(
            'resize-none',
            state != 'editing' ? 'text-muted-foreground opacity-50' : ''
          )}
          value={selectedEvent.description}
          readOnly={state != 'editing'}
          onChange={(e) => {
            editDescription(e.target.value);
          }}
        ></Textarea>
        <div className='flex flex-row gap-5 w-full'>
          <Input
            className={cn(
              'max-w-[100px] text-center',
              state != 'editing' ? 'text-muted-foreground opacity-50' : ''
            )}
            value={selectedEvent.price}
            readOnly={state != 'editing'}
            onChange={(e) => {
              editPrice(Number(e.target.value));
            }}
          ></Input>
          <Button
            variant={'outline'}
            onClick={async () => {
              if (state == 'editing') {
                handleUpload();
                updateEvent.mutate(selectedEvent);
              }
              editState(state == 'editing' ? 'overview' : 'editing');
            }}
          >
            {state == 'editing' ? 'Save' : 'Edit'}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
