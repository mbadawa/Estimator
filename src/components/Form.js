import React from "react";
// This componenet is the form of the application that allows users to enter their expenses and the cost.
const ExpenseForm = ({
	charge,
	amount,
	handleCharge,
	handleAmount,
	handleSubmit,
	edit,
}) => {
	return (
		<form className="flex justify-center" onSubmit={handleSubmit}>
			<div className="md:flex md:items-center grid grid-rows-2 gap-3">
				<div className="flex flex-col gap-2">
					<label htmlFor="expense">Description</label>
					<input
						type="text"
						className="border bg-gray-200 p-2 rounded focus:outline-none"
						id="expense"
						name="charge"
						value={charge}
						onChange={handleCharge}
					/>
				</div>
				<div className="flex flex-col gap-2">
					<label htmlFor="amount">Cost</label>
					<span className="flex items-center gap-3">
						<input
							type="number"
							className="border bg-gray-200 p-2 rounded focus:outline-none "
							id="amount"
							name="amount"
							value={amount}
							onChange={handleAmount}
						/>
						<button
							type="submit"
							className="flex items-center gap-2 bg-gray-600 p-2 rounded text-white w-28 justify-center"
						>
							{edit ? "Save" : "Save"}
						</button>
						<button className="bg-green-600 p-2 rounded text-white">
							Create New Estimate
						</button>
					</span>
				</div>
			</div>
		</form>
	);
};

export default ExpenseForm;
