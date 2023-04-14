import MainLayout from "@/components/layouts/MainLayout";
import React from "react";

const Array = [
  {
    title: "Total Users",
    data: "500",
  },
  {
    title: "Revenue",
    data: "Rs.5000",
  },
  {
    title: "Cars Served",
    data: "2000",
  },
  {
    title: "Total Society",
    data: "20",
  },
  {
    title: "Cleaners",
    data: "10",
  },
  {
    title: "ABC",
    data: "xyz",
  },
];

export default function Home() {
  return (
    <>
      <MainLayout>
        <section className="w-full h-full flex justify-around p-4">
          <div className="w-4/5 h-full flex flex-wrap justify-around items-center gap-2">
            {Array.map((item) => {
              return (
                <div className="w-[20rem] h-[12rem] flex flex-col items-center justify-evenly shadow-md bg-stone-100">
                  <span className="text-3xl font-bold">{item.title}</span>
                  <span className="text-xl">{item.data}</span>
                </div>
              );
            })}
          </div>
        </section>
      </MainLayout>
    </>
  );
}
