import ExpenseItem from "./ExpenseItem";
import './Expenses.css';

function Expenses(props) {
	const expenses = props.items
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
		<div className="expenses">
			{listItems}
		</div>
	)

}

export default Expenses;