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
import { usePeers } from '@/hooks/usePeers';
import { IPeer } from '@/models/IPeer';
import { useAnalyticsStore } from '@/store/analytics.store';
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { useEffect, useState } from 'react';

export const CommunitySelector = () => {
  const [communities, setSelected] = useAnalyticsStore((state) => [
    state.communities,
    state.setCommunities,
  ]);

  const { data } = usePeers();
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
          <AvatarFallback className='w-full h-full flex justify-center items-center'></AvatarFallback>
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

  const getRowSelection = () => {
    const records: Record<string, boolean> = {};

    communities?.forEach((_, index) => {
      records[index.toString()] = true;
    });

    return records;
  };

  const table = useReactTable({
    data: data ?? [],
    columns,
    getCoreRowModel: getCoreRowModel(),
    initialState: {
      rowSelection: getRowSelection(),
    },
  });

  useEffect(() => {
    if (communities.length == 0) setOpen(true);
  }, [communities]);

  return (
    <Dialog
      open={open}
      onOpenChange={(e) => {
        setSelected(
          table.getSelectedRowModel().rows.flatMap((x) => x.original)
        );
        setOpen(e);
      }}
    >
      <DialogTrigger>
        <div className='h-7 relative'>
          {table.getSelectedRowModel().rows.map((x, index) => (
            <Avatar
              className='shadow-lg absolute rounded-full overflow-hidden h-7 w-7'
              style={{
                left: `${index * 10}px`,
              }}
              key={index}
            >
              <AvatarImage
                src={`http://localhost:5207${x.original.photo}`}
                alt='Avatar'
              />
              <AvatarFallback>?</AvatarFallback>
            </Avatar>
          ))}
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
