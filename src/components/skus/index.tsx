/* eslint-disable @next/next/no-async-client-component */
"use client"
import { Metadata } from "next"
import Image from "next/image"
import React, { useEffect, useState } from 'react';

import { columns } from "./components/columns"
import { DataTable } from "./components/data-table"
import { UserNav } from "./components/user-nav"


export const metadata: Metadata = {
  title: "Tasks",
  description: "A task and issue tracker build using Tanstack Table.",
}

export default  function SkusPage() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/data'); 
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData = await response.json();
        console.log("jsonData", jsonData)
        setData(jsonData.data);
      } catch (error) {
        console.error('Failed to fetch data:', error);
      }
    };

    fetchData();
  }, []);

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
