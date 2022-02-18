import './Card.css';

const Card = (props) => {
	const classes = 'card ' + props.className;
	// use props.children if want to create a wrapper component
	return <div className={classes}>{props.children}</div>
}

export default Card;