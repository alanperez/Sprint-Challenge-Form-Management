import React from 'react'
import { withFormik, Form, Field } from "formik";
import axios from "axios";
import * as Yup from "yup";
import {getToken} from './config/getToken'
function RegisterForm({ values, errors, touched, isSubmitting}) {
  // console.log('values:', values)
  return (
    
    <Form>
     <div style={{margin: '50px auto'}}>

      <div>
        {touched.username && errors.username && <p>{errors.username}</p>}
        <Field type="text" name="username" placeholder="Username" />
      </div>

      <div>
        {touched.password && errors.password && <p>{errors.password}</p>}
        <Field type="password" name="password" placeholder="Password" />
      </div>

      <div>

      <button disabled={isSubmitting} type='submit'>Submit!</button>
      </div>
        
     </div>
    </Form>
  );
}

const FormikRegisterForm = withFormik({
  mapPropsToValues({ username, password}) {
    console.log('TEST')
    return {
      username: username || "",
      password: password || ""
    };
  },
  validationSchema: Yup.object().shape({
    username: Yup.string()
    .min(3,"First Name should be at least 5 characters long")
    .max(10)
    .required('Name is required.'),
    password: Yup.string()
     .min(4, 'Password must be 8 characters or longer')
     .required('Password is required'),
  }),
  handleSubmit(values, { props, resetForm, setErrors, setSubmitting }) {
    console.log(values)
    console.log('object')
    if (values.email === "alreadytaken@atb.dev") {
      setErrors({ email: "That email is already taken" });
    } else {
      getToken()
        .post("http://localhost:5000/api/register", values)
        .then(res => {
          console.log(res); // Data was created successfully and logs to console
         
          localStorage.setItem('token', res.data.token)
          props.history.push('/profile')
          resetForm();
          setSubmitting(false);
        })
        .catch(err => {
          console.log(err); // There was an error creating the data and logs to console
          setSubmitting(false);
        });
    }
  }
})(RegisterForm);

export default FormikRegisterForm;