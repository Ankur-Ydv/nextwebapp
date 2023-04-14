import Link from "next/link";
import React from "react";

const Sidebar = () => {
  return (
    <>
      <div className="w-1/4 h-full bg-neutral-100 shadow-lg">
        <ul className="w-full h-full flex flex-col gap-2 p-4 text-lg font-semibold">
          <Link href="/">
            <li className="p-4 hover:bg-stone-200">Dashboard</li>
          </Link>
          <Link href="/users">
            <li className="p-4 hover:bg-stone-200">Users</li>
          </Link>
          <Link href="/supervisors">
            <li className="p-4 hover:bg-stone-200">Supervisors</li>
          </Link>
          <Link href="/payment">
            <li className="p-4 hover:bg-stone-200">Payment</li>
          </Link>
          <Link href="/societies">
            <li className="p-4 hover:bg-stone-200">Societies</li>
          </Link>
          <Link href="/bookings">
            <li className="p-4 hover:bg-stone-200">Booking</li>
          </Link>
          <Link href="/">
            <li className="p-4 hover:bg-stone-200">Subscription</li>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
