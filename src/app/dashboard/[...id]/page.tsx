import { Metadata } from "next"
import { getServerSession } from 'next-auth';
import { redirect } from "next/navigation";
import React from "react";
import ChatSidebar from "@/components/common/ChatSidebar";
import PDFViewer from "@/components/common/PdfViewer";
export const metadata: Metadata = {
  title: "Dashboard",
  description: "Search your SKU in here",
}
const DashboardPDFPage = async () => {
  const session = await getServerSession();
  if (!session) {
      redirect('/login');
  }




  return (
    <div className="flex min-h-screen overflow-scroll">
      <div className="flex w-full min-h-screen overflow-scroll">
        <div className="flex-[1] max-w-xs">
          <ChatSidebar />
        </div>
        <div className="flex-[3] border-l-4 border-l-slate-200">
            <PDFViewer pdf_url={"https://www.africau.edu/images/default/sample.pdf"} />
        </div>
      </div>
    </div>
  );
};

export default DashboardPDFPage;