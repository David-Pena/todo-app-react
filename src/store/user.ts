import { IUser } from "../interfaces/user";

const setUser = (user: IUser) => {
  localStorage.setItem('todo-user-react', JSON.stringify(user));
};

const getUser = () : IUser => {
  const user = localStorage.getItem('todo-user-react');
  return user ? 
    (JSON.parse(user) as IUser) : {
      username: 'Unknown',
      password: 'xxxxxxx'
    }
};

const removeUser = () => {
  localStorage.removeItem('todo-user-react');
};

export {
  setUser,
  getUser,
  removeUser
}