import MainLayout from "@/components/layouts/MainLayout";
import React from "react";

const Array = [
  {
    title: "Total $",
    data: "2,50,000/-",
  },
  {
    title: "This Year $",
    data: "2,30,000/-",
  },
  {
    title: "This Month",
    data: "1,00,000",
  },
  {
    title: "Today",
    data: "10,000",
  },
];

const Headings = [
  "Payment Id",
  "Amount",
  "User Id",
  "Subscription Duration",
  "Subtype",
  "Car number",
  "Start Date",
  "Due Date",
  "Type",
];

const Payments = [
  {
    id: 121,
    Amount: "599",
    UserId: "863",
    SubscriptionDuration: "1 month",
    Subtype: "Alternate",
    CarNumber: "Dl03....",
    StartDate: "04/05/23",
    DueDate: "03/06/23",
    Type: 1,
  },
  {
    id: 215,
    Amount: "1499",
    UserId: "259",
    SubscriptionDuration: "3 month",
    Subtype: "Daily",
    CarNumber: "Dl73....",
    StartDate: "04/05/23",
    DueDate: "03/06/23",
    Type: 2,
  },
  {
    id: 612,
    Amount: "1499",
    UserId: "132",
    SubscriptionDuration: "3 month",
    Subtype: "Daily",
    CarNumber: "Dl83....",
    StartDate: "04/05/23",
    DueDate: "03/06/23",
    Type: 2,
  },
];

const payment = () => {
  return (
    <>
      <MainLayout>
        <section className="w-full h-full flex flex-col p-4 gap-5 overflow-hidden">
          <div className="w-full flex flex-wrap justify-evenly gap-2">
            {Array.map((item) => {
              return (
                <div className="w-[16rem] h-[10rem] flex flex-col items-center justify-evenly shadow-md bg-stone-100">
                  <span className="text-3xl font-bold">{item.title}</span>
                  <span className="text-xl">{item.data}</span>
                </div>
              );
            })}
          </div>
          <div className="w-full h-1/2 overflow-y-auto">
            <table className="w-full text-xs table-auto">
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
                {Payments.map((payment) => {
                  return (
                    <tr className="text-left border-b border-opacity-20 border-gray-700">
                      <td className="px-3 py-2">
                        <span>{payment.id}</span>
                      </td>
                      <td className="px-3 py-2">
                        <span>{payment.Amount}</span>
                      </td>
                      <td className="px-3 py-2">
                        <span>{payment.UserId}</span>
                      </td>
                      <td className="px-3 py-2">
                        <span>{payment.SubscriptionDuration}</span>
                      </td>
                      <td className="px-3 py-2">
                        <span>{payment.Subtype}</span>
                      </td>
                      <td className="px-3 py-2">
                        <span>{payment.CarNumber}</span>
                      </td>
                      <td className="px-3 py-2">
                        <span>{payment.StartDate}</span>
                      </td>
                      <td className="px-3 py-2">
                        <span>{payment.DueDate}</span>
                      </td>
                      <td className="px-3 py-2">
                        <span>{payment.Type}</span>
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

export default payment;
