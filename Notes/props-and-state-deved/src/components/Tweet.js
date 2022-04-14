const Tweet = (props) => {
    console.log(props.name)
    return (
        <section>
            <h3>Author: {props.name}</h3>
            <p>{props.message}</p>
        </section>
    );
}

export default Tweet;