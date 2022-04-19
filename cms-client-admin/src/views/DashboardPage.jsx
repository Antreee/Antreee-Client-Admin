// import ProductTableRow from "../components/ProductTableRow";
import CardStats from "../components/CardStats";
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
                <CardStats
                  statSubtitle="Earn per / Month"
                  statTitle="350,897"
                  statArrow="up"
                  statPercent="3.48"
                  statPercentColor="text-emerald-500"
                  statDescripiron="Since last month"
                  statIconName="far fa-chart-bar"
                  statIconColor="bg-red-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="Earn per / year"
                  statTitle="2,356"
                  statArrow="down"
                  statPercent="3.48"
                  statPercentColor="text-red-500"
                  statDescripiron="Since last week"
                  statIconName="fas fa-chart-pie"
                  statIconColor="bg-orange-500"
                />
              </div>
              {/* <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="SALES"
                  statTitle="924"
                  statArrow="down"
                  statPercent="1.10"
                  statPercentColor="text-orange-500"
                  statDescripiron="Since yesterday"
                  statIconName="fas fa-users"
                  statIconColor="bg-pink-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="PERFORMANCE"
                  statTitle="49,65%"
                  statArrow="up"
                  statPercent="12"
                  statPercentColor="text-emerald-500"
                  statDescripiron="Since last month"
                  statIconName="fas fa-percent"
                  statIconColor="bg-lightBlue-500"
                />
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
                  Order Id
                </th>
                <th scope="col" className="px-6 py-3">
                  Customer Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Customer Phone Number
                </th>
                <th scope="col" className="px-6 py-3">
                  Customer Email
                </th>
                <th scope="col" className="px-6 py-3">
                  Table Number
                </th>
                <th scope="col" className="px-6 py-3">
                  Total Price
                </th>
                <th scope="col" className="px-6 py-3">
                  status
                </th>
                {/* <th scope="col" className="px-6 py-3">
              Action
            </th> */}
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
