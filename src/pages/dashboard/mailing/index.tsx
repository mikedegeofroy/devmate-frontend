import { TabsContent } from '@/components/ui/tabs';
import { ITab } from '../itab';
import {
  ColumnDef,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { useEffect, useState } from 'react';
import { IUser } from '@/models/IUser';
import { Checkbox } from '@/components/ui/checkbox';
import { MessageEditor } from './MessageEditor';
import { DataTable } from './DataTable';

export const Mailing = (props: ITab) => {
  const [data, setData] = useState<IUser[]>([]);

  useEffect(() => {
    const url = 'http://localhost:5207/api/useractivitydata';

    const fetchData = () => {
      fetch(url)
        .then((res) => res.json())
        .then((json) => {
          setData(json);
        })
        .catch((err) => console.error('error:' + err));
    };

    fetchData();
  }, []);

  const columns: ColumnDef<IUser>[] = [
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
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <TabsContent className='grid gap-5 md:grid-cols-5 h-full' value={props.value}>
      <DataTable table={table} />
      <MessageEditor
        recipients={table.getSelectedRowModel().rows.flatMap((x) => x.original)}
      />
    </TabsContent>
  );
};
