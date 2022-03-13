import * as Yup from "yup";

// Define your Yup schema

const validations = Yup.object({
  email: Yup.string().email("Geçerli bir email giriniz").required("zorunlu alan"),
  password: Yup.string().required("zorunlu alan").min(5,"Parolanız en az 5 karakter olmalı"),
  confirmPassword:Yup.string().oneOf([Yup.ref('password')],"PAROLALAR UYUŞMADI...")
  
}).defined();




export default validations



// required() zorunlu 
//min(5) 5 karakterli 

