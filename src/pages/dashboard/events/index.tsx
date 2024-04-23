import { TabsContent } from '@/components/ui/tabs';
import { ITab } from '../itab';
import { Selector } from './selector';
import { Viewer } from './viewer';
import { Editor } from './editor';

export const Events = (props: ITab) => {
  return (
    <TabsContent
      className='grid gap-5 md:grid-cols-5 h-full'
      value={props.value}
    >
      <Selector />
      <Editor />
      <Viewer />
    </TabsContent>
  );
};
