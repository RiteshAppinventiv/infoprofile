import "./AuthTop.css";
import AuthTopLeft from "./AuthTopLeft";
import AuthTopRight from "./AuthTopRight";

const AuthTop = () => {
    return (
        <div className="AuthTop">
            <AuthTopLeft/>
            <AuthTopRight/>
        </div>
    )
}

export default AuthTop