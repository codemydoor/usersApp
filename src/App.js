import "./App.css";
import React, { Component } from "react";
import { connect } from "react-redux";
import { addUser, deleteUser, getAllUsers } from "./store/usersActions";
import { logout } from "./store/authActions";
import UsersForm from "./components/UsersForm";
import UserInfo from "./components/UserInfo";
export class App extends Component {
  addNewUser = (newUser) => {
    this.props.addUser(newUser);
  };

  deleteUser = (user_id) => {
    this.props.deleteUser(user_id);
  };
  componentDidMount = () => {
    this.props.getAllUsers();
  };
  render() {
    return (
      <div className="App">
        <button onClick={this.props.logout}>Logout</button>
        <UsersForm addUser={this.addNewUser} />

        <div className="App__User-info"></div>
        {this.props.users.map((user, index) => {
          return (
            <UserInfo
              key={user.id}
              id={user.id}
              name={user.name}
              email={user.email}
              gen={user.gen}
              removeUser={this.deleteUser}
            />
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.usersState.users,
});

const mapDispatchToProps = {
  addUser: addUser,
  deleteUser: deleteUser,
  getAllUsers: getAllUsers,
  logout: logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
