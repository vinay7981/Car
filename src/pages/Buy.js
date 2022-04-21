import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useHistory } from 'react-router';
import '../styles/Signin.css';

const Buy = () => {
  const history = useHistory();
  const formik = useFormik({
    initialValues:{
      firstName:"",
      lastName:"",
      city:"",
      state:"",
      pincode:"",
      Booking_date:"",
      Return_date: "",
    }, 
    
    validationSchema:Yup.object({
      firstName:Yup.string()
      .max(15,"must be 15 char or less")
      .required('requried'),
      lastName:Yup.string()
      .max(10,"must be 10 char or less")
      .required('requried'),
      city: Yup.string()
      .min(6,'city is invalid')
      .required('city is required'),
      state: Yup.string()
      .min(6, 'state must be at least 6 charaters')
      .required('state is required'),
      pincode: Yup.string()
      .min(6, 'pincode must be at least 6 charaters')
      .required('Pincode is required'),
    }),
    onSubmit: (values) =>{
      
      const response =  fetch('https://car-rental-dad6b-default-rtdb.firebaseio.com/details.json',{
        method: 'POST',
        body: JSON.stringify(values),
        headers:{
          'Content-Type' : 'application/json'
        }
      }).then((res) => {
        
        if (res.ok) {
          alert('your order was succesfull...')
          history.replace('/cars')
        } else {
          // .nothing
        }
      });
      
    }
  });
  

 
  return (
    <div className='hello' >
      <form onSubmit={formik.handleSubmit}>
      <h1 className="my-4 font-weight-bold .display-3">Order Details</h1>
      <label>FirstName</label>
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
      <label>city</label><br />
      <input 
      id='city'
      name='city'
      type='text'
      placeholder="city"
      onChange={formik.handleChange} 
      onBlur={formik.handleBlur}
      value={formik.values.city}
      className='form-control shadow-none'
      />
       {formik.touched.city  && formik.errors.city ? <p style={{color: 'red'}}>{formik.errors.city}</p> : null}
      <label>state</label><br />
      <input 
      id='state'
      
      name='state'
      type='text'
      placeholder="state"
      onChange={formik.handleChange} 
      value={formik.values.state}
      onBlur={formik.handleBlur}
      className='form-control shadow-none'
      />
       {formik.touched.state  && formik.errors.state ? <p style={{color: 'red'}}>{formik.errors.state}</p> : null}
       <label>pincode</label><br />
      <input 
      id='pincode'
      
      name='pincode'
      type='text'
      placeholder="pincode"
      onChange={formik.handleChange} 
      value={formik.values.pincode}
      onBlur={formik.handleBlur}
      className='form-control shadow-none'
      />
       {formik.touched.pincode  && formik.errors.pincode ? <p style={{color: 'red'}}>{formik.errors.pincode}</p> : null}
       <label>Booking_date</label><br />
      <input 
      id='Booking_date'
      
      name='Booking_date'
      type='date'
      placeholder="Booking_date"
      onChange={formik.handleChange} 
     
      className='form-control shadow-none'
      />
      <label>Return_date</label><br />
      <input 
      id='Return_date'
      
      name='Return_date'
      type='date'
      placeholder="Return_date"
      onChange={formik.handleChange} 
     
      className='form-control shadow-none'
      />




<label>Car_Booked</label><br />
      <input 
      id='Car_Booked'
      
      name='Car_Booked'
      type='Car'
      placeholder="car_Booked"
      onChange={formik.handleChange} 
     
      className='form-control shadow-none'
      />









       <button  
            
       className="btn btn-primary mt-3" type="submit"
      
       >Rent</button><br />
      {/* {isLoading && <p style={{color: 'blue'}} >Sending Request</p>}  */}
      </form>
    </div>
  )
}

export default Buy


