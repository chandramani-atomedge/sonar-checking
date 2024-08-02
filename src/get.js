import React, { useEffect, useState } from "react";
import "./App.css";

const Get = () => {
  //Creating state management
  const [users, setUsers] = useState([]);
  const [edit, setEdit] = useState({
    id: "",
    firstname: "",
    lastname: "",
    emailaddress: "",
    signinthrough: "",
    timezone: "",
    country: "",
  });

 const[message,setMessage]=useState("")
 const[msg,setMsg]=useState("")
  
 useEffect(() => {
    fetchData();
  }, []);
// Fetch the data from the API
  const fetchData = () => {
    fetch("http://localhost/user").then((response) => {
      response.json().then((resp) => {
        console.log(resp);
        setUsers(resp);
      });
    });
  };
//select the existing data from the table
  const selectUser = (id) => {
    fetch(`http://localhost/user/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setEdit(data);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEdit((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
//Delete the existing  data in the table
  const deleteUser = (id) => {
    fetch(`http://localhost/user/${id}`, {
      method: "DELETE"
    })
      .then((response) => response.json())
      .then((data) => {
        setEdit(data);
        setMsg(JSON.stringify(data))
        fetchData(); // call the Get API
      });
  };
//Update the existing data in the table
  const updateUser = (e) => {
    e.preventDefault();
    fetch("http://localhost/user", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(edit),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setMessage(JSON.stringify(data))
        fetchData();// call the Get API
      });
  };

  return (
    <div className="container">
      <table border="1" className="user-table">
        <tbody>
          <tr>
            <td>ID</td>
            <td>Firstname</td>
            <td>LastName</td>
            <td>EmailAddress</td>
            <td>SigninThrough</td>
            <td>TimeZone</td>
            <td>Country</td>
          </tr>
          {/* Display the data in the table */}
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.firstname}</td>
              <td>{user.lastname}</td>
              <td>{user.emailaddress}</td>
              <td>{user.signinthrough}</td>
              <td>{user.timezone}</td>
              <td>{user.country}</td>
              <td>
                <button
                  className="select-button"
                  onClick={() => selectUser(user.id)}
                >
                  Select
                </button>
              </td>
              <td>
                <button
                  className="select-button"
                  onClick={() => deleteUser(user.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <form className="user-form" onSubmit={updateUser}>
          <div className="form-group">
            <label htmlFor="id">ID:</label>
            <input
              type="text"
              name="id"
              value={edit.id}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="firstname">Firstname:</label>
            <input
              type="text"
              name="firstname"
              value={edit.firstname}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastname">Lastname:</label>
            <input
              type="text"
              name="lastname"
              value={edit.lastname}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="emailaddress">Emailaddress:</label>
            <input
              type="email"
              name="emailaddress"
              value={edit.emailaddress}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="signinthrough">Signinthrough:</label>
            <input
              type="text"
              name="signinthrough"
              value={edit.signinthrough}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="timezone">Timezone:</label>
            <input
              type="text"
              name="timezone"
              value={edit.timezone}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="country">Country:</label>
            <input
              type="text"
              name="country"
              value={edit.country}
              onChange={handleChange}
            />
          </div>
          <br />
          <button className="update-button" type="submit">
            Update
          </button>
          {/* Display the delete response from API */}
          {msg && <p>{msg}</p>}
          {/* Display the update response from API */}
          {message && <p>{message}</p>}
        </form>
      </div>
    </div>
  );
};

export default Get;
