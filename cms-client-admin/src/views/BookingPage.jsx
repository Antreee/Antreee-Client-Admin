import BookingTableRow from "../components/BookingTableRow";

export default function BookingPage() {


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
    <section className="flex flex-col p-4 px-12 pt-10 md:pt-10 md:px-10 ml-96 mt-20 mb-10">
      <div className="justify-between flex mb-6 mr-12 ml-6 items-end">
        <h1 className="text-3xl font-semibold">Items Tables</h1>
      </div>
      <table className="w-full h-fit text-sm text-center text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-100">
          <tr>
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
              Booking Date
            </th>
            <th scope="col" className="px-6 py-3">
              Number Of People
            </th>
            <th scope="col" className="px-6 py-3">
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          <BookingTableRow></BookingTableRow>
          {/* {products.map((product) => {
            return <ProductTableRow key={product.id} data={product}></ProductTableRow>;
          })} */}
        </tbody>
      </table>
    </section>
  );
}