import "./SignUp.css"
import email_ver from "./../../Assets/assets/icons/Email.svg"
const SignUp = () => {
  return (
    <div className="SignUp-main">
      <div className="SignUp-submain">
        <div className="SignUp-main-1">
          <span className="SignUp-text blue">
            Sign Up
          </span>
          <p>Enter email address, phone number and password to register yourself as a new user.</p>
        </div>
        <div className="SignUp-main-2">
          <div className="input-div">
            <img className="blue" src={email_ver} alt="" />
            <div className="text-div">
              <input type="text" placeholder="Email" />
            </div>
          </div>
          <div></div>
          <div></div>
        </div>
        <div className="SignUp-main-3"></div>
      </div>
    </div>
  )
}

export default SignUp