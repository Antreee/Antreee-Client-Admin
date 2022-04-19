export default function ProductTableRow({ item, i }) {
  return (
    <tr className="bg-white border-b">
       <td className="py-4 font-medium text-gray-900 whitespace-wrap">
        {i}
      </td>
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
        <img alt="item" src={item.imageUrl} className="w-24" />
      </td>
      <td>{item.description}</td>

      <td className="">
        {/* <button
          // to={`/products/${data.id}/edit`}
          type="button"
          className="color-yellow hover:underline font-semibold px-3 py-2 text-white text-sm"
        >
          Edit
        </button> */}
        <button
          href="#"
          // onClick={deleteData}
          className="pl-3 text-red-600 hover:underline font-semibold text-sm"
        >
          Delete
        </button>
      </td>
    </tr>
  );
}
