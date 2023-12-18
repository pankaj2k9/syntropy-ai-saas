/* eslint-disable @next/next/no-async-client-component */
"use client"
import { Metadata } from "next"
import Image from "next/image"


import { columns } from "./components/columns"
import { DataTable } from "./components/data-table"
import { UserNav } from "./components/user-nav"


export const metadata: Metadata = {
  title: "Tasks",
  description: "A task and issue tracker build using Tanstack Table.",
}


const data = [
  {
    "id": "1",
    "logo": null,
    "title": "HES5B-VL",
    "description": "NETWORK SWITCH-UNMANAGED 5 PORT",
    "vendor": "Henrich Electronics Corporation",
    "ports": "5",
    "type": "Switch",
    "datasheet": "PDF"
  },
  {
    "id": "2",
    "logo": null,
    "title": "NFI-U08-2",
    "description": "8-PORT UNMANAGED INDUSTRIAL ETHE",
    "vendor": "Tripp Lite",
    "ports": "8",
    "type": "Switch - Unmanaged",
    "datasheet": "PDF"
  },
  {
    "id": "3",
    "logo": null,
    "title": "6GK5005B0A001AB2",
    "description": "SCALANCE XB005",
    "vendor": "Siemens",
    "ports": "5",
    "type": "Switch - Unmanaged",
    "datasheet": "PDF"
  },
  {
    "id": "4",
    "logo": null,
    "title": "EH2308",
    "description": "NETWORK SWITCH-UNMANAGED 8 PORT",
    "vendor": "ATOP Technologies",
    "ports": "8",
    "type": "Switch - Unmanaged",
    "datasheet": "PDF"
  },
  {
    "id": "5",
    "logo": null,
    "title": "BB-ESW105-A",
    "description": "5FE SLIM-TYPE UNMANAGED INDUSTRI",
    "vendor": "Advantech Corp",
    "ports": "5",
    "type": "Switch - Unmanaged",
    "datasheet": "PDF"
  },
  {
    "id": "6",
    "logo": null,
    "title": "1240840000",
    "description": "NETWORK SWITCH-UNMANAGED 5 PORT",
    "vendor": "Weidmuller",
    "ports": "5",
    "type": "Switch - Unmanaged",
    "datasheet": "PDF"
  },
  {
    "id": "7",
    "logo": null,
    "title": "SW-504",
    "description": "INDUSTRIAL ETHERNET 4 PORT SWITC",
    "vendor": "Brainboxes",
    "ports": "4",
    "type": "Switch - Unmanaged",
    "datasheet": "PDF"
  },
  {
    "id": "8",
    "logo": null,
    "title": "1085177",
    "description": "UNMANAGED SWITCH 1000, 4 RJ45 PO",
    "vendor": "Phoenix Contact",
    "ports": "5",
    "type": "Switch - Unmanaged",
    "datasheet": "PDF"
  },
  {
    "id": "9",
    "logo": null,
    "title": "EKI-2525-BE",
    "description": "NETWORK SWITCH-UNMANAGED 5 PORT",
    "vendor": null,
    "ports": "5",
    "type": "Switch - Unmanaged",
    "datasheet": "PDF"
  },
  {
    "id": "10",
    "logo": null,
    "title": "DummyTitle0",
    "description": "DummyDescription0",
    "vendor": "DummyVendor0",
    "ports": "0",
    "type": "DummyType",
    "datasheet": "DummyPDF"
  },
  {
    "id": "11",
    "logo": null,
    "title": "DummyTitle1",
    "description": "DummyDescription1",
    "vendor": "DummyVendor1",
    "ports": "0",
    "type": "DummyType",
    "datasheet": "DummyPDF"
  },
  {
    "id": "12",
    "logo": null,
    "title": "DummyTitle2",
    "description": "DummyDescription2",
    "vendor": "DummyVendor2",
    "ports": "0",
    "type": "DummyType",
    "datasheet": "DummyPDF"
  },
  {
    "id": "13",
    "logo": null,
    "title": "DummyTitle3",
    "description": "DummyDescription3",
    "vendor": "DummyVendor3",
    "ports": "0",
    "type": "DummyType",
    "datasheet": "DummyPDF"
  },
  {
    "id": "14",
    "logo": null,
    "title": "DummyTitle4",
    "description": "DummyDescription4",
    "vendor": "DummyVendor4",
    "ports": "0",
    "type": "DummyType",
    "datasheet": "DummyPDF"
  },
  {
    "id": "15",
    "logo": null,
    "title": "DummyTitle5",
    "description": "DummyDescription5",
    "vendor": "DummyVendor5",
    "ports": "0",
    "type": "DummyType",
    "datasheet": "DummyPDF"
  },
  {
    "id": "16",
    "logo": null,
    "title": "DummyTitle6",
    "description": "DummyDescription6",
    "vendor": "DummyVendor6",
    "ports": "0",
    "type": "DummyType",
    "datasheet": "DummyPDF"
  },
  {
    "id": "17",
    "logo": null,
    "title": "DummyTitle7",
    "description": "DummyDescription7",
    "vendor": "DummyVendor7",
    "ports": "0",
    "type": "DummyType",
    "datasheet": "DummyPDF"
  },
  {
    "id": "18",
    "logo": null,
    "title": "DummyTitle8",
    "description": "DummyDescription8",
    "vendor": "DummyVendor8",
    "ports": "0",
    "type": "DummyType",
    "datasheet": "DummyPDF"
  },
  {
    "id": "19",
    "logo": null,
    "title": "DummyTitle9",
    "description": "DummyDescription9",
    "vendor": "DummyVendor9",
    "ports": "0",
    "type": "DummyType",
    "datasheet": "DummyPDF"
  },
  {
    "id": "20",
    "logo": null,
    "title": "DummyTitle10",
    "description": "DummyDescription10",
    "vendor": "DummyVendor10",
    "ports": "0",
    "type": "DummyType",
    "datasheet": "DummyPDF"
  },
  {
    "id": "21",
    "logo": null,
    "title": "DummyTitle11",
    "description": "DummyDescription11",
    "vendor": "DummyVendor11",
    "ports": "0",
    "type": "DummyType",
    "datasheet": "DummyPDF"
  },
  {
    "id": "22",
    "logo": null,
    "title": "DummyTitle12",
    "description": "DummyDescription12",
    "vendor": "DummyVendor12",
    "ports": "0",
    "type": "DummyType",
    "datasheet": "DummyPDF"
  },
  {
    "id": "23",
    "logo": null,
    "title": "DummyTitle13",
    "description": "DummyDescription13",
    "vendor": "DummyVendor13",
    "ports": "0",
    "type": "DummyType",
    "datasheet": "DummyPDF"
  },
  {
    "id": "24",
    "logo": null,
    "title": "DummyTitle14",
    "description": "DummyDescription14",
    "vendor": "DummyVendor14",
    "ports": "0",
    "type": "DummyType",
    "datasheet": "DummyPDF"
  },
  {
    "id": "25",
    "logo": null,
    "title": "DummyTitle15",
    "description": "DummyDescription15",
    "vendor": "DummyVendor15",
    "ports": "0",
    "type": "DummyType",
    "datasheet": "DummyPDF"
  }
]

export default  function SkusPage() {
  return (
    <>
      <div className="md:hidden">
        <Image
          src="/examples/tasks-light.png"
          width={1280}
          height={998}
          alt="Playground"
          className="block dark:hidden"
        />
        <Image
          src="/examples/tasks-dark.png"
          width={1280}
          height={998}
          alt="Playground"
          className="hidden dark:block"
        />
      </div>
      <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
        <div className="flex items-center justify-between space-y-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Welcome back!</h2>
            <p className="text-muted-foreground">
              Here&apos;s a list of your skus for this month!
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <UserNav />
          </div>
        </div>
        <DataTable data={data} columns={columns} />
      </div>
    </>
  )
}
