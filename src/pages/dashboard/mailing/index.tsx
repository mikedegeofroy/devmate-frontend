import { TabsContent } from '@/components/ui/tabs';
import { ITab } from '../itab';
import {
  ColumnDef,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { useEffect, useState } from 'react';
import { IPeer } from '@/models/IPeer';
import { Checkbox } from '@/components/ui/checkbox';
import { MessageEditor } from './messageeditor';
import { DataTable } from './datatable';
import { useAnalyticsStore } from '@/store/analytics.store';

export const Mailing = (props: ITab) => {
  const communities = useAnalyticsStore((store) => store.communities);

  const [data, setData] = useState<IPeer[]>([]);

  useEffect(() => {
    const url = `http://localhost:5207/api/UserActivityData?id=${communities[0].id}`;

    const fetchData = () => {
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((res) => res.json())
        .then((json) => {
          setData(json);
        })
        .catch((err) => console.error('error:' + err));
    };

    if (communities.length > 0) fetchData();
  }, [communities]);

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
    data,
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
