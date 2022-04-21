import ProductTableRow from "../components/ProductTableRow";
import { useQuery } from "@apollo/client";
import { GET_ITEM_BY_RESTAURANTID } from "../config/queries";
import Spinners from "../components/Spinner";
import { useState } from "react";

export default function ItemsPage() {
  const { loading, error, data } = useQuery(GET_ITEM_BY_RESTAURANTID, {
    variables: { id: localStorage.getItem("restaurantId") },
  });

  const [page, setPage] = useState(1);
  const [limit] = useState(8);
  const offset = page * limit - limit;
  const paginationItems = data?.itemsByRestaurantId.slice(
    offset,
    offset + limit
  );

  if (loading) {
    return <Spinners />;
  }

  if (error) {
    return (
      <section className="flex flex-col w-full p-4 px-12 pt-10 md:pt-10 md:px-10 ml-52 mb-10">
        <p className="p-6 text-2xl">Error....</p>
      </section>
    );
  }

  const previousHandler = () => {
    if (page === 1) return;
    setPage(page - 1);
  };

  const nextHandler = () => {
    if (page === Math.ceil(data?.itemsByRestaurantId.length / limit)) return;
    setPage(page + 1);
  };

  return (
    <section className="flex flex-col p-4 px-12 pt-10 md:pt-10 md:px-10 ml-64 mt-20 mb-10">
      <div className="flex flex-col mb-6 mr-12 items-start">
        <h1 className="text-3xl font-semibold mb-3 ml-14">Items Table</h1>
        {/* <button
          // to={`/products/${data.id}/edit`}
          type="button"
          className="color-primary hover:underline font-semibold px-3 py-2 text-white text-sm"
        >
          Add Item
        </button> */}
      </div>

      <table className="w-full table-fixed text-sm text-center text-gray-500">
        <thead className="text-lg text-gray-700 uppercase bg-gray-100">
          <tr>
            <th scope="col" className="px-6 py-3">
              No
            </th>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Price
            </th>
            <th scope="col" className="px-3 py-3">
              Category
            </th>
            <th scope="col" className="px-6 py-3">
              Images
            </th>
            <th scope="col" className="px-6 py-3">
              Description
            </th>
            {/* <th scope="col" className="px-6 py-3">
              Action
            </th> */}
          </tr>
        </thead>
        <tbody>
          {paginationItems.map((item, i) => {
            return (
              <ProductTableRow key={item._id} item={item} i={i + offset + 1} />
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
  );
}
