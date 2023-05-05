import React from "react";
import { useRef } from "react";
import classes from "./Sign.module.css";

function FormSign() {
  const usernameInputRef = useRef();
  const pwInputRef = useRef();
  const emailRef = useRef();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const enteredUser = usernameInputRef.current.value; //we can extract what the user entered
    const enteredPw = pwInputRef.current.value;
    const enterEmail = emailRef.current.value;

    const signupData = {
      username: enteredUser,
      pw: enteredPw,
      email: enterEmail,
    };

    console.log(signupData);
  };

  return (
    <div>
      <main>
        <div>
          <div>
            <div className={classes.title}>
              <span className=""></span>
            </div>
            <div className={classes.container}>
              <form className={classes.form} onSubmit={handleSubmit}>
                <div className={classes.field}>
                  <label className={classes.label}>Username</label>
                  <input
                    type="text"
                    id="username"
                    className={classes.input}
                    placeholder=""
                    ref={usernameInputRef}
                    required
                  />
                </div>

                <div className={classes.field}>
                  <label className={classes.label}>Password</label>
                  <input
                    type="password"
                    id="pw"
                    className={classes.input}
                    placeholder=""
                    ref={pwInputRef}
                    required
                  />
                </div>

                <div className={classes.field}>
                  <label className={classes.label1}>Email </label>
                  <input
                    type="email"
                    id="email"
                    className={classes.input}
                    placeholder=""
                    ref={emailRef}
                    required
                  />
                </div>

                <div className={classes.forgot}>
                  {/* <a href="#">
                    <div className={classes.pwd}>Forgot password?</div>
                  </a> */}
                </div>

                <div className={classes.button}>
                  <button className={classes.btn} type="submit" id="btn">
                    SignUp
                  </button>
                </div>

                <div className={classes.sign}>
                  <p className={classes.p}> Already have an account?</p>
                  <a className={classes.a} href="/login">
                    <a className={classes.link}>LogIn</a>
                  </a>
                </div>
              </form>
              <div className={classes.welcome}>
                <h1 className={classes.musx}>Welcome to MusX</h1>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default FormSign;
