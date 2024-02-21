import React, { useReducer, useState } from 'react';
import './App.css';

const initialState = { username: "", age: "", college: "", email: "", password: "" };

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_USERNAME':
      return { ...state, username: action.payload };
    case 'SET_AGE':
      return { ...state, age: action.payload };
    case 'SET_COLLEGE':
      return { ...state, college: action.payload };
    case 'SET_EMAIL':
      return { ...state, email: action.payload };
    case 'SET_PASSWORD':
      return { ...state, password: action.payload };
    case 'RESET':
      return initialState;
    default:
      return state;
  }
};

const App = () => {
  const listItemStyle = {
    border: '1px solid', borderRadius: '5px', padding: '5px'
  };

  const [user, dispatch] = useReducer(reducer, initialState);
  const [userList, setUserList] = useState([]);
  const [errorMessages, setErrorMessages] = useState({ username: "", age: "", college: "", email: "", password: "" });

  const addUser = (e) => {
    e.preventDefault();
    if (!isFormValid()) {
      return;
    }
    if (user.age < 0) {
      setErrorMessages({ ...errorMessages, age: "Age cannot be negative" });
      return;
    }
    setUserList([...userList, user]); // Create a new array with the updated user list
    dispatch({ type: 'RESET' }); // Clear the input fields after adding the user
    setErrorMessages({ username: "", age: "", college: "", email: "", password: "" }); // Clear error messages if they were set previously
  };

  const isFormValid = () => {
    const errors = {};
    if (!user.username) {
      errors.username = "Username is required";
    }
    if (!user.age) {
      errors.age = "Age is required";
    }
    if (!user.college) {
      errors.college = "College is required";
    }
    if (!user.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(user.email)) {
      errors.email = "Email is invalid";
    }
    if (!user.password) {
      errors.password = "Password is required";
    }
    setErrorMessages(errors);
    return Object.keys(errors).length === 0;
  };

  return (
    <>
      <div className="container">
        <div className="row mt-3">
          <div className="col-md-8 m-auto">
            <div className="card">
              <form className="p-4" onSubmit={addUser}>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">Username</label>
                  <input type="text" value={user.username} onChange={(e) => dispatch({ type: 'SET_USERNAME', payload: e.target.value })} className="form-control shadow-none" />
                  {errorMessages.username && <div className="text-danger">{errorMessages.username}</div>}
                </div>
                <div className="mb-3">
                  <label htmlFor="college" className="form-label">College</label>
                  <input type="text" value={user.college} onChange={(e) => dispatch({ type: 'SET_COLLEGE', payload: e.target.value })} className="form-control shadow-none" />
                  {errorMessages.college && <div className="text-danger">{errorMessages.college}</div>}
                </div>
                <div className="mb-3">
                  <label htmlFor="age" className="form-label">Age (Years)</label>
                  <input type="number" value={user.age} onChange={(e) => dispatch({ type: 'SET_AGE', payload: e.target.value })} className="form-control shadow-none" />
                  {errorMessages.age && <div className="text-danger">{errorMessages.age}</div>}
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" value={user.email} onChange={(e) => dispatch({ type: 'SET_EMAIL', payload: e.target.value })} className="form-control shadow-none" />
                  {errorMessages.email && <div className="text-danger">{errorMessages.email}</div>}
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input type="password" value={user.password} onChange={(e) => dispatch({ type: 'SET_PASSWORD', payload: e.target.value })} className="form-control shadow-none" />
                  {errorMessages.password && <div className="text-danger">{errorMessages.password}</div>}
                </div>
                <button type="submit" className="btn btn-success">Add User</button>
              </form>
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-8 m-auto">
            <div className="card p-4">
              {userList?.map((ele, index) => {
                return (<div style={listItemStyle} key={index}>
                  <span>{ele.username}</span> <span>{ele.college}</span> <span>({ele.age} years old)</span> <span>{ele.email}</span>
                </div>)
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
