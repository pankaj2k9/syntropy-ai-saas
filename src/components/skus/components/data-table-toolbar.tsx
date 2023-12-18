"use client"

import { Cross2Icon } from "@radix-ui/react-icons"
import { Table } from "@tanstack/react-table"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

import { DataTableViewOptions } from "./data-table-view-options"
import { useContext, useEffect, useState } from "react"
import { Context } from "@/provider/ContextProvider"

interface DataTableToolbarProps<TData> {
  table: Table<TData>
}

export function DataTableToolbar<TData>({
  table,
}: DataTableToolbarProps<TData>) {
  const [filterableText, setFilterableText] = useState<string>('')
  const isFiltered = table.getState().columnFilters.length > 0
  const { info, updateInfo } = useContext(Context);

  useEffect(() => {
    if(info.searchText) {
      table.getColumn("title")?.setFilterValue(info.searchText)
      setFilterableText(info.searchText)
    }
  }, [info, table])

  const onHandleSearch = () => {
    table.getColumn("title")?.setFilterValue(filterableText)
    if(info.searchText) {
      updateInfo({ searchText: '', isFirst: false });
    }
  }

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
          <Button className="mr-4" onClick={onHandleSearch}>
             Search
          </Button>
        </div>

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
