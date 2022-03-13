import React from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

function User() {
  const { id } = useParams();
  const [user, setuser] = useState({});

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => setuser(res.data))
      .finally(() => setLoading(false));
  }, [id]);

  return (
    <div>
      <h1>User Detail </h1>

      {loading && <h1>loading....</h1>}
      {!loading && (
        <div>
          {" "}
          <h3>ID: {id}</h3>
          <code>{JSON.stringify(user)}</code>
        </div>
      )}
      <Link to={`/user/${parseInt(id) + 1}`}>NEXT USER {parseInt(id)+1} </Link>
    </div>
  );
}

export default User;

//NOT :
//parseInt:The parseInt() function parses a string argument and returns an integer of the specified radix ( mathematical numeral systems).
// We can use the `useParams` hook here to access
 
  //let { id } = useParams();
  // <h3>ID: {id}</h3>

/*
 path="/:id" 


<Switch>
<Route path="/:id" children={<Child />} />
</Switch>

*/