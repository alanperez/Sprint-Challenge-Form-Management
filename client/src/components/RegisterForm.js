import React from 'react'
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import {getToken} from './config/getToken'
function RegisterForm({ values, errors, touched, isSubmitting}) {
  // console.log('values:', values)
  return (

  <div className="ui centered grid container">
    <Form className="page-login ">
     <div className="ui icon warning message">
      <div className="nine wide column">

      <div >
        {touched.username && errors.username && <p>{errors.username}</p>}
        <Field  className="field" type="text" name="username" placeholder="Username" />
      </div>

      <div>
        {touched.password && errors.password && <p>{errors.password}</p>}
        <Field  className="field" type="password" name="password" placeholder="Password" />
      </div>

      <div>

      <button className="ui primary labeled icon button" style={{textAlign:'center'}}disabled={isSubmitting} type='submit'> <i className="unlock alternate icon"></i>
                Register</button>
      </div>
        
      </div>
     </div>
    </Form>
  </div>
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