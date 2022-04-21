export default function TransactionTableRow({ order, i }) {
  const statusColor = (order) => {
    if (order === "Unpaid") return "red";
    if (order === "PAID") return "blue";
  };

  return (
    <tr>
      <td className="py-4 font-medium text-gray-900 whitespace-wrap">{i}</td>
      <td>{order._id}</td>
      <td>
        <span className="font-bold">{order.customerName} </span>
        {order.customerPhoneNumber} <br />
        Table: {order.tableNumber}
      </td>
      <td>
        {order.totalPrice &&
          order.totalPrice.toLocaleString("id-ID", {
            style: "currency",
            currency: "IDR",
          })}
      </td>
      <td>
        <button
          className="font-semibold"
          style={{ color: statusColor(order.status) }}
        >
          {order.status}
        </button>
      </td>
    </tr>
  );
}
