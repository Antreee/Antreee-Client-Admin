export default function ProductTableRow({ item }) {
	return (
		<tr className="bg-white border-b">
			<td className="py-4 font-medium text-gray-900 whitespace-wrap">
				{item.name}
			</td>
			<td>
				{item.price.toLocaleString("id-ID", {
					style: "currency",
					currency: "IDR",
				})}
			</td>
			<td>{item.categoryItem}</td>
			<td className="flex justify-center">
				<img alt="" src={item.imageUrl} className="w-24" />
			</td>
			<td>{item.description}</td>

			<td className="flex justify-evenly">
				<div
					// to={`/products/${data.id}/edit`}
					href="#"
					className="text-yellow-400 hover:underline font-semibold text-sm"
				>
					Edit
				</div>
				<div
					href="#"
					// onClick={deleteData}
					className="pl-3 text-red-500 hover:underline font-semibold text-sm"
				>
					Delete
				</div>
			</td>
		</tr>
	);
}
