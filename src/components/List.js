import React from "react";
import ExpenseItem from "./ItemForm";
const ExpenseList = ({ expenses, handleDelete, handleEdit, clearItems }) => {
	return (
		<>
			<ul className="">
				{expenses.map((expense) => {
					return (
						<ExpenseItem
							key={expense.id}
							expense={expense}
							handleDelete={handleDelete}
							handleEdit={handleEdit}
						/>
					);
				})}
			</ul>
			{expenses.length > 0 && (
				<button
					className="flex items-center bg-red-500 shadow-inner p-2 w-28 justify-center text-white rounded ml-auto mr-auto mt-5 font-bold"
					onClick={clearItems}
				>
					Delete All
				</button>
			)}
		</>
	);
};

export default ExpenseList;
