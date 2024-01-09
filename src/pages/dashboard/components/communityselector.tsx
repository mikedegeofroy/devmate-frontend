import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  Table,
} from '@/components/ui/table';
import { IPeer } from '@/models/IPeer';
import { useAnalyticsStore } from '@/store/analytics.store';
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { useState, useEffect } from 'react';

export const CommunitySelector = () => {
  const [communities, setSelected] = useAnalyticsStore((state) => [state.communities, state.setCommunities]);
  
  const [data, setData] = useState<IPeer[]>([]);
  const [open, setOpen] = useState(communities.length == 0);

  const columns: ColumnDef<IPeer>[] = [
    {
      id: 'avatar',
      header: 'Community',
      cell: ({ row }) => (
        <Avatar className='shadow-lg table rounded-full overflow-hidden h-7 w-7 left-0 z-0'>
          <AvatarImage
            src={`http://localhost:5207/${row.original.photo}`}
            alt='Avatar'
          />
          <AvatarFallback className='w-full h-full flex justify-center items-center'>
            ?
          </AvatarFallback>
        </Avatar>
      ),
    },
    {
      accessorKey: 'username',
      header: 'Name',
    },
    {
      id: 'select',
      header: ({ table }) => (
        <Checkbox
          className=''
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
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    initialState: {
      rowSelection: {
        '0': true
      }
    }
  });

  useEffect(() => {
    const url = 'http://localhost:5207/api/peer';

    const fetchData = () => {
      fetch(url)
        .then((res) => res.json())
        .then((json) => {
          setData(json);
          setSelected([json[0]]);
        })
        .catch((err) => console.error('error:' + err));
    };

    fetchData();
  }, [setSelected, table]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        <div className='h-7 relative'>
          {table.getSelectedRowModel().rows.map((x, index) => {
            const community = x.original;

            return (
              <Avatar
                className='shadow-lg absolute rounded-full overflow-hidden h-7 w-7'
                style={{
                  left: `${index * 10}px`,
                }}
                key={index}
              >
                <AvatarImage
                  src={`http://localhost:5207${community.photo}`}
                  alt='Avatar'
                />
                <AvatarFallback>?</AvatarFallback>
              </Avatar>
            );
          })}
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Selected Communities</DialogTitle>
          <DialogDescription>
            Select the communities that you want to analyze.
          </DialogDescription>
          <div className='rounded-md overflow-hidden'>
            <Table className='w-full'>
              <TableHeader className='table table-fixed w-full'>
                {table.getHeaderGroups().map((headerGroup) => (
                  <TableRow key={headerGroup.id}>
                    {headerGroup.headers.map((header) => {
                      return (
                        <TableHead key={header.id}>
                          {header.isPlaceholder
                            ? null
                            : flexRender(
                                header.column.columnDef.header,
                                header.getContext()
                              )}
                        </TableHead>
                      );
                    })}
                  </TableRow>
                ))}
              </TableHeader>
              <TableBody className='block h-[60vh] overflow-scroll'>
                {table.getRowModel().rows?.length ? (
                  table.getRowModel().rows.map((row) => (
                    <TableRow
                      className='table table-fixed w-full'
                      key={row.id}
                      data-state={row.getIsSelected() && 'selected'}
                    >
                      {row.getVisibleCells().map((cell) => (
                        <TableCell key={cell.id}>
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))
                ) : (
                  <TableRow className='table table-fixed w-full'>
                    <TableCell
                      colSpan={table.getAllColumns().length}
                      className='h-24 text-center'
                    >
                      No results.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
