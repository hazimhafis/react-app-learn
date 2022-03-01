import { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';

const Expenses = (props) => {
	const expenses = props.items;
	const [filteredYear, setFilteredYear] = useState('2020');
	let filteredExpenses = [];

	const filterChangeHandler = selectedYear => {
		setFilteredYear(selectedYear);
	};

	filteredExpenses = expenses.filter((expense) => {
		return expense.date.getFullYear() === Number(filteredYear);
	})

	console.log(filteredExpenses);

	// iterate through each object
	const listItems = filteredExpenses.map((item) => {
		return (
			<ExpenseItem
				key={item.id}
				title={item.title}
				amount={item.amount}
				date={item.date}
			/>
		)
	});

	return (
		<div>
			<Card className='expenses'>
				<ExpensesFilter
					selected={filteredYear}
					onChangeFilter={filterChangeHandler}
				/>
				{/* another method of outputting list of items */}
				{/* {props.items.map((expense) => (
					<ExpenseItem
						key={expense.id}
						title={expense.title}
						amount={expense.amount}
						date={expense.date}
					/>
				))} */}
				{listItems}
			</Card>
		</div>
	);
};

export default Expenses;