import { GET_RESTAURANT_ADMIN } from "../config/queries";
import { useQuery } from "@apollo/client";

export default function ProfilePage() {
  const { loading, error, data } = useQuery(GET_RESTAURANT_ADMIN);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;
  
  return (
    <>
      {data.getRestaurantByAdmin.map((restaurant) => {
        return (
          <div className="container mx-auto mt-12 mb-40 space-y-12">
            <div className="max-w-xl rounded-lg shadow-md lg:flex md:flex shadow-sky-600 ml-72">
              {/* <img
            className="object-cover w-full md:w-1/2 lg:w-1/3"
            src="https://cdn.pixabay.com/photo/2016/12/19/18/21/snowflake-1918794__340.jpg"
            alt="image"
          /> */}
              <div className="px-6 py-4">
                <h4 className="mb-3 text-base font-semibold tracking-tight text-sky-600">
                  {restaurant.name}
                </h4>
                <p className="mb-2 text-sm leading-normal text-justify text-sky-900">
                  Adress :
                </p>
                <p className="mb-2 text-sm leading-normal text-justify text-sky-900">
                  Contact Number :
                </p>
                <div className="flex justify-center">
                  <div className="mb-3">
                    <select className="form-select block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none">
                      <option value="1">Available</option>
                      <option value="2">Unvailable</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
