import React from "react";
import { useState,useEffect } from "react";

import List from "../List";
import Form from "../Form";

import "./styles.css";

function Contacts() {
  const [contacts, setContacts] = useState([
    {
      fullname:'mehmet',number:'123456'
    },{
      fullname:'ahmet',number:'456123'
    },{
      fullname:'talha',number:'963852'
    }
  ]);

useEffect(()=>{
  // console.log(contacts);

},[contacts]);
  return (
    <>
      <List contacts={contacts}/>
      <Form addContacts={setContacts} contacts={contacts}/>
    </>
  );
}

export default Contacts;
