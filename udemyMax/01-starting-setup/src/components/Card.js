import './Card.css'
// Nasz "Card" będzie naszym wrapperem. Aby można było zawinąc inne komponenty w komponent, należy użyc funkcji props.children

function Card(props) { // Ten props nie jest żadnym przekazaniem argumentu do funkcji/komponentu, używamy go aby ustawić children
    const classes = 'card ' + props.className;
    return (
        <div className={classes}>{props.children}</div>
    )
}

export default Card