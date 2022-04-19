// import ProductTableRow from "../components/ProductTableRow";

import TransactionTableRow from "../components/TransactionTableRow";

export default function DashboardPage() {
  // if (showCreateProduct) {
  //   return <ProductForm changeView={changeView}>Create Product</ProductForm>;
  // }

  // if (isError) {
  //   return (
  //     <section className="flex flex-col w-full p-4 px-12 pt-10 md:pt-10 md:px-10 ml-52 mb-10">
  //       <p className="p-6 text-2xl">Error....</p>
  //     </section>
  //   );
  // }

  // if (isLoading) {
  //   return (
  //     <section className="flex flex-col w-full p-4 px-12 pt-10 md:pt-10 md:px-10 ml-52 mb-10">
  //       <p className="p-6 text-2xl">Loading....</p>
  //     </section>
  //   );
  // }

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
                          subtitle
                        </h5>
                        <span className="font-semibold text-xl text-blueGray-700">
                          Total Income
                        </span>
                      </div>
                      <div className="relative w-auto pl-4 flex-initial">
                        <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full "></div>
                      </div>
                    </div>
                    <p className="text-sm text-blueGray-400 mt-4">
                      <span className="whitespace-nowrap">
                        test description
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
                          subtitle
                        </h5>
                        <span className="font-semibold text-xl text-blueGray-700">
                          Monthly Income
                        </span>
                      </div>
                      <div className="relative w-auto pl-4 flex-initial">
                        <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full "></div>
                      </div>
                    </div>
                    <p className="text-sm text-blueGray-400 mt-4">
                      <span className="whitespace-nowrap">
                        test description
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
                          subtitle
                        </h5>
                        <span className="font-semibold text-xl text-blueGray-700">
                          Total Order
                        </span>
                      </div>
                      <div className="relative w-auto pl-4 flex-initial">
                        <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full "></div>
                      </div>
                    </div>
                    <p className="text-sm text-blueGray-400 mt-4">
                      <span className="whitespace-nowrap">
                        test description
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              {/* <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
                  <div className="flex-auto p-4">
                    <div className="flex flex-wrap">
                      <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                        <h5 className="text-blueGray-400 uppercase font-bold text-xs">
                          subtitle
                        </h5>
                        <span className="font-semibold text-xl text-blueGray-700">
                          title
                        </span>
                      </div>
                      <div className="relative w-auto pl-4 flex-initial">
                        <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full "></div>
                      </div>
                    </div>
                    <p className="text-sm text-blueGray-400 mt-4">
                      <span className="whitespace-nowrap">
                        test description
                      </span>
                    </p>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
        <section className="flex flex-col p-4 px-12 ml-64 pt-10 md:pt-10 md:px-10 mt-20 mb-10">
          <div className="justify-between flex mb-6 mr-12 ml-6 items-end">
            <h1 className="text-3xl font-semibold">
              Transaction History Table
            </h1>
          </div>
          <table className="w-full h-fit text-sm text-center text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-100">
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
              <TransactionTableRow></TransactionTableRow>
              {/* {products.map((product) => {
            return <ProductTableRow key={product.id} data={product}></ProductTableRow>;
          })} */}
            </tbody>
          </table>
        </section>
      </div>
    </>
  );
}
