import { TabsContent } from '@/components/ui/tabs';
import { ITab } from '../itab';
import {
  ColumnDef,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { IPeer } from '@/types/IPeer';
import { Checkbox } from '@/components/ui/checkbox';
import { MessageEditor } from './messageeditor';
import { DataTable } from './datatable';

export const Mailing = (props: ITab) => {
  const data: IPeer[] = [];

  const columns: ColumnDef<IPeer>[] = [
    {
      id: 'select',
      header: ({ table }) => (
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && 'indeterminate')
          }
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label='Select all'
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label='Select row'
        />
      ),
    },
    {
      accessorKey: 'username',
      header: 'username',
    },
    {
      accessorKey: 'id',
      header: 'id',
    },
  ];

  const table = useReactTable({
    data: data ?? [],
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <TabsContent
      className='grid gap-5 md:grid-cols-5 h-full'
      value={props.value}
    >
      <DataTable table={table} />
      <MessageEditor
        recipients={table.getSelectedRowModel().rows.flatMap((x) => x.original)}
      />
    </TabsContent>
  );
};
