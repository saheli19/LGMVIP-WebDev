
import React, { useState } from "react";
import './App.css';
import * as ReactBootStrap from "react-bootstrap";
function App() {
  const [users, setUser] = useState();
  const [loading, setLoading] = useState(false);

  const loadUsers = async () => {
    console.log('before');
    const response = await fetch("https://reqres.in/api/users?page=1");
    const data = await response.json();
    setLoading(true);
    setUser(data.data);
  };
  return (
    <>
      <nav className="navbar">
        <div className="navitems">
          <h1>LetsGrowMore</h1>
          <button className="btn" onClick={loadUsers}>Get Users</button>
        </div>
      </nav>
      <ReactBootStrap.Spinner animation="border" />
      <div className="rows" id="row">
        {users?.map((id,login)=>{
          return (
            <div className="column" key={login}>
              <img src={id.avatar} className="card-image" alt="Person"></img>
              <div className="body">
                <h2 className="title">
                  {id.first_name} {id.last_name}
                </h2>
                <h3 className="text">{id.email}</h3>
              </div>
            </div>
          )
        })}
      </div>
    </>
  );

}

export default App;

