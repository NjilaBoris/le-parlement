import AdminNav from "@/components/AdminNav";
import Sidebar from "@/components/Sidebar";
import { ReactNode } from "react";

const DashLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <main className="relative font-inter">
        <AdminNav />
        <div className="flex">
          <Sidebar />
          <section className="flex min-h-screen flex-1 flex-col px-6 pb-6 pt-15 max-md:pb-14 sm:px-14">
            <div className="mx-auto w-full max-w-5xl">{children}</div>
          </section>
        </div>
      </main>
    </>
  );
};

export default DashLayout;
