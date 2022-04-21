// import { Link } from "react-router-dom";

export default function BookingTableRow({ book, i }) {
  return (
    <tr className="bg-white border-b">
      <td className="py-4 font-medium text-gray-900 whitespace-wrap">{i}</td>
      <td>{book._id}</td>
      <td>
        {book.customerName} {book.customerPhoneNumber} <br/>
        number of people: {book.numberOfPeople}
      </td>
      <td>{book.bookingDate}</td>
      <td className="font-semibold">{book.status}</td>
    </tr>
  );
}
