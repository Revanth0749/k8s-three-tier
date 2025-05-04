import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");

  // Fetch users from backend
  useEffect(() => {
    fetch("http://localhost:5000/api/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  // Handle user addition
  const addUser = () => {
    if (name) {
      fetch("http://localhost:5000/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name }),
      })
        .then((response) => response.json())
        .then((newUser) => setUsers([...users, newUser]));
      setName(""); // Clear input field
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>React User Management App</h1>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter user name"
        />
        <button onClick={addUser}>Add User</button>

        <ul>
          {users.map((user) => (
            <li key={user._id}>{user.name}</li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
