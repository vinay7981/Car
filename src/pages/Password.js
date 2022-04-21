import { useFormik } from 'formik';
import * as Yup from 'yup';
import React,  { useContext } from 'react';
import AuthContext from '../store/auth-context';
import { useHistory } from 'react-router';
import '../styles/Signin.css'

const ChangePass = () => {
  
  const history = useHistory();
  const authCtx = useContext(AuthContext)
  const formik = useFormik({
    initialValues:{
      
      password:"",
 
      
    },
    validationSchema:Yup.object({
      password:Yup.string()
      .max(10,"must be 10 char or less")
      .required('requried'),
      
    }),
    onSubmit: (values) =>{
      
      fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyAnTVjYBSOHJ2CZlUmJp1cfIFhrP998B9g',{
        method:'POST',
        body:JSON.stringify({
          idToken:authCtx.token,
          password:formik.values.password,
          returnSecureToken:false
        }),
        headers:{
          'Content-Type':'application/json'
        }
      }).then(res =>{   
        if (res.ok) {
          alert('your password is changed succesfully...');
          history.replace('/')
        } 
      }) 
    }
  });
  

 
  return (
    <div className='hello'>
      <form onSubmit={formik.handleSubmit}>
      <h1 className="my-4 font-weight-bold .display-4">Change Password</h1>
      
      <label><h5>Password</h5></label><br />
      <input 
      id='password'
      name='password'
      type='password'
      placeholder="password"
      onChange={formik.handleChange} 
      onBlur={formik.handleBlur}
      value={formik.values.password}
      className='form-control shadow-none'
      />
       {formik.touched.password  && formik.errors.password ? <p style={{color: 'red'}}>{formik.errors.password}</p> : null}
      
      

      <button className="btn btn-primary mt-3" type="submit">Submit</button><br />
      
      </form>
    </div>
  )
}

export default ChangePass


