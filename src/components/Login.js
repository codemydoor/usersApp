import React from "react";
import "../css/login.css";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logInWithEmail, loginWithGoogle } from "../store/authActions";

function Login(props) {
  if (!props.auth.isLoaded) return null;
  if (props.auth.uid) props.history.push("/");
  const submitForm = (e) => {
    e.preventDefault();
    let email = e.target.elements.email.value;
    let password = e.target.elements.password.value;
    props.logInWithEmail(email, password);
  };
  return (
    <div className="backgrounds">
      <h1 className="headers">Log In</h1>
      <form className="login_Formsss" onSubmit={submitForm}>
        <div className="inputFields">
          <input name="email" placeholder="login" type="email" id="inputs" />
          <input
            name="password"
            placeholder="password"
            type="password"
            autoComplete="true"
            id="inputs"
          />
        </div>
        <button type="submit" id="signInButtons">
          Login
        </button>
        <br />

        <button
          type="submit"
          id="googleButtons"
          onClick={props.loginWithGoogle}
        >
          Login WIth Google
        </button>
        <br />
        <button id="register">
          <Link
            style={{ color: "white", textDecoration: "none" }}
            to="/register"
          >
            Register
          </Link>
        </button>
      </form>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};
const mapDispatchToProps = {
  logInWithEmail,
  loginWithGoogle,
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
