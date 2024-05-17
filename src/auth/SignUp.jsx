import React from "react";
import "./SignUp.scss";
import signupImage from "../assets/svg/register.svg";
import { Link } from "react-router-dom";

function SignUp() {
  return (

    <section>
      <div className="singup-container">
        <div className="signup-image">
          <img src={signupImage} alt="" />
        </div>
        <form className="register">
          <div className="register-text">
            <h1>Create an account</h1>
            <p>Enter your details below</p>
          </div>
          <div className="input-content">  
          <div className="inputs">
           
            <input placeholder="Name" type="text" />

            <input placeholder="Email or Phone Number" type="text" />

            <input placeholder="Password" type="text" />
          </div>
          <div className="buttons">
            <button>Create Account</button>
            <button>Sign up with Google</button>
            <div className="tegister-text-content">
              <p>Already have account?</p>
              <Link>Login</Link>
            </div>

          </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default SignUp;
