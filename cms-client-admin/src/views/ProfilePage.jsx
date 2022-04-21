import { GET_RESTAURANT_ADMIN, UPDATE_AVAILABILITY } from "../config/queries";
import { useMutation, useQuery } from "@apollo/client";
import Spinners from "../components/Spinner";
import Swal from "sweetalert2";

export default function ProfilePage() {
  const { loading, error, data } = useQuery(GET_RESTAURANT_ADMIN);

  const [
    availablityMutation,
    { loading: loadingAvailable, error: loadingError, data: dataAvailable },
  ] = useMutation(UPDATE_AVAILABILITY);

  function availableHandler(e) {
    const { value } = e.target;
    availablityMutation({
      variables: {
        available: value === "true" ? true : false,
        id: localStorage.getItem("restaurantId"),
      },
    });
    Swal.fire("Success", "Change available success", "success")
  }
  
  if (dataAvailable) {
    console.log(dataAvailable);
  }

  if (error || loadingError) {
    return (
      <section className="flex flex-col w-full p-4 px-12 pt-10 md:pt-10 md:px-10 ml-52 mb-10">
        <p className="p-6 text-2xl">Error....</p>
      </section>
    );
  }

  if (loading || loadingAvailable) {
    return <Spinners />;
  }

  if (data) {
    console.log(data);
    data.getRestaurantByAdmin.forEach((el) => {
      localStorage.setItem("restaurantId", el._id);
      localStorage.setItem("restaurantName", el.name);
    });
  }

  return (
    <>
      {data.getRestaurantByAdmin.map((restaurant) => {
        return (
          <div
            key={restaurant._id}
            className="flex justify-center items-center min-h-screen bg-gray-200"
          >
            <div
              aria-details="card"
              className="relative flex w-[800px] transition-all duration-1000 ease-in-out h-96 overflow-hidden bg-white shadow-2xl"
            >
              <div
                aria-details="image"
                className="relative min-w-xm w-[300px] scale-50 h-full bg-white flex justify-center items-center"
              >
                <img
                  className="h-96 max-w-xs transition duration-300 ease-out hover:-rotate-12 hover:-translate-x-5"
                  src={restaurant.logoUrl}
                  alt="restaurant"
                />
              </div>
              <div
                aria-details="details"
                className="bg-yellow-200 relative min-w-sm h-full flex p-5 flex-col justify-center transition delay-700 ease-in-out"
              >
                <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
                  {restaurant.name}
                </h1>
                <h4 className="text-sm font-medium mt-2">
                  {restaurant.contactNumber}
                </h4>
                <p className="text-md font-normal text-left">
                  {restaurant.address}
                </p>
                <ul className="flex justify-around my-4">
                  <li className="p-2 rounded-md font-semibold">
                    {restaurant.cuisine[0]}
                  </li>
                  <li className="p-2 rounded-md font-semibold">
                    {restaurant.cuisine[1]}
                  </li>
                  <li className="p-2 rounded-md font-semibold">
                    {restaurant.cuisine[2]}
                  </li>
                </ul>
                <div className="flex justify-between items-center mt-4">
                  <select
                    name="available"
                    onChange={availableHandler}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option selected disabled>{restaurant.available === true ? "Available" : "Unvailable"}</option>
                    <option value={true}>Available</option>
                    <option value={false}>Unavailable</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
