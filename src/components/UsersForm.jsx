import React, { PureComponent } from "react";
import "../css/form.css";

class UsersForm extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      gen: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    console.log(this.state.name);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      gen: this.state.gen,
    };
    this.props.addUser(newUser);
    this.setState({
      name: "",
      email: "",
      gen: "",
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form">
        <div className="form-input">
          <input
            placeholder="Name"
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </div>
        <br />
        <div className="form-input">
          <input
            placeholder="Email"
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
        </div>
        <br />
        <div className="form-input">
          <input
            placeholder="Gen"
            type="number"
            name="gen"
            value={this.state.gen}
            onChange={this.handleChange}
          />
        </div>
        <br />
        <button className="button" type="submit">
          Add User
        </button>
      </form>
    );
  }
}

export default UsersForm;
