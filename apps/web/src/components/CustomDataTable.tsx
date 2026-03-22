"use client"

import * as React from "react"
import {
  type ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  useReactTable,
} from "@tanstack/react-table"

import { Input } from "@workspace/ui/components/input"
import { Button } from "@workspace/ui/components/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@workspace/ui/components/table"
import { Checkbox } from "@workspace/ui/components/checkbox"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuLabel,
} from "@workspace/ui/components/dropdown-menu"
import { MoreHorizontal, ChevronDown } from "lucide-react"


export const columns: ColumnDef<any>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllRowsSelected()}
        onCheckedChange={(value) => table.toggleAllRowsSelected(!!value)}
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
      />
    ),
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "amount",
    header: "Amount",
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"))
      return (
        <div className="flex items-center justify-end gap-2">
          <span>${amount.toFixed(2)}</span>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                <MoreHorizontal className="h-3 w-3" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                Option 1
              </DropdownMenuItem>
              <DropdownMenuItem>
                Option 2
              </DropdownMenuItem>
              <DropdownMenuItem>
                Option 3
              </DropdownMenuItem>
              <DropdownMenuItem>
                Option 4
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuLabel>More</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>
                  Option 5
                </DropdownMenuSubTrigger>
                <DropdownMenuSubContent>
                  <DropdownMenuItem>Suboption 5.1</DropdownMenuItem>
                  <DropdownMenuItem>Suboption 5.2</DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuSub>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      )
    },
  },
]


const data: any = [
  { id: "1", status: "success", email: "ken99@example.com", amount: 316 },
  { id: "2", status: "failed", email: "carmella@example.com", amount: 721 },
  { id: "3", status: "success", email: "silas22@example.com", amount: 874 },
  { id: "4", status: "processing", email: "monserrat44@example.com", amount: 837 },
  { id: "5", status: "success", email: "abe45@example.com", amount: 242 },
  { id: "6", status: "failed", email: "john@example.com", amount: 450 },
  { id: "7", status: "success", email: "jane@example.com", amount: 800 },
  { id: "8", status: "processing", email: "alex@example.com", amount: 550 },
  { id: "9", status: "success", email: "bob@example.com", amount: 920 },
  { id: "10", status: "failed", email: "carol@example.com", amount: 380 },
  { id: "11", status: "success", email: "david@example.com", amount: 670 },
  { id: "12", status: "processing", email: "emma@example.com", amount: 745 },
  { id: "13", status: "success", email: "frank@example.com", amount: 510 },
  { id: "14", status: "failed", email: "grace@example.com", amount: 890 },
  { id: "15", status: "success", email: "henry@example.com", amount: 620 },
  { id: "16", status: "processing", email: "iris@example.com", amount: 780 },
  { id: "17", status: "failed", email: "jack@example.com", amount: 430 },
  { id: "18", status: "success", email: "kate@example.com", amount: 950 },
  { id: "19", status: "processing", email: "liam@example.com", amount: 560 },
  { id: "20", status: "success", email: "mia@example.com", amount: 480 },
  { id: "21", status: "failed", email: "noah@example.com", amount: 810 },
  { id: "22", status: "success", email: "olivia@example.com", amount: 690 },
  { id: "23", status: "processing", email: "peter@example.com", amount: 520 },
  { id: "24", status: "success", email: "quinn@example.com", amount: 870 },
  { id: "25", status: "failed", email: "rachel@example.com", amount: 640 },
  { id: "26", status: "success", email: "steve@example.com", amount: 760 },
  { id: "27", status: "processing", email: "tina@example.com", amount: 410 },
  { id: "28", status: "success", email: "umar@example.com", amount: 920 },
  { id: "29", status: "failed", email: "violet@example.com", amount: 540 },
  { id: "30", status: "success", email: "william@example.com", amount: 700 },
]


export default function CustomDataTable() {
const [sorting, setSorting] = React.useState<any>([])
const [columnFilters, setColumnFilters] = React.useState<any>([])
const [rowSelection, setRowSelection] = React.useState<any>({})
const [columnVisibility, setColumnVisibility] = React.useState<any>({
  status: true,
  email: true,
  amount: true,
})
const [pagination, setPagination] = React.useState<any>({
  pageIndex: 0,
  pageSize: 7,
})

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      columnFilters,
      rowSelection,
      columnVisibility,
      pagination,
    },
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onRowSelectionChange: setRowSelection,
    onColumnVisibilityChange: setColumnVisibility,
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  })

  return (
    <div className="w-full space-y-4">
      <div className="flex items-center justify-between">
        <Input
          placeholder="Filter emails..."
          value={(table.getColumn("email")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("email")?.setFilterValue(event.target.value)
          }
          className="w-50"
        />

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="flex items-center gap-2">
              Columns
              <ChevronDown className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" side="top">
            <DropdownMenuLabel>Show columns</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={(event) => {
                event.preventDefault()
                event.stopPropagation()
                setColumnVisibility((prev: any) => ({
                  ...prev,
                  status: !prev.status,
                }))
              }}
              className="justify-between"
            >
              <span>Status</span>
              <span>{columnVisibility.status ? "✓" : ""}</span>
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={(event) => {
                event.preventDefault()
                event.stopPropagation()
                setColumnVisibility((prev: any) => ({
                  ...prev,
                  email: !prev.email,
                }))
              }}
              className="justify-between"
            >
              <span>Email</span>
              <span>{columnVisibility.email ? "✓" : ""}</span>
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={(event) => {
                event.preventDefault()
                event.stopPropagation()
                setColumnVisibility((prev: any) => ({
                  ...prev,
                  amount: !prev.amount,
                }))
              }}
              className="justify-between"
            >
              <span>Amount</span>
              <span>{columnVisibility.amount ? "✓" : ""}</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>

          <TableBody>
            {table.getRowModel().rows.map((row) => (
              <TableRow key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(
                      cell.column.columnDef.cell,
                      cell.getContext()
                    )}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="flex items-center justify-between">
        <div className="text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>

        <div className="flex items-center justify-between gap-4">

          <div className="space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              Previous
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

