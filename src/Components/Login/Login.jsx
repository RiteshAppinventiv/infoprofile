import "./Login.css"
import { useNavigate } from "react-router-dom";
const Login = () => {
    let navigate = useNavigate();

    const clickHere = () => {
        navigate("/home");
    }
    return (
        <div>
            Login
            <nav>
                <ul>
                    <li>
                        <a href={`/asas`}>Your Name</a>
                    </li>
                    <li>
                        <a href={`/signup`}>Your Friend</a>
                    </li>
                    <button onClick={() => clickHere()}>Click Here</button>
                </ul>
            </nav>
        </div>
    )
}

export default Login