// import { Link } from "react-router-dom";

export default function TransactionTableRow({ order, i }) {
  return (
    <tr className="bg-white border-b">
      <td className="py-4 font-medium text-gray-900 whitespace-wrap">{i}</td>
      <td>{order._id}</td>
      <td>
        <span className="font-bold">{order.customerName} </span>
        {order.customerPhoneNumber} <br />
        Table: {order.tableNumber}
      </td>
      <td>
        {order.totalPrice&&order.totalPrice.toLocaleString("id-ID", {
          style: "currency",
          currency: "IDR",
        })}
      </td>
      <td>{order.status}</td>
    </tr>
  );
}
