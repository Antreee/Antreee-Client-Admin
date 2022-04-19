import ProductTableRow from "../components/ProductTableRow";
import { useQuery } from "@apollo/client";
import { GET_ITEM_BY_RESTAURANTID } from "../config/queries";

export default function ItemsPage() {
  const { loading, error, data } = useQuery(GET_ITEM_BY_RESTAURANTID, {
    variables: { id: localStorage.getItem("restaurantId") },
  });
  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error...</p>;
  // if (showCreateProduct) {
  //   return <ProductForm changeView={changeView}>Create Product</ProductForm>;
  // }

  if (error) {
    return (
      <section className="flex flex-col w-full p-4 px-12 pt-10 md:pt-10 md:px-10 ml-52 mb-10">
        <p className="p-6 text-2xl">Error....</p>
      </section>
    );
  }

  if (loading) {
    return (
      <section className="flex flex-col w-full p-4 px-12 pt-10 md:pt-10 md:px-10 ml-52 mb-10">
        <p className="p-6 text-2xl">Loading....</p>
      </section>
    );
  }

  return (
    <section className="flex flex-col p-4 px-12 pt-10 md:pt-10 md:px-10 ml-80 mt-20 mb-10">
      <div className="flex flex-col mb-6 mr-12 ml-6 items-start">
        <h1 className="text-3xl font-bold mb-4">Items Table</h1>
        <button
          // to={`/products/${data.id}/edit`}
          type="button"
          className="color-primary hover:underline font-semibold px-3 py-2 text-white text-sm"
        >
          Add Item
        </button>
      </div>

      <table className="w-full h-fit table-auto text-sm text-center text-gray-500">
        <thead className="text-lg text-gray-700 uppercase bg-gray-100">
          <tr>
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
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {data.itemsByRestaurantId.map((item) => {
            return <ProductTableRow key={item._id} item={item} />;
          })}
        </tbody>
      </table>
    </section>
  );
}
