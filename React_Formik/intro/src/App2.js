import "./App.css";
import { Formik } from "formik";

function App2() {
  return (
    <div className="App">
      <h1>Sign Up</h1>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          gender: "female",
          hobies: [],
          country: "tr",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ handleChange, handleSubmit, values }) => (
          <form onSubmit={handleSubmit}>
            <label htmlFor="firstName">First Name</label>
            <input
              name="firstName"
              placeholder="name..."
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
        )}
      </Formik>
    </div>
  );
}

export default App2;

// npm install formik --save

/*
    html input ve form  kullanmak istersek 
    formik bize Field, Form  verir biz bunları cogu zaman kullanamya biliyoruz 
    bitakım özelleştirmeler nedeniyle vs ...


{
    ({handleChange,handleSubmit})=>(
        <form...>
        .....
        .....
    )
}



*/
