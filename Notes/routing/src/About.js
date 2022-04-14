import { useNavigate, useParams } from "react-router-dom";

const About = () => {
    const navigate = useNavigate();
    const backToHome = () => navigate('/');
    const { id } = useParams();
    console.log(id);

    return (
        <>
            <h2>About</h2>
            <button onClick={backToHome}>Back to Home</button>
        </>


    );
}

export default About;