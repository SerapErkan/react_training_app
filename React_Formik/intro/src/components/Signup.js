import { useFormik } from "formik";
import validationSchema from "./validations";

function Signup() {
  const { handleChange, handleSubmit, values, errors,handleBlur,touched } = useFormik({
    initialValues: {
      email:"",
      password:"",
      confirmPassword:"",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema,
    // validationSchema olarak tanımlayalım
  });
  return (
    <div className="App">
      <h1>Sign Up</h1>

      <form onSubmit={handleSubmit}>
        <label>Email : </label>
        <input
          name="email"
          placeholder="Email..."
          onChange={handleChange}
          value={values.email}
          onBlur={handleBlur}
        />
        {errors.email && touched.email && <div className="error"> {errors.email}</div>}

        <br />
        <br />

        <label> Password : </label>
        <input
          name="password"
          placeholder="Password..."
          onChange={handleChange}
          value={values.password}
          onBlur={handleBlur}
        />
        {errors.password && touched.password && <div className="error"> {errors.password}</div>}

        <br />
        <br />

        <label>Confirm Password : </label>
        <input
          name="confirmPassword"
          placeholder="ConfirmPassword..."
          onChange={handleChange}
          value={values.confirmPassword}
          onBlur={handleBlur}
        />
        {errors.confirmPassword && touched.confirmPassword &&<div className="error"> {errors.confirmPassword}</div>}
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

export default Signup;

// Form Validasyonları
//YUP
//error için touched ile handleBlur 
//onBlur={handleBlur}
//imputtan ayrılınca hata mesajını yok edelim 