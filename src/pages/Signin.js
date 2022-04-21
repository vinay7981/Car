import React ,{useState}from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import '../styles/Signin.css'
import { useHistory } from 'react-router';


const Signin = () => {
  const [isLoading, setisLoading] = useState(false)
 
  const history = useHistory();
  const formik = useFormik({
    initialValues:{
      firstName:"",
      lastName:"",
      email:"",
      password:"",
      
    },
    validationSchema:Yup.object({
      firstName:Yup.string()
      .max(15,"must be 15 char or less")
      .required('requried'),
      lastName:Yup.string()
      .max(10,"must be 10 char or less")
      .required('requried'),
      email:Yup.string()
      .email("invalid email")
      .required('requried'),
      password:Yup.string()
      .max(10,"must be 10 char or less")
      .required('requried')
    }),
    onSubmit: (values) =>{
      setisLoading(true)
      fetch(
              'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAnTVjYBSOHJ2CZlUmJp1cfIFhrP998B9g',
              {
                method: 'POST',
                body: JSON.stringify({
                  email: formik.values.email,
                  password: formik.values.password,
                  returnSecureToken: true,
                }),
                headers: {
                  'Content-Type': 'application/json',
                },
              }
            ).then((res) => {
              setisLoading(false);
              if (res.ok) {
                history.replace('/login')
              } else {
                return res.json().then((data) => {
                  let errorMessage = 'Authentication failed';
                  if(data&& data.error&&data.error.message){
                    errorMessage = data.error.message;
                  }
        
                  alert(errorMessage);
                });
              }
            });

    
    }

  });
  

 
  return (
    <div 
    className="leftside"
    style={{ backgroundImage: 
      "url('https://wallpapersmug.com/large/29a76a/2020-bentley-mulsanne-front.jpg')",
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'}}>
      
         
        
    < div className='hello'>
      <form onSubmit={formik.handleSubmit}>
      <h1 className="my-4 font-weight-bold .display-4">Sign Up</h1>
      <label>FirstName</label><br />
      <input 
      id='firstName'
      name='firstName'
      type='text'
      placeholder="First Name" 
      onChange={formik.handleChange} 
      onBlur={formik.handleBlur}
      value={formik.values.firstName}
      className='form-control shadow-none'
      />
      {formik.touched.firstName &&  formik.errors.firstName ? <p style={{color: 'red'}}>{formik.errors.firstName}</p> : null}
      <label>lastName</label><br />
      <input 
      id='lastName'
      name='lastName'
      type='text'
      placeholder="Last Name"
      className='form-control shadow-none'
      onChange={formik.handleChange} 
      onBlur={formik.handleBlur}
      value={formik.values.lastName}
      />
      {formik.touched.lastName  && formik.errors.lastName ? <p style={{color: 'red'}}>{formik.errors.lastName}</p> : null}
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
      {isLoading && <p style={{color: 'blue'}} >Sending Request</p>} 
      {/* <buttton className='btn btn-primary mt-3' type='submit'>Register</buttton> */}
   
      </form>
      
    </div>
    
    </div>
  )
}

export default Signin

