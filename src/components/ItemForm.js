import React from "react";
import { MdEdit, MdDelete } from "react-icons/md";
// This componenet is the list that will show after the user hits save. it has an id to allow the user delete and edit the item.
const ExpenseItem = ({
	expense: { id, charge, amount },
	handleDelete,
	handleEdit,
}) => {
	return (
		<li className="flex justify-around mt-5 p-3 text-gray-600 rounded md:w-1/2 w-full ml-auto mr-auto bg-gray-200 shadow-inner items-center gap-5">
			<div className="info flex items-center gap-2">
				<span className="bg-gray-100" className="text-lg gap-1 flex flex-col">
					<p className="text-sm font-bold uppercase">Description</p>
					{charge}
				</span>
			</div>
			<span
				className="bg-gray-100"
				className="text-lg gap-1 flex flex-col mr-5"
			>
				<p className="text-sm font-bold uppercase">COST</p>${amount}
			</span>
			<div className="flex items-center text-lg gap-3">
				<button
					className="bg-green-500 p-2 rounded text-white"
					aria-label="edit button"
					onClick={() => handleEdit(id)}
				>
					<MdEdit />
				</button>
				<button
					className="bg-red-500 p-2 rounded text-white"
					aria-label="delete button"
					onClick={() => handleDelete(id)}
				>
					<MdDelete />
				</button>
			</div>
		</li>
	);
};

export default ExpenseItem;
