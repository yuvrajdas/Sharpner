import { useState } from 'react';
import './App.css';

const App = () => {
  const listItemStyle = {
    border: '1px solid', borderRadius: '5px', padding: '5px'
  };

  const [user, setUser] = useState({ username: "", age: "", college:"" });
  const [userList, setUserList] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const addUser = (e) => {
    e.preventDefault();
    if (!isFormValid()) {
      return;
    }
    if (user.age < 0) {
      setErrorMessage("Age cannot be negative");
      return;
    }
    setUserList([...userList, user]); // Create a new array with the updated user list
    setUser({ username: "", age: "" }); // Clear the input fields after adding the user
    setErrorMessage(""); // Clear error message if it was set previously
  }

  const isFormValid = () => {
    return (user.username !== "" && user.age !== "" && user.college !== "");
  }

  return (
    <>
      <div className="container">
        <div className="row mt-3">
          <div className="col-md-8 m-auto">
            <div className="card">
              <form className="p-4" onSubmit={addUser}>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">Username</label>
                  <input type="text" value={user.username} onChange={(e) => setUser({ ...user, username: e.target.value })} className="form-control shadow-none" />
                </div>
                <div className="mb-3">
                  <label htmlFor="college" className="form-label">College</label>
                  <input type="text" value={user.college} onChange={(e) => setUser({ ...user, college: e.target.value })} className="form-control shadow-none" />
                </div>
                <div className="mb-3">
                  <label htmlFor="age" className="form-label">Age (Years)</label>
                  <input type="number" value={user.age} onChange={(e) => setUser({ ...user, age: e.target.value })} className="form-control shadow-none" />
                </div>
                <button type="submit" className="btn btn-success">Add User</button>
                {errorMessage && <div className="text-danger mt-2">{errorMessage}</div>}
              </form>
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-8 m-auto">
            <div className="card p-4">
              {userList?.map((ele, index) => {
                return (<div style={listItemStyle} key={index}>
                  <span>{ele.username}</span> <span>{ele.college}</span> <span>({ele.age} years old)</span>
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
