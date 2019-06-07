import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form";

const App = () => {
  const [users, setUsers] = useState([]);
  const [usersChanged, setUsersChanged] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3001/users")
      .then(x => x.json())
      .then(y => setUsers(y));
    setUsersChanged(false);
  }, [usersChanged]);

  return (
    <div className="App">
      <Form setUsersChanged={setUsersChanged} />
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
