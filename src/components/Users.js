import React, { useEffect, useState, useContext } from "react";
import { FormContext } from "../FormContext";

const Users = ({ cities, countries, states, users }) => {
  const [usersChanged, setUsersChanged] = useContext(FormContext);
  const [newUsers, setNewUsers] = useState([]);

  const fetchData = async () => {
    await fetch("http://localhost:3001/users")
      .then(x => x.json())
      .then(y => setNewUsers(y))
      .catch(err => console.log(err));
  };

  useEffect(() => {
    if (usersChanged === false) {
      setNewUsers(users);
    } else {
      fetchData();
      setUsersChanged(false);
    }
  }, [setUsersChanged, users, usersChanged]);

  return (
    <div>
      {newUsers.map(item => {
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
          <div key={item.id} className="user">
            <div className="user-info">
              <p>Name:</p>
              <p>{item.name}</p>
            </div>
            <div className="user-info">
              <p>E-Mail:</p>
              <p>{item.email}</p>
            </div>
            <div className="user-info">
              <p>Phone Number:</p>
              <p>{item.phone_number}</p>
            </div>
            <div className="user-info">
              <p>Country:</p>
              <p>{country[0].name}</p>
            </div>
            <div className="user-info">
              <p>State:</p>
              <p>{state[0].name}</p>
            </div>
            <div className="user-info">
              <p>City:</p>
              <p>{city[0].name}</p>
            </div>
            <div className="user-info">
              <p>Created:</p>
              <p>{created.toString()}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Users;
