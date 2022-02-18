import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card';
import './Expenses.css';

const Expenses = (props) => {
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
		<Card className="expenses">
			{listItems}
		</Card>
	)

}

export default Expenses;