import React,{useState,useContext} from 'react'
import { useFormik } from 'formik';
import {useHistory} from 'react-router-dom';
import * as Yup from 'yup';
import AuthContext from '../store/auth-context';
import '../styles/Signin.css'


const Login = () => {
  const [isLoading, setisLoading] = useState(false)
  const authctx = useContext(AuthContext);
 
  const history = useHistory();
  const formik = useFormik({
    initialValues:{
      
      email:"",
      password:"",
      
    },
    validationSchema:Yup.object({
      email:Yup.string()
      .email("invalid email")
      .required('requried'),
      password:Yup.string()
      .max(10,"must be 10 char or less")
      .required('requried')
    }),
    onSubmit: (values) =>{
      setisLoading(true)
      fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAnTVjYBSOHJ2CZlUmJp1cfIFhrP998B9g', {
      method: 'POST',
      body: JSON.stringify({
        email: formik.values.email,
        password: formik.values.password,
        returnSecureToken: true,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        setisLoading(false);
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage = 'give correct email and password';
            // if (data && data.error && data.error.message) {
            //   errorMessage = data.error.message;
            // }

            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        authctx.login(data.idToken);
        history.replace('/')
      })
      .catch((err) => {
        alert(err.message);
      });
      
    }

  });
  

 
  return (
    <div className='hello'>
      <form onSubmit={formik.handleSubmit}>
      <h1 className="my-4 font-weight-bold .display-4">Login</h1>
      
      <label>Email</label><br />
      <input 
      id='email'
      name='email'
      type='email'
      placeholder="Email"
      onChange={formik.handleChange} 
      onBlur={formik.handleBlur}
      value={formik.values.email}
      className='form-control shadow-none'
      />
       {formik.touched.email  && formik.errors.email ? <p style={{color: 'red'}}>{formik.errors.email}</p> : null}
      <label>Password</label><br />
      <input 
      id='password'
      name='password'
      type='password'
      placeholder="Password"
      onChange={formik.handleChange} 
      value={formik.values.password}
      onBlur={formik.handleBlur}
      className='form-control shadow-none'
      />
       {formik.touched.password  && formik.errors.password ? <p style={{color: 'red'}}>{formik.errors.password}</p> : null}
       {!isLoading && <button 
            
       className="btn btn-primary mt-3" type="submit">Register</button>}<br />
      {isLoading && <h4 style={{color: 'blue'}} >connecting</h4>} 
      </form>
    </div>
  )
}

export default Login


