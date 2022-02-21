import { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';

const Expenses = (props) => {
	const expenses = props.items;
	const [filteredYear, setFilteredYear] = useState('2020');

	const filterChangeHandler = selectedYear => {
		setFilteredYear(selectedYear);
	};
	
	// iterate through each object
	const listItems = expenses.map((item) => {
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
				{listItems}
			</Card>
		</div>
	);
};

export default Expenses;