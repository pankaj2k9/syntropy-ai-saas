import { Metadata } from "next"
import { getServerSession } from 'next-auth';
import { redirect } from "next/navigation";
import React from "react";
import Sidebar from "@/components/common/Sidebar";
import DashboardMain from "@/components/common/DashboardMain";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Search your SKU in here",
}
const DashboardPage = async () => {
  const session = await getServerSession();
  if (!session) {
      redirect('/login');
  }


  return (
    <div className="flex min-h-screen overflow-scroll">
      <div className="flex w-full min-h-screen overflow-scroll">
        <div className="flex-[1] max-w-xs">
          <Sidebar />
        </div>
        <div className="flex-[3] border-l-4 border-l-slate-200">
          <DashboardMain />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;