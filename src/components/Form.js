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
    <div className="form">
      <input name="firstName" value={firstName} onChange={handleChange} />
      <input name="email" value={email} onChange={handleChange} />
      <select name="city" value={city} onChange={handleChange}>
        <option>--</option>
        {cities.map(item => {
          return (
            <option key={item.id} value={item.name}>
              {item.name}
            </option>
          );
        })}
      </select>
      <select name="country" value={country} onChange={handleChange}>
        <option>--</option>
        {countries.map(item => {
          return (
            <option key={item.id} value={item.name}>
              {item.name}
            </option>
          );
        })}
      </select>
      <select name="state" value={state} onChange={handleChange}>
        <option>--</option>
        {states.map(item => {
          return (
            <option key={item.id} value={item.name}>
              {item.name}
            </option>
          );
        })}
      </select>
      <input name="phone" value={phone} onChange={handleChange} />
      <input name="adress" value={adress} onChange={handleChange} />
      <textarea name="aboutMe" value={aboutMe} onChange={handleChange} />
    </div>
  );
};

export default Form;
