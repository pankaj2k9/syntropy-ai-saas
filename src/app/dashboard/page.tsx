import { Metadata } from "next"
import { getServerSession } from 'next-auth';
import { redirect } from "next/navigation";
import React from "react";
import Sidebar from "@/components/common/Sidebar";
import SKULists from "@/components/common/SKULists";
import Skus from "@/components/skus";
export const metadata: Metadata = {
  title: "Dashboard",
  description: "Search your SKU in here",
}


const data = [
  {
    "productId": "HES5B-VL",
    "description": "NETWORK SWITCH-UNMANAGED 5 PORT",
    "manufacturer": "Henrich Electronics Corporation",
    "quantity": 5,
    "category": "Switch",
    "datasheet": "link-to-pdf"
  },
  {
    "productId": "NFI-U08-2",
    "description": "8-PORT UNMANAGED INDUSTRIAL ETHERNET SWITCH",
    "manufacturer": "Tripp Lite",
    "quantity": 8,
    "category": "Switch - Unmanaged",
    "datasheet": "link-to-pdf"
  },
  {
    "productId": "6GK5005B0A001AB2",
    "description": "SCALANCE XB005",
    "manufacturer": "Siemens",
    "quantity": 5,
    "category": "Switch - Unmanaged",
    "datasheet": "link-to-pdf"
  }
]

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
          {data?.length > 0 ? <Skus /> : <SKULists />}
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;