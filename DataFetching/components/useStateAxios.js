import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

function Users() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    
    axios("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .catch((e) => console.log(e))
      .finally(() => setIsLoading(false));
    
  }, []);

  return (
    <>
      {isLoading && <h1> Loading... </h1>}

      {users.map((m) => (
        <li key={m.id}>{m.name}</li>
      ))}
    </>
  );
}

export default Users;

//Axios performs automatic transforms of JSON data.
//npm install axios
