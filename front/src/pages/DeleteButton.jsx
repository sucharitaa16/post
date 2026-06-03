import { MdDelete } from "react-icons/md";

function DeleteButton({ onDelete }) {
  return (
    <button
      onClick={onDelete}
      className="p-2 text-red-500 hover:text-red-700 hover:scale-110 transition duration-200"
    >
      <MdDelete size={22} />
    </button>
  );
}

export default DeleteButton;