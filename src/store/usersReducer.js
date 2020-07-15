import { v4 as uuid } from "uuid";

const initialState = {
  users: [
    {
      id: "1",
      name: "Dennis Selorm",
      email: "dennis@gmail.com",
      gen: 3,
    },
    {
      id: "2",
      name: "Edmund Ray",
      email: "edmund@gmail.com",
      gen: 5,
    },
    {
      id: "3",
      name: "Duke Sellasie",
      email: "dukukid@gmail.com",
      gen: 9,
    },
  ],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_USER":
      const newUser = {
        id: uuid(),
        name: action.payload.name,
        email: action.payload.email,
        gen: action.payload.gen,
      };

      return { ...state, users: [...state.users, newUser] };
    case "DELETE_USER":
      const filteredUsers = state.users.filter(
        (user) => user.id !== action.payload
      );
      return { ...state, users: filteredUsers };

    case "EDIT_USER":
      const updatedUserInfo = state.users.map((user) => {
        if (user.id === action.user_id) {
          return { ...user, ...action.updated_Info };
        } else {
          return user;
        }
      });
      return { ...state, users: updatedUserInfo };
    default:
      return state;
  }
};

export default userReducer;
