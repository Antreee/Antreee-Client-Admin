import { useQuery } from "@apollo/client";
import { GET_ORDER_BY_RESTAURANTID } from "../config/queries";
import TransactionTableRow from "../components/TransactionTableRow";
import Spinners from "../components/Spinner";
import { useState } from "react";

export default function DashboardPage() {
  const { loading, error, data } = useQuery(GET_ORDER_BY_RESTAURANTID, {
    variables: { id: localStorage.getItem("restaurantId") },
  });

  let statusDone;
  let statusPaid;
  let totalDoneWorth = 0;
  if (data) {
    statusDone = data?.getOrdersByRestaurantId.filter(
      (el) => el.status === "PAID"
    );
    statusDone.forEach((e) => {
      totalDoneWorth += e.totalPrice;
    });
    statusPaid = data?.getOrdersByRestaurantId.filter(
      (el) => el.status === "Unpaid"
    );
  }

  const [page, setPage] = useState(1);
  const [limit] = useState(8);
  const offset = page * limit - limit;
  const paginationOrders = data?.getOrdersByRestaurantId.slice(
    offset,
    offset + limit
  );

  const previousHandler = () => {
    if (page === 1) return;
    setPage(page - 1);
  };

  const nextHandler = () => {
    if (page === Math.ceil(data?.getOrdersByRestaurantId.length / limit))
      return;
    setPage(page + 1);
  };


  if (error) {
    return (
      <section className="flex flex-col w-full p-4 px-12 pt-10 md:pt-10 md:px-10 ml-52 mb-10">
        <p className="p-6 text-2xl">Error....</p>
      </section>
    );
  }

  if (loading) {
    return <Spinners />;
  }

  return (
    <>
      <div className="relative bg-lightBlue-600 md:pt-32 pb-32 pt-12">
        <div className="container px-4 md:px-10 mx-auto w-full">
          <div className="ml-60">
            {/* Card stats */}
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
                  <div className="flex-auto p-4">
                    <div className="flex flex-wrap">
                      <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                        <h5 className="text-blueGray-400 uppercase font-bold text-xs">
                          Income
                        </h5>
                        <span className="font-semibold text-xl text-blueGray-700">
                          Total Income
                        </span>
                      </div>
                      {/* <div className="relative w-auto pl-4 flex-initial">
                        <div className="text-indigo-500 p-10 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full ">
                     
                        </div>
                      </div> */}
                    </div>
                    <p className="text-sm text-blueGray-400 mt-4">
                      <span className="whitespace-nowrap text-indigo-500 text-2xl font-bold">
                        {totalDoneWorth &&
                          totalDoneWorth.toLocaleString("id-ID", {
                            style: "currency",
                            currency: "IDR",
                          })}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
                  <div className="flex-auto p-4">
                    <div className="flex flex-wrap">
                      <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                        <h5 className="text-blueGray-400 uppercase font-bold text-xs">
                          Unpaid
                        </h5>
                        <span className="font-semibold text-xl text-blueGray-700">
                          Order
                        </span>
                      </div>
                      <div className="relative w-auto pl-4 flex-initial">
                        <div className="text-indigo-500 font-bold text-2xl p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full ">
                          {statusPaid.length}
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-blueGray-400 mt-4">
                      <span className="whitespace-nowrap">
                        Total order unpaid
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
                  <div className="flex-auto p-4">
                    <div className="flex flex-wrap">
                      <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                        <h5 className="text-blueGray-400 uppercase font-bold text-xs">
                          Paid
                        </h5>
                        <span className="font-semibold text-xl text-blueGray-700">
                          Order
                        </span>
                      </div>
                      <div className="relative w-auto pl-4 flex-initial">
                        <div className="text-indigo-500 text-2xl font-bold p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full ">
                          {statusDone.length}
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-blueGray-400 mt-4">
                      <span className="whitespace-nowrap">
                        Total order paid
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
                  <div className="flex-auto p-4">
                    <div className="flex flex-wrap">
                      <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                        <h5 className="text-blueGray-400 uppercase font-bold text-xs">
                          Total
                        </h5>
                        <span className="font-semibold text-xl text-blueGray-700">
                          Order
                        </span>
                      </div>
                      <div className="relative w-auto pl-4 flex-initial">
                        <div className="text-indigo-500 text-2xl font-bold p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full ">
                          {data?.getOrdersByRestaurantId.length}
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-blueGray-400 mt-4">
                      <span className="whitespace-nowrap">Total order All</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="flex flex-col p-4 ml-64 md:pt-10 md:px-10 mt-10  mb-10">
          <div className="justify-between flex mb-6 mr-12 ml-6 items-end">
            <h1 className="text-3xl font-semibold">Transaction History</h1>
          </div>
          <table className="w-full h-fit text-center text-gray-500">
            <thead className="text-lg text-gray-700 uppercase bg-gray-100">
              <tr>
                <th scope="col" className="px-6 py-3">
                  No
                </th>
                <th scope="col" className="px-6 py-3">
                  Order Id
                </th>
                <th scope="col" className="px-6 py-3">
                  Description
                </th>
                <th scope="col" className="px-6 py-3">
                  Total Price
                </th>
                <th scope="col" className="px-6 py-3">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {paginationOrders.map((order, i) => {
                return (
                  <TransactionTableRow
                    key={order._id}
                    order={order}
                    i={i + offset + 1}
                  />
                );
              })}
            </tbody>
          </table>
          <div className="container mt-10 flex justify-center mx-auto">
            <ul className="flex">
              <li>
                <button
                  onClick={previousHandler}
                  className="h-10 px-5 text-gray-600 bg-white border border-r-0 border-gray-600 color-red-hover"
                >
                  Prev
                </button>
              </li>
              <li>
                <button className="h-10 px-5 text-gray-600 bg-white border border-r-0 border-gray-600 cursor-default">
                  Page {page}
                </button>
              </li>

              <li>
                <button
                  onClick={nextHandler}
                  className="h-10 px-5 text-gray-600 bg-white border border-gray-600 color-red-hover"
                >
                  Next
                </button>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </>
  );
}
