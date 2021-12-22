import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import ExpenseList from "./components/List";
import Alert from "./components/Alert";
import uuid from "react-uuid";

const initialExpenses = localStorage.getItem("expenses")
	? JSON.parse(localStorage.getItem("expenses"))
	: [];
function App() {
	// all expenses, add expense
	const [expenses, setExpenses] = useState(initialExpenses);
	// single expense
	const [charge, setCharge] = useState("");
	// single amount
	const [amount, setAmount] = useState("");
	// alert
	const [alert, setAlert] = useState({ show: false });
	// edit
	const [edit, setEdit] = useState(false);
	// create new estimate
	const [newEstimate, setNewEstimate] = useState();
	// id
	const [id, setId] = useState(0);

	useEffect(() => {
		console.log("called");

		localStorage.setItem("expenses", JSON.stringify(expenses));
	}, [expenses]);
	// All the functions of the project
	//add charge
	const handleCharge = (e) => {
		setCharge(e.target.value);
	};
	// add amount
	const handleAmount = (e) => {
		let amount = e.target.value;
		if (amount === "") {
			setAmount(amount);
		} else {
			setAmount(parseInt(amount));
		}
	};

	// handle alert
	const handleAlert = ({ type, text }) => {
		setAlert({ show: true, type, text });
		setTimeout(() => {
			setAlert({ show: false });
		}, 7000);
	};
	// handle submit
	const handleSubmit = (e) => {
		e.preventDefault();
		if (charge !== "" && amount > 0) {
			if (edit) {
				let tempExpenses = expenses.map((item) => {
					return item.id === id ? { ...item, charge, amount } : item;
				});
				setExpenses(tempExpenses);
				setEdit(false);
			} else {
				const singleExpense = { id: uuid(), charge, amount };
				setExpenses([...expenses, singleExpense]);
				handleAlert({ type: "success", text: "item added" });
			}
			// set charge back to empty string
			setCharge("");
			// set amount back to zero
			setAmount("");
		} else {
			handleAlert({
				type: "danger",
				text: `charge can't be empty value and amount value has to be bigger than zero`,
			});
		}
	};
	// handle delete
	const handleDelete = (id) => {
		let tempExpenses = expenses.filter((item) => item.id !== id);
		setExpenses(tempExpenses);
		handleAlert({ type: "danger", text: "item deleted" });
	};
	//clear all items
	const clearItems = () => {
		setExpenses([]);
	};
	// handle edit
	const handleEdit = (id) => {
		let expense = expenses.find((item) => item.id === id);
		let { charge, amount } = expense;
		setCharge(charge);
		setAmount(amount);
		setEdit(true);
		setId(id);
	};
	return (
		<>
			<main className="bg-gray-100 h-screen w-screen flex flex-col pt-5">
				<div className="md:ml-0 md:mr-0 ml-5 mr-5">
					<img
						src="https://static.wixstatic.com/media/2d682a_8c4bd12801b74afc94bafcb34b33385c~mv2.png/v1/fill/w_366,h_190,al_c,q_85,usm_0.66_1.00_0.01/MCIMbyFulcrum%2520Logo_edited.webp"
						width={125}
						className="md:ml-20 mb-5"
					></img>
					<div className="bg-gradient-to-r from-indigo-500 to-sky-500  container  ml-auto mr-auto w-full p-5 rounded text-white">
						<h1>
							<p className="uppercase text-sm font-bold">Total Cost</p>
							<span className="text-2xl font-bold">
								$
								{expenses.reduce((acc, curr) => {
									return (acc += curr.amount);
								}, 0)}
							</span>
						</h1>
					</div>
					<div className="w-full bg-white shadow-lg pt-5 pl-5 pr-5 pb-10 rounded container  ml-auto mr-auto">
						<Form
							handleSubmit={handleSubmit}
							charge={charge}
							handleCharge={handleCharge}
							amount={amount}
							handleAmount={handleAmount}
							edit={edit}
							newEstimate={newEstimate}
						/>

						<ExpenseList
							expenses={expenses}
							handleDelete={handleDelete}
							handleEdit={handleEdit}
							clearItems={clearItems}
						/>
						<p className="text-center text-lg mt-5">
							{" "}
							{alert.show && <Alert type={alert.type} text={alert.text} />}
						</p>
					</div>
				</div>
			</main>
		</>
	);
}

export default App;
