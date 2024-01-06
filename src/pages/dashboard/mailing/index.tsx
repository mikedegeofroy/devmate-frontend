import { TabsContent } from '@/components/ui/tabs';
import { ITab } from '../itab';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Icons } from '@/components/icons';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

export const Mailing = (props: ITab) => {
  return (
    <TabsContent className='grid gap-5 grid-cols-5 h-full' value={props.value}>
      <Card className='col-span-3'>
        <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
          <CardTitle className='text-sm font-medium'>People</CardTitle>
          <Icons.community className='h-4 w-4 text-muted-foreground' />
        </CardHeader>
        <CardContent>
          <div className='rounded-md overflow-hidden'>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>
                    name
                  </TableHead>
                  <TableHead>
                    username
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Mike</TableCell>
                  <TableCell>mikedegeofroy</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Dasha</TableCell>
                  <TableCell>dafna</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Joao</TableCell>
                  <TableCell>jougr</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
      <Card className='col-span-2'>
        <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
          <CardTitle className='text-sm font-medium'>Message</CardTitle>
          <Icons.message className='w-4 h-4 text-muted-foreground' />
        </CardHeader>
        <CardContent>hello</CardContent>
      </Card>
    </TabsContent>
  );
};
