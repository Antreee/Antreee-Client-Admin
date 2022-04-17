// import { Link } from "react-router-dom";

export default function ProductTableRow() {
  return (
    <tr className="bg-white border-b">
      <td className="py-4 font-medium text-gray-900 whitespace-wrap"> test</td>
      <td>test</td>
      <td>test</td>
      <td>test</td>
      <td>test</td>
      {/* <td className="flex justify-center">
          <img src= className="w-24" />
        </td> */}
      <td>
        <div
          // to={`/products/${data.id}/images`}
          className="p-2 text-white bg-green-500 hover:bg-green-600 rounded text-xs w-fit h-fit"
        >
          Show images
        </div>
      </td>
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
