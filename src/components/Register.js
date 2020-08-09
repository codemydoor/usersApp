import React from "react";
import "../css/register.css";
import { connect } from "react-redux";
import { registerWithEmail, loginWithGoogle } from "../store/authActions";

function Register(props) {
  if (!props.auth.isLoaded) return null;
  if (props.auth.uid) props.history.push("/");
  const submitForm = (e) => {
    e.preventDefault();
    let email = e.target.elements.email.value;
    let password = e.target.elements.password.value;
    props.registerWithEmail(email, password);
  };
  return (
    <div>
      <h1>Register Now</h1>
      <form className="registration_Form" onSubmit={submitForm}>
        <div>
          <label>Email</label>
          <input name="email" placeholder="login" type="email" />
        </div>
        <div>
          <label>password</label>
          <input
            name="password"
            placeholder="password"
            type="password"
            autoComplete="true"
          />
        </div>
        <button type="submit">Submit</button>

        <button type="submit" onClick={props.loginWithGoogle}>
          Login WIth Google
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
  registerWithEmail,
  loginWithGoogle,
};
export default connect(mapStateToProps, mapDispatchToProps)(Register);
