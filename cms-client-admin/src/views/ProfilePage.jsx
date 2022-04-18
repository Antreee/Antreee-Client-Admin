import { GET_RESTAURANT_ADMIN } from "../config/queries";
import { useQuery } from "@apollo/client";

export default function ProfilePage() {
	const { loading, error, data } = useQuery(GET_RESTAURANT_ADMIN);
	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error!</p>;

	if (data) {
		data.getRestaurantByAdmin.map((el) =>
			localStorage.setItem("restaurantId", el._id)
		);
	}

	return (
		<>
			{data.getRestaurantByAdmin.map((restaurant) => {
				return (
					<div className="flex flex-wrap" key={restaurant._id}>
						<div className="w-full lg:w-4/12 px-4 ml-52">
							<div className="relative flex flex-col min-w-0 break-words bg-white ml-52 w-full mb-6 shadow-xl rounded-lg mt-16 pb-5">
								<div className="px-6">
									<div className="text-center mt-6">
										<div className="w-full px-4 flex justify-center">
											<div className="relative">
												<img
													alt="..."
													src={restaurant.logoUrl}
													className="h-56 "
												/>
											</div>
										</div>
										<h3 className="text-xl font-semibold leading-normal text-blueGray-700 mb-2 pt-5">
											{restaurant.name}
										</h3>
										<div className="flex flex-wrap justify-center">
											<div className="w-full px-4 text-center">
												<div className="flex justify-center py-4 lg:pt-4 pt-8">
													<div className="mr-4 p-3 text-center">
														<span className="text-sm font-bold block  tracking-wide text-blueGray-600">
															{restaurant.cuisine[0]}
														</span>
													</div>
													<div className="mr-4 p-3 text-center">
														<span className="text-sm font-bold block  tracking-wide text-blueGray-600">
															{restaurant.cuisine[1]}
														</span>
													</div>
													<div className="lg:mr-4 p-3 text-center">
														<span className="text-sm font-bold block  tracking-wide text-blueGray-600">
															{restaurant.cuisine[2]}
														</span>
													</div>
												</div>
											</div>
										</div>
										<div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
											<i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>{" "}
											{restaurant.contactNumber}
										</div>
										<div className="mb-2 text-blueGray-600 mt-10">
											<i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
											{restaurant.address}
										</div>
										<label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"></label>
										<select
											name="availablity"
											value={restaurant.availablity}
											className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
										>
											<option value="available">Available</option>
											<option value="unavailable">Unavailable</option>
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
