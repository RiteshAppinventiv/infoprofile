import AuthButtom from "../AuthButtom/AuthButtom"
import AuthMiddle from "../AuthMiddle/AuthMiddle"
import AuthTop from "../AuthTop/AuthTop"
import "./Authentication.css"
const Authentication = () => {
    return (
        <div className="authentication">
            <AuthTop />
            <AuthMiddle />
            <AuthButtom />
        </div>
    )
}

export default Authentication