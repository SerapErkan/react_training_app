import React from "react";
import { useState, useEffect } from "react";

function Users() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
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
