const setUser = (user) => {
  localStorage.setItem('todo-user-react', JSON.stringify(user));
};

const getUser = () => {
  return localStorage.getItem('todo-user-react') ? 
    JSON.parse(localStorage.getItem('todo-user-react')) : 'Unknown'
};

const removeUser = () => {
  localStorage.removeItem('todo-user-react');
};

export {
  setUser,
  getUser,
  removeUser
}