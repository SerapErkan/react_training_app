import React from "react";
import { useState,useEffect } from "react";



const initialFormValues={ fullname: "", number: "" };


function Form({addContacts,contacts}) {
  const [form, setForm] = useState(initialFormValues);

  useEffect(() => {
   //içini temizleyelim
      setForm(initialFormValues);
  },[contacts]);

  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (form.fullname === "" || form.number === "") {
      return false;
    }
   
    addContacts([...contacts,form]);
  
  
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <div>
          <input
            name="fullname"
            placeholder="NAME ..."
            onChange={onChangeInput}
            value={form.fullname}
          />
        </div>
        <div>
          <input
            name="number"
            placeholder="PHONE NUMBER ..."
            onChange={onChangeInput}
            value={form.number}
          />
        </div>

        <button >Submit</button>
      </form>
    </>
  );
}

export default Form;

// <label for="lname">Last Name</label>
//<input type="text" id="lname" name="lastname" placeholder="Your last name.."></input>
