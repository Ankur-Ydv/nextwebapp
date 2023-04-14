import React from "react";
import MainLayout from "@/components/layouts/MainLayout";

const Array = [
  {
    title: "Total Supervisors",
    data: "3",
  },
];

const Headings = [
  "Id",
  "FName",
  "LName",
  "Mobile No.",
  "Email",
  "Society",
  "Total Car Taged",
  "Gender",
];

const Users = [
  {
    id: 1,
    Fname: "abc",
    LName: "xyz",
    Gender: "Male",
    MobileNo: "999999999",
    Email: "abc@gmail.com",
    Society: "Deluxe",
    TotalCarTaged: "10000",
  },
  {
    id: 1,
    Fname: "abc",
    LName: "xyz",
    Gender: "Male",
    MobileNo: "999999999",
    Email: "abc@gmail.com",
    Society: "Deluxe",
    TotalCarTaged: "10000",
  },
  {
    id: 1,
    Fname: "abc",
    LName: "xyz",
    Gender: "Male",
    MobileNo: "999999999",
    Email: "abc@gmail.com",
    Society: "Deluxe",
    TotalCarTaged: "10000",
  },
  {
    id: 1,
    Fname: "abc",
    LName: "xyz",
    Gender: "Male",
    MobileNo: "999999999",
    Email: "abc@gmail.com",
    Society: "Deluxe",
    TotalCarTaged: "10000",
  },
  {
    id: 1,
    Fname: "abc",
    LName: "xyz",
    Gender: "Male",
    MobileNo: "999999999",
    Email: "abc@gmail.com",
    Society: "Deluxe",
    TotalCarTaged: "10000",
  },
  {
    id: 1,
    Fname: "abc",
    LName: "xyz",
    Gender: "Male",
    MobileNo: "999999999",
    Email: "abc@gmail.com",
    Society: "Deluxe",
    TotalCarTaged: "10000",
  },
  {
    id: 1,
    Fname: "abc",
    LName: "xyz",
    Gender: "Male",
    MobileNo: "999999999",
    Email: "abc@gmail.com",
    Society: "Deluxe",
    TotalCarTaged: "10000",
  },
  {
    id: 1,
    Fname: "abc",
    LName: "xyz",
    Gender: "Male",
    MobileNo: "999999999",
    Email: "abc@gmail.com",
    Society: "Deluxe",
    TotalCarTaged: "10000",
  },
  {
    id: 1,
    Fname: "abc",
    LName: "xyz",
    Gender: "Male",
    MobileNo: "999999999",
    Email: "abc@gmail.com",
    Society: "Deluxe",
    TotalCarTaged: "10000",
  },
  {
    id: 1,
    Fname: "abc",
    LName: "xyz",
    Gender: "Male",
    MobileNo: "999999999",
    Email: "abc@gmail.com",
    Society: "Deluxe",
    TotalCarTaged: "10000",
  },
  {
    id: 1,
    Fname: "abc",
    LName: "xyz",
    Gender: "Male",
    MobileNo: "999999999",
    Email: "abc@gmail.com",
    Society: "Deluxe",
    TotalCarTaged: "10000",
  },
];

const supervisors = () => {
  return (
    <>
      <MainLayout>
        <section className="w-full h-full flex flex-col p-4 gap-5 overflow-hidden">
          <div className="w-full h-fit">
            {Array.map((item) => {
              return (
                <div className="w-[20rem] h-[12rem] flex flex-col items-center justify-evenly shadow-md bg-stone-100">
                  <span className="text-3xl font-bold">{item.title}</span>
                  <span className="text-xl">{item.data}</span>
                </div>
              );
            })}
          </div>
          <div className="w-full h-full overflow-y-auto">
            <table className="w-full text-xs">
              <thead className="rounded-t-lg bg-stone-100">
                <tr className="text-right">
                  {Headings.map((heading) => {
                    return (
                      <th title="Ranking" className="p-3 text-left">
                        {heading}
                      </th>
                    );
                  })}
                </tr>
              </thead>
              <tbody>
                {Users.map((user) => {
                  return (
                    <tr className="text-left border-b border-opacity-20 border-gray-700">
                      <td className="px-3 py-2">
                        <span>{user.id}</span>
                      </td>
                      <td className="px-3 py-2">
                        <span>{user.Fname}</span>
                      </td>
                      <td className="px-3 py-2">
                        <span>{user.LName}</span>
                      </td>
                      <td className="px-3 py-2">
                        <span>{user.MobileNo}</span>
                      </td>
                      <td className="px-3 py-2">
                        <span>{user.Email}</span>
                      </td>
                      <td className="px-3 py-2">
                        <span>{user.Society}</span>
                      </td>
                      <td className="px-3 py-2">
                        <span>{user.TotalCarTaged}</span>
                      </td>
                      <td className="px-3 py-2">
                        <span>{user.Gender}</span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>
      </MainLayout>
    </>
  );
};

export default supervisors;
