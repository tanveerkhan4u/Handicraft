import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { enqueueSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom';
import useAppContext from '../AppContext';






const SignupSchema = Yup.object().shape({

  email: Yup.string().email('email is invalid').required(' Required'),
  password: Yup.string().required('Password is Required').min(8, 'Password is too short')
});

const Login = () => {

  const navigate = useNavigate();

  const { setloggedIn } = useAppContext();

  const LoginForm = useFormik({
    initialValues: {

      email: '',
      password: ''
    },
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      console.log(values);
      setSubmitting(true);
      const res = await fetch('http://localhost:3000/Handicraft/authenticate', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json'
        }
      }
      );
      setSubmitting(false);


      if (res.status === 200) {
        enqueueSnackbar('Logged In Successfully', { variant: 'success' });

        const data = await res.json();

        sessionStorage.setItem('Handicraft', JSON.stringify(data));
        setloggedIn(true);
        resetForm();
        navigate('/Home');

      } else if (res.status === 401) {
        enqueueSnackbar('Invalid Email', { variant: 'error' });
      } else {
        enqueueSnackbar('Something went werong ', { variant: 'error' });
      }




    },
    validationSchema: SignupSchema
  });


  return (


    <div className='container15'>
      <div className=' py-5 vh-100'>
        <div className="col-md-3 mx-auto py-5">

          <div className='card' data-aos="zoom-in-up">
            <div className="card-body shadow">
              <h3 className='text-center my-3'>Login</h3>
              <hr />

              <form onSubmit={LoginForm.handleSubmit}>

                <label htmlFor="">Email Address</label>
                <span className='ms-4 fs-6 text-danger'>{LoginForm.errors.email}</span>
                <input type="text" className='form-control mb-4 ' id='email' onChange={LoginForm.handleChange} value={LoginForm.values.email} />
                <label htmlFor="">Password</label>
                <span className='ms-4 fs-6 text-danger'>{LoginForm.errors.password}</span>
                <input type="password" className='form-control mb-4 ' id='password' onChange={LoginForm.handleChange} value={LoginForm.values.password} />

                <button className='btn btn-outline-info w-100 mt-4 shadow' type='submit'>Log In</button>
                <hr/>
              
                
                
                <button className='btn btn-outline-dark w-100 shadow'><i class="fa-brands fa-google"></i> &nbsp; Sign in With Google</button>
                <br/>
                <br/>
                <button className='btn btn-outline-dark w-100 shadow'><i class="fa-brands fa-facebook-f"></i> &nbsp; Sign in With Facebook</button>

              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-9"></div>
    </div>



  )
}

export default Login;
