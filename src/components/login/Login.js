import React from "react";
import { useRef } from "react";
import classes from "./Form.module.css";

function Form() {
  const usernameInputRef = useRef();
  const pwInputRef = useRef();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const enteredUser = usernameInputRef.current.value; //we can extract what the user entered
    const enteredPw = pwInputRef.current.value;

    const signupData = {
      username: enteredUser,
      pw: enteredPw,
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

                <div className={classes.forgot}>
                  <a href="#">
                    <div className={classes.pwd}>Forgot password?</div>
                  </a>
                </div>

                <div className={classes.button}>
                  <button className={classes.btn} type="submit" id="btn">
                    LogIN
                  </button>
                </div>

                <div className={classes.sign}>
                  <p className={classes.p}> Don't have an account?</p>
                  <a className={classes.a} href="/signup">
                    <a className={classes.link}>Sign UP</a>
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

export default Form;
