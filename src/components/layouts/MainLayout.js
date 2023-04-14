import Sidebar from "@/components/Sidebar";
import React from "react";
import Link from "next/link";
import { CgProfile } from "react-icons/cg";

const MainLayout = ({ children }) => {
  return (
    <div className="w-screen h-screen overflow-hidden flex flex-col bg-stone-200">
      <div className="w-full h-fit p-4 px-12 flex justify-between items-center bg-neutral-100 shadow-md">
        <Link href="/">
          <CgProfile className="text-4xl font-semibold" />
        </Link>
        <Link href="/logout">
          <span className="text-xl font-semibold hover:text-stone-600">
            Logout
          </span>
        </Link>
      </div>
      <div className="w-full h-full flex flex-row overflow-hidden">
        <Sidebar />
        {children}
      </div>
    </div>
  );
};

export default MainLayout;
