import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form";

const App = () => {
  const [cities, setCities] = useState([]);
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [users, setUsers] = useState([]);
  const [usersChanged, setUsersChanged] = useState(false);
  const url = "http://localhost:3001";

  useEffect(() => {
    fetch(url + "/cities")
      .then(x => x.json())
      .then(data => {
        setCities(data);
      });
    fetch(url + "/countries")
      .then(x => x.json())
      .then(data => {
        setCountries(data);
      });
    fetch(url + "/states")
      .then(x => x.json())
      .then(data => {
        setStates(data);
      });
    fetch("http://localhost:3001/users")
      .then(x => x.json())
      .then(y => setUsers(y));
    setUsersChanged(false);
  }, [usersChanged]);

  return (
    <div className="App">
      <Form
        setUsersChanged={setUsersChanged}
        cities={cities}
        countries={countries}
        states={states}
      />
      <div>
        {users.map(item => {
          let created = new Date(item.createdAt);
          let country = countries.filter(x => {
            return x.id === item.country_id;
          });
          let state = states.filter(x => {
            return x.id === item.state_id;
          });
          let city = cities.filter(x => {
            return x.id === item.city_id;
          });
          return (
            <div key={item.id}>
              <p>{item.name}</p>
              <p>{item.email}</p>
              <p>{item.phone_number}</p>
              <p>{country.name}</p>
              <p>{state[0].name}</p>
              <p>{city[0].name}</p>
              <p>{created.toString()}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
