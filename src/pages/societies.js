import React from "react";
import MainLayout from "@/components/layouts/MainLayout";

const Array = [
  {
    title: "Total Registered Societies",
    data: "500",
  },
];

const SocHeadings = [
  "Society Id",
  "Society Name",
  "Society Address",
  "Total Active User",
  "Premium User",
  "Supervisors",
];

const SocData = [
  {
    id: "$215",
    SName: "abc",
    SAddress: "Noida 62",
    TotalActiveUser: "56",
    PremiumUser: "50",
    Supervisors: "126",
  },
  {
    id: "$123",
    SName: "xyz",
    SAddress: "gkz",
    TotalActiveUser: "75",
    PremiumUser: "72",
    Supervisors: "512",
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
    Fname: "abc",
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
    Fname: "abc",
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
    Fname: "abc",
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
    Fname: "abc",
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
    Fname: "abc",
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
    Fname: "abc",
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
    Fname: "abc",
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
    Fname: "abc",
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
    Fname: "abc",
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

const society = () => {
  return (
    <>
      <MainLayout>
        <section className="w-full h-full flex flex-col p-4 gap-5 overflow-hidden">
          <div>
            {Array.map((item) => {
              return (
                <div className="w-[22rem] h-[12rem] flex flex-col items-center justify-evenly shadow-md bg-stone-100">
                  <span className="text-2xl font-bold">{item.title}</span>
                  <span className="text-xl">{item.data}</span>
                </div>
              );
            })}
          </div>
          <div className="w-full h-1/2 overflow-y-auto">
            <table className="w-full text-xs table-auto">
              <thead className="rounded-t-lg bg-stone-100">
                <tr className="text-right">
                  {SocHeadings.map((heading) => {
                    return (
                      <th title="Ranking" className="p-3 text-left">
                        {heading}
                      </th>
                    );
                  })}
                </tr>
              </thead>
              <tbody>
                {SocData.map((society) => {
                  return (
                    <tr className="text-left border-b border-opacity-20 border-gray-700">
                      <td className="px-3 py-2">
                        <span>{society.id}</span>
                      </td>
                      <td className="px-3 py-2">
                        <span>{society.SName}</span>
                      </td>
                      <td className="px-3 py-2">
                        <span>{society.SAddress}</span>
                      </td>
                      <td className="px-3 py-2">
                        <span>{society.TotalActiveUser}</span>
                      </td>
                      <td className="px-3 py-2">
                        <span>{society.PremiumUser}</span>
                      </td>
                      <td className="px-3 py-2">
                        <span>{society.Supervisors}</span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
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
        </section>
      </MainLayout>
    </>
  );
};

export default society;
