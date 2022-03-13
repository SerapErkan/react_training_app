import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import User from "./User";

function Users() {
  const [users, setUser] = useState([]);

  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users")
    .then((res) =>setUser(res.data));

 
  }, []);

  return (
    <div>
      <h1>Users2</h1>

      {

      users.map((m) => (
    <ul key={m.id}>
          <li >
            <Link to={`/user/${m.id}`}> {m.name} </Link>
          </li>

          </ul>
      
      ))

  
      
      }
    </div>
  );
}

export default Users;
