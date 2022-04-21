import BookingTableRow from "../components/BookingTableRow";
import { useQuery } from "@apollo/client";
import { GET_BOOK_BY_RESTAURANTID } from "../config/queries";
import Spinners from "../components/Spinner";

export default function BookingPage() {
  const { loading, error, data } = useQuery(GET_BOOK_BY_RESTAURANTID, {
    variables: { id: localStorage.getItem("restaurantId") },
  });
  
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
    <section className="flex flex-col p-4 px-12 pt-10 md:pt-10 md:px-10 ml-64  mt-20 mb-10">
      <div className="justify-between flex mb-6 mr-10 items-end">
        <h1 className="text-3xl font-semibold ml-14 mb-3">Booking Table</h1>
      </div>
      <table className="w-full h-fit  text-center text-gray-500">
        <thead className="text-lg text-gray-700 uppercase bg-gray-100">
          <tr>
            <th scope="col" className="px-6 py-3">
              No
            </th>
            <th scope="col" className="px-6 py-3">
              Booking Id
            </th>
            <th scope="col" className="px-6 py-3">
              Description
            </th>
            <th scope="col" className="px-6 py-3">
              Booking Date
            </th>
            <th scope="col" className="px-6 py-3">
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          {data?.getBookedByRestaurantId.map((book, i) => {
            return (
              <BookingTableRow
                key={book._id}
                book={book}
                i={i + 1}
              ></BookingTableRow>
            );
          })}
        </tbody>
      </table>
    </section>
  );
}
