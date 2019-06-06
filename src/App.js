import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form";

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/users")
      .then(x => x.json())
      .then(y => setUsers(y));
  }, []);

  return (
    <div className="App">
      <Form />
      <div>
        {users.map(item => {
          return (
            <div>
              <p>{item.name}</p>
              <p>{item.email}</p>
              <p>{item.phone_number}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
