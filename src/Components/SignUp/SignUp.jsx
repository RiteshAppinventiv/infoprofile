import "./SignUp.css"
import email_ver from "./../../Assets/assets/icons/Email.svg"
import Phone_number from "./../../Assets/assets/icons/Phone_number.svg"
import Password from "./../../Assets/assets/icons/Password.svg"
import Show_pass from "./../../Assets/assets/icons/Show_pass.svg"
import React from 'react';



const SignUp = ({ setOpen }) => {
  const handleClickOpen = () => {
    setOpen(true);
  };
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
              <input type="text" placeholder="* Email" />
            </div>
          </div>
          <div className="input-div">
            <img src={Phone_number} alt="" />
            <div className="text-div">
              <input type="text" placeholder="* Phone Number" />
            </div>
          </div>
          <div className="input-div">
            <img className="blue" src={Password} alt="" />
            <div className="text-div">
              <input type="text" placeholder="* Password" />
            </div>
            <img className="blue Show_pass" src={Show_pass} alt="" />
          </div>
          <div></div>
          <div></div>
        </div>
        <div className="SignUp-main-3">
          <div>
            <input className="tnc" type="radio" />
            <label for="option1">By registering you are accepting <b>“Privacy Policy”</b> and <b>“Terms of Use”</b>.</label>
          </div>
        </div>
        <div className="SignUp-main-4" onClick={handleClickOpen}>
          <div>
            <div className="input-div signup-text-2">
              Sign Up
            </div>
          </div>
          <div className="login-div">
            <span>Already have an account? </span>
            <a className="blue login-ul" href="/">Log In</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp