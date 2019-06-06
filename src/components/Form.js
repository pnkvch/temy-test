import React, { useEffect, useState } from "react";

const Form = () => {
  const [cities, setCities] = useState([]);
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [adress, setAdress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [aboutMe, setAboutMe] = useState("");
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
  }, []);

  const handleChange = e => {
    switch (e.target.name) {
      case "firstName":
        return setFirstName(e.target.value);
      case "email":
        return setEmail(e.target.value);
      case "phone":
        return setPhone(e.target.value);
      case "adress":
        return setAdress(e.target.value);
      case "city":
        return setCity(e.target.value);
      case "country":
        return setCountry(e.target.value);
      case "state":
        return setState(e.target.value);
      case "aboutMe":
        return setAboutMe(e.target.value);
      default:
        return console.log("Doesn't exist");
    }
  };

  return (
    <form className="form">
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
            <option key={item.id} value={item.name}>
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
            <option key={item.id} value={item.name}>
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
            <option key={item.id} value={item.name}>
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
        required
        placeholder="Adress"
        name="adress"
        value={adress}
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
