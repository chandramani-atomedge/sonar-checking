import React from "react";
import "./App.css";
import { useState,useEffect } from "react";
import moment from "moment-timezone";

function Myform() {
  //creating a state management
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    emailaddress: "",
    signinthrough: "",
    timezone: "",
    country: "",
  });
  
  const [errors,setErrors] = useState({});

  const [message, setMessage] = useState("");
  //Automatically fetch the timezone from the browser
  useEffect(() => {
    const timeZone = moment.tz.guess();
    setFormData((prevFormData) => ({
      ...prevFormData,
      timezone: timeZone,
    }));
  }, []);
//validating the input
  const validate = (values) => {
    const errors = {};
    if (!values.firstname) {
      errors.firstname = "Name is required";
    } else if (!/^[a-zA-Z0-9 ]*$/.test(values.name)) {
      errors.name = "Name can only contain letters and numbers";
    } else if (values.firstname.length < 2 || values.firstname.length > 20) {
      errors.firstname = "Name must be between 2 and 20 characters";
    }
    if (!values.lasttname) {
      errors.lasttname = "Name is required";
    } else if (!/^[a-zA-Z0-9 ]*$/.test(values.name)) {
      errors.name = "Name can only contain letters and numbers";
    }else if (values.lastname.length < 2 || values.lastname.length > 20) {
      errors.lastname = "Name must be between 2 and 20 characters";
    }
    if (!values.country) {
      errors.country = "Name is required";
    } else if (!/^[a-zA-Z0-9 ]*$/.test(values.name)) {
      errors.name = "Name can only contain letters and numbers";
    }else if (values.country.length < 2 || values.country.length > 30) {
      errors.country = "Name must be between 2 and 30 characters";
    }

    if (!values.email) {
      errors.email = "Email is required";
    } else if (!/^[a-zA-Z0-9@.]*$/.test(values.email)) {
      errors.email = "Email can only contain letters, numbers, @, and .";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "Invalid email address";
    }
    if (!values.gmail) {
      errors.gmail = "Email is required";
    } else if (!/^[a-zA-Z0-9@.]*$/.test(values.email)) {
      errors.gmail = "Email can only contain letters, numbers, @, and .";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.gmail = "Invalid email address";
    }
    return errors;
  };
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate(formData);
    setErrors(validationErrors)
    //Post the data from the input field to the table using API
      try {
        await fetch("http://localhost/user", {
          method: "POST",
          headers: { Accepts: "*", "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        })
          .then((response) => {
            return response.json();
          })
          .then((responseData) => {
            console.log("ResponseData:", responseData);
            setMessage(JSON.stringify(responseData)); //store the data in the response
          });
      } catch (error) {
        console.log(error);//catch the error
        alert(error)
      }
    
  };

  return (
    <form onSubmit={handleSubmit} className="body">
      <div className="App">
        <label>FirstName:</label>
        <input
          type="text"
          name="firstname"
          value={formData.firstname}
          placeholder="Firstname"
          onChange={handleChange}
        />
        {errors.firstname && <p>{errors.firstname}</p>}
      </div>
      <div className="App">
        <label>LastName:</label>
        <input
          type="text"
          name="lastname"
          value={formData.lastname}
          placeholder="Lastname"
          onChange={handleChange}
        />
        {errors.lastname && <p>{errors.lastname}</p>}
      </div>

      <div className="App">
        <label>EmailAddress:</label>
        <input
          type="email"
          name="emailaddress"
          value={formData.emailaddress}
          placeholder="Emailaddress"
          onChange={handleChange}
        />
        {errors.emailaddress && <p>{errors.emailaddress}</p>}
      </div>
      <div className="App">
        <label>Sign In Through:</label>
        <input
          type="text"
          name="signinthrough"
          value={formData.signinthrough}
          placeholder="Signinthrough"
          onChange={handleChange}
        />
        {errors.signinthrough && <p>{errors.signinthrough}</p>}
      </div>
      <div className="App">
        <label>TimeZone:</label>
        <input
          type="text"
          name="timezone"
          value={formData.timezone}
          placeholder="Timezone"
          onChange={handleChange}
        />
        {errors.timezone && <p>{errors.timezone}</p>}
      </div>
      <div className="App">
        <label>Country:</label>
        <input
          type="text"
          name="country"
          value={formData.country}
          placeholder="Country"
          onChange={handleChange}
        />
        {errors.country && <p>{errors.country}</p>}
      </div><br />
      <button type="submit" className="button">Submit</button>
      {/* Display the response from the table */}
      {message && <p>{message}</p>}
    </form>
  );
}

export default Myform;
