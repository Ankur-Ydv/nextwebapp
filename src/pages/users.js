import React, { useState } from "react";
import MainLayout from "@/components/layouts/MainLayout";
import { BsSearch } from "react-icons/bs";

const Array = [
  {
    title: "Total Users",
    data: "500",
  },
  {
    title: "Active Users",
    data: "200",
  },
  {
    title: "Premium User",
    data: "150",
  },
];

const Headings = [
  "Id",
  "FName",
  "LName",
  "Car Type",
  "Car No.",
  "Car Model",
  "Car Brand",
  "Subscription",
  "Gender",
  "Mobile No.",
  "Email",
  "Society",
  "Supervisor",
  "Address",
  "Total & Spend",
];

const Users = [
  {
    id: 1,
    Fname: "xya",
    LName: "xyz",
    CarType: "Sedan",
    CarNo: "4444",
    CarModel: "Polo",
    CarBrand: "Volkswagon",
    Subscription: "yes",
    Gender: "Male",
    MobileNo: "999999999",
    Email: "abc@gmail.com",
    Society: "Deluxe",
    Supervisor: "No",
    Address: "122",
    TotalSpend: "10000",
  },
  {
    id: 2,
    Fname: "xyv",
    LName: "xyz",
    CarType: "Sedan",
    CarNo: "4444",
    CarModel: "Polo",
    CarBrand: "Volkswagon",
    Subscription: "yes",
    Gender: "Male",
    MobileNo: "999999999",
    Email: "abc@gmail.com",
    Society: "Deluxe",
    Supervisor: "No",
    Address: "122",
    TotalSpend: "10000",
  },
  {
    id: 3,
    Fname: "xyy",
    LName: "xyz",
    CarType: "Sedan",
    CarNo: "4444",
    CarModel: "Polo",
    CarBrand: "Volkswagon",
    Subscription: "yes",
    Gender: "Male",
    MobileNo: "999999999",
    Email: "abc@gmail.com",
    Society: "Deluxe",
    Supervisor: "No",
    Address: "122",
    TotalSpend: "10000",
  },
  {
    id: 4,
    Fname: "xyt",
    LName: "xyz",
    CarType: "Sedan",
    CarNo: "4444",
    CarModel: "Polo",
    CarBrand: "Volkswagon",
    Subscription: "yes",
    Gender: "Male",
    MobileNo: "999999999",
    Email: "abc@gmail.com",
    Society: "Deluxe",
    Supervisor: "No",
    Address: "122",
    TotalSpend: "10000",
  },
  {
    id: 4,
    Fname: "xyr",
    LName: "xyz",
    CarType: "Sedan",
    CarNo: "4444",
    CarModel: "Polo",
    CarBrand: "Volkswagon",
    Subscription: "yes",
    Gender: "Male",
    MobileNo: "999999999",
    Email: "abc@gmail.com",
    Society: "Deluxe",
    Supervisor: "No",
    Address: "122",
    TotalSpend: "10000",
  },
  {
    id: 4,
    Fname: "xyz",
    LName: "xyz",
    CarType: "Sedan",
    CarNo: "4444",
    CarModel: "Polo",
    CarBrand: "Volkswagon",
    Subscription: "yes",
    Gender: "Male",
    MobileNo: "999999999",
    Email: "abc@gmail.com",
    Society: "Deluxe",
    Supervisor: "No",
    Address: "122",
    TotalSpend: "10000",
  },
  {
    id: 4,
    Fname: "xyq",
    LName: "xyz",
    CarType: "Sedan",
    CarNo: "4444",
    CarModel: "Polo",
    CarBrand: "Volkswagon",
    Subscription: "yes",
    Gender: "Male",
    MobileNo: "999999999",
    Email: "abc@gmail.com",
    Society: "Deluxe",
    Supervisor: "No",
    Address: "122",
    TotalSpend: "10000",
  },
  {
    id: 4,
    Fname: "xyd",
    LName: "xyz",
    CarType: "Sedan",
    CarNo: "4444",
    CarModel: "Polo",
    CarBrand: "Volkswagon",
    Subscription: "yes",
    Gender: "Male",
    MobileNo: "999999999",
    Email: "abc@gmail.com",
    Society: "Deluxe",
    Supervisor: "No",
    Address: "122",
    TotalSpend: "10000",
  },
  {
    id: 4,
    Fname: "ac",
    LName: "xyz",
    CarType: "Sedan",
    CarNo: "4444",
    CarModel: "Polo",
    CarBrand: "Volkswagon",
    Subscription: "yes",
    Gender: "Male",
    MobileNo: "999999999",
    Email: "abc@gmail.com",
    Society: "Deluxe",
    Supervisor: "No",
    Address: "122",
    TotalSpend: "10000",
  },
];

const users = () => {
  const [search, setSearch] = useState("");
  const filteredUsers = Users.filter((user) =>
    user.Fname.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <>
      <MainLayout>
        <section className="w-full h-full flex flex-col p-4 gap-5 overflow-hidden">
          <div className="w-full h-fit flex flex-wrap gap-4 justify-evenly items-center">
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
                {filteredUsers.map((user) => {
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
                        <span>{user.CarType}</span>
                      </td>
                      <td className="px-3 py-2">
                        <span>{user.CarNo}</span>
                      </td>
                      <td className="px-3 py-2">
                        <span>{user.CarModel}</span>
                      </td>
                      <td className="px-3 py-2">
                        <span>{user.CarBrand}</span>
                      </td>
                      <td className="px-3 py-2">
                        <span>{user.Subscription}</span>
                      </td>
                      <td className="px-3 py-2">
                        <span>{user.Gender}</span>
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
                        <span>{user.Address}</span>
                      </td>
                      <td className="px-3 py-2">
                        <span>{user.Supervisor}</span>
                      </td>
                      <td className="px-3 py-2">
                        <span>{user.TotalSpend}</span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="w-full h-fit flex flex-row items-center justify-center gap-4 px-4">
            <BsSearch className="text-2xl" />
            <input
              id="search"
              type="text"
              placeholder="Search"
              className="w-1/2 p-3"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </section>
      </MainLayout>
    </>
  );
};

export default users;
