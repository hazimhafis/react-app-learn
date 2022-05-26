import React from 'react';
import { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
	const [isEditMode, setIsEditMode] = useState(false);
	const saveExpenseDataHandler = (enteredExpenseData) => {
		const expenseData = {
			...enteredExpenseData,
			id: Math.random().toString()
		};

		props.onAddExpense(expenseData);
		setIsEditMode(false);
	}
	
	const startEditingHandler = () => {
		setIsEditMode(true);
	};

	const stopEditingHandler = () => {
		setIsEditMode(false);
	}

	return (
		<div className="new-expense">
			{!isEditMode && <button onClick={startEditingHandler}>Add New Expense</button>}
			{isEditMode && (
				<ExpenseForm 
					onSaveExpenseData={saveExpenseDataHandler} 
					onCancel={stopEditingHandler}
				/>
			)}
		</div>
	);
}

export default NewExpense;