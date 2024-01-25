import React, { useState } from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { enqueueSnackbar } from 'notistack';



const SignupSchema = Yup.object().shape({
  name: Yup.string().required('Name is Required').min(4, 'Name is too short'),
  email: Yup.string().email('email is invalid').required(' Required'),
  password: Yup.string().required('Password is Required').min(8, 'Password is too short'),
  confirm: Yup.string().oneOf([Yup.ref('password'),null], 'Password must match').required('Confirm Password is required')
  
});



const Signup = () => {
 
 const [PasswordHidden, setPasswordHidden] = useState(true);

 const navigate = useNavigate();
  

const SignupForm = useFormik({
  initialValues: {
    name: '',
    email: '',
    password: '',
    confirm:''
  },
  onSubmit: async (values,{setSubmitting, resetForm}) => {
    console.log(values);
    setSubmitting(true);
    const res = await fetch('http://localhost:3000/Handicraft/add', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
    setSubmitting(false);


       console.log(res.status);

       if(res.status === 200){
        enqueueSnackbar('Registered Successfully', {variant: 'success'});
        resetForm();
        navigate('/Login');

       }else{
        enqueueSnackbar('Something went wrong', {variant: 'error'});
       }






  },
  validationSchema: SignupSchema
});


  return (
    

<div className='container16'>
      <div className='col-md-4 mx-auto py-5'>
        <div className="card" data-aos="zoom-in-up">
          <div className="card-body p-4 shadow">
            <form onSubmit={SignupForm.handleSubmit}>
              <h2 className='text-center'>Sign Up</h2>
              <hr />

              <label htmlFor="">Name</label>
              <span className='ms-4 fs-6 text-danger'>{SignupForm.touched.name &&  SignupForm.errors.name}</span>
              <input type="text" className='form-control mb-4 ' id="name"  onChange={SignupForm.handleChange} value={SignupForm.values.name} />
              <label htmlFor="">Email Address</label>
              <span className='ms-4 fs-6 text-danger'>{SignupForm.touched.email &&  SignupForm.errors.email}</span>
              <input type="text" className='form-control mb-4' id="email" onChange={SignupForm.handleChange} value={SignupForm.values.email} />
              <label htmlFor="">Password</label>
              <span className='ms-4 fs-6 text-danger'>{SignupForm.touched.password &&  SignupForm.errors.password}</span>
              <input type= {PasswordHidden?'Show':'Hide'}  className='form-control mb-4' id='password'  onChange={SignupForm.handleChange} value={SignupForm.values.password}/>
              <label htmlFor="">Confirm Password</label>
              <span className='ms-4 fs-6 text-danger'>{ SignupForm.touched.confirm && SignupForm.errors.confirm}</span>
              <input type= {PasswordHidden?'password':'text'} className='form-control mb-4' id='confirm'   onChange={SignupForm.handleChange} value={SignupForm.values.confirm}/>


              

              <button type='submit' className='btn btn-outline-danger w-100 mt-5 shadow'>Sign up</button>
            </form>
          </div>
        </div>
      </div>
    </div>

      
    
  )
}

export default Signup;
