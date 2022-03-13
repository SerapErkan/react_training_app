
//import { useFormik } from 'formik';
/*
USE FORMİK 

const formik = useFormik({
    initialValues: {
      firstName: '',
      //...
      //...
    },
    onSubmit: values => {
     //...
    },
  });


*/


import "./App.css";
import { useFormik } from "formik";

function App3() {


  const {handleChange,handleSubmit,values} = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      gender: "female",
      hobies: [],
      country: "tr",
    },
    onSubmit: values => {
      console.log(values);
    },
  });
  return (
    <div className="App">
      <h1>Sign Up</h1>
    
    
          <form onSubmit={handleSubmit}>
            <label htmlFor="firstName">First Name</label>
            <input
              name="firstName"
              placeholder="name...app3"
              onChange={handleChange}
              value={values.firstName}
            />
            <br />
            <br />

            <label htmlFor="lastName">Last Name</label>
            <input
              name="lastName"
              placeholder="lastname..."
              onChange={handleChange}
              value={values.lastName}
            />
            <br />
            <br />
            <span>Male</span>
            <input
              type={"radio"}
              name="gender"
              value="male"
              onChange={handleChange}
              checked={values.gender === "male"}
            />
            <span>Female</span>
            <input
              type={"radio"}
              name="gender"
              value="female"
              onChange={handleChange}
              checked={values.gender === "female"}
            />

            <br />
            <br />
            <div>
              Football
              <input
                type="checkbox"
                name="hobies"
                value="Football"
                onChange={handleChange}
              />
            </div>
            <div>
              Cinema
              <input
                type="checkbox"
                name="hobies"
                value="Cinema"
                onChange={handleChange}
              />
            </div>
            <div>
              Photography
              <input
                type="checkbox"
                name="hobies"
                value="Photography"
                onChange={handleChange}
              />
            </div>
            <br />
            <br />

            <select
              name="country"
              value={values.country}
              onChange={handleChange}
            >
              <option value="tr">Türkiye</option>
              <option value="en">England</option>
              <option value="usa">USA</option>
            </select>

            <br />
            <br />
            <button type="submit">Submit</button>
            <br />
            <br />
            <code>{JSON.stringify(values)}</code>
          </form>
       
    </div>
  );
}

export default App3;

//Checkbox
//Radio
//Dropdown