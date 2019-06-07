import React, { useState } from "react";

const Form = ({ setUsersChanged, cities, countries, states }) => {
  const initialState = {
    firstName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    country: "",
    state: "",
    aboutMe: ""
  };

  const [
    { firstName, email, phone, address, city, country, state, aboutMe },
    setState
  ] = useState(initialState);

  const clearState = () => {
    setState({ ...initialState });
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setState(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();

    const data = {
      name: firstName,
      email: email,
      phone_number: phone,
      address: address === "" ? null : address,
      about_me: aboutMe === "" ? null : aboutMe,
      country_id: country,
      state_id: state,
      city_id: city
    };

    fetch("http://localhost:3001/users", {
      method: "post",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(data)
    });
    clearState();
    setUsersChanged(true);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <p>First Name *</p>
      <input
        type="text"
        placeholder="First Name"
        required
        pattern="[a-zA-Z]+"
        name="firstName"
        value={firstName}
        onChange={handleChange}
      />
      <p>E-Mail Adress</p>
      <input
        placeholder="E-Mail"
        type="email"
        required
        name="email"
        value={email}
        onChange={handleChange}
      />
      <p>Country</p>
      <select name="country" value={country} onChange={handleChange} required>
        <option hidden>-- select an option --</option>
        {countries.map(item => {
          return (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          );
        })}
      </select>
      <select
        name="state"
        required
        value={state}
        onChange={handleChange}
        style={country === "" ? { display: "none" } : { display: "block" }}
      >
        <option hidden>-- select an option --</option>
        {states.map(item => {
          return (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          );
        })}
      </select>
      <select
        name="city"
        required
        value={city}
        onChange={handleChange}
        style={state === "" ? { display: "none" } : { display: "block" }}
      >
        <option hidden>-- select an option --</option>
        {cities.map(item => {
          return (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          );
        })}
      </select>
      <p>Phone Number</p>
      <input
        required
        pattern="\d+"
        placeholder="Phone Number"
        name="phone"
        value={phone}
        onChange={handleChange}
      />
      <p>Adress</p>
      <input
        placeholder="Address"
        name="address"
        value={address}
        onChange={handleChange}
      />
      <p>About Me</p>
      <textarea
        placeholder="About Me"
        name="aboutMe"
        maxLength="500"
        value={aboutMe}
        onChange={handleChange}
      />
      <button>Submit</button>
    </form>
  );
};

export default Form;
