import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import { ReactNode } from "react";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Nav />
      <main className="flex flex-col  w-full h-full pt-23 lg:pt-30">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default RootLayout;
