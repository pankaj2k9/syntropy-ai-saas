"use client"

import { Cross2Icon } from "@radix-ui/react-icons"
import { Table } from "@tanstack/react-table"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

import { priorities, statuses } from "../data/data"
import { DataTableFacetedFilter } from "./data-table-faceted-filter"
import { DataTableViewOptions } from "./data-table-view-options"
import { Search } from "lucide-react"
import { useState } from "react"

interface DataTableToolbarProps<TData> {
  table: Table<TData>
}

export function DataTableToolbar<TData>({
  table,
}: DataTableToolbarProps<TData>) {
  const [filterableText, setFilterableText] = useState<string>('')
  const isFiltered = table.getState().columnFilters.length > 0


  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        <div className="flex flex-1 w-full">
          <Input
            placeholder="Filter tasks..."
            value={filterableText}
            onChange={(event) =>
              setFilterableText(event.target.value)
            }
            className="h-10 w-full mr-4"
          />
          <Button className="mr-4" onClick={() =>   table.getColumn("title")?.setFilterValue(filterableText)}>
             Search
          </Button>
        </div>

        {table.getColumn("status") && (
          <DataTableFacetedFilter
            column={table.getColumn("status")}
            title="Status"
            options={statuses}
          />
        )}
        {table.getColumn("priority") && (
          <DataTableFacetedFilter
            column={table.getColumn("priority")}
            title="Priority"
            options={priorities}
          />
        )}
        {isFiltered && (
          <Button
            variant="ghost"
            onClick={() => table.resetColumnFilters()}
            className="h-8 px-2 lg:px-3"
          >
            Reset
            <Cross2Icon className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>
      <DataTableViewOptions table={table} />
    </div>
  )
}
