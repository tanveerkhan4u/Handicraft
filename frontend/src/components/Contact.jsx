import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { enqueueSnackbar } from 'notistack';

const ContactSchema = Yup.object().shape({
  name: Yup.string().required('Name is Required').min(4, 'Name is too short'),
  email: Yup.string().email('email is invalid').required(' Required'),

  Message: Yup.string().required('Message is Required').min(20, 'Message is too short')
});


const Contact = () => {

  const navigate = useNavigate();

  const ContactForm = useFormik({
    initialValues: {
      name: '',
      email: '',

      Message: ''
    },
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      console.log(values);
      setSubmitting(true);
      const res = await fetch('http://localhost:3000/Contact/add', {

        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-type': 'application/json'
        }

      });

      setSubmitting(false);
      console.log(res.status);

      if (res.status === 200) {
        enqueueSnackbar('congratulations🎉🎉 Welcome to Home', { variant: 'success' });
        resetForm();
        navigate('/Home');

      } else {
        enqueueSnackbar('Something went wrong', { variant: 'error' });
      }


    },
    validationSchema: ContactSchema
  });



  return (
    <div className='vh-100 bg-info-subtle'>
      <div className='col-md-4 mx-auto py-5'>
        <div className="card " data-aos="zoom-in-up">
          <div className="card-body p-4 shadow ">
            <form onSubmit={ContactForm.handleSubmit}>
              <h3 className='float-start'>Get In Touch</h3>
              <br /><br /><hr />


              <label htmlFor="">Name</label>
              <span className='ms-4 fs-6 text-danger'>{ContactForm.errors.name}</span>
              <input type="text" className='form-control mb-4 shadow' placeholder='Enter Your Name' id="name" onChange={ContactForm.handleChange} value={ContactForm.values.name} />
              <label htmlFor="">Email</label>
              <span className='ms-4 fs-6 text-danger'>{ContactForm.errors.email}</span>
              <input type="text" className='form-control mb-4 shadow' placeholder='Enter Your Email' id="email" onChange={ContactForm.handleChange} value={ContactForm.values.email} />
              <label htmlFor="">Contact Number</label>
              <span className='ms-4 fs-6 text-danger'>{ContactForm.errors.Contact}</span>
              <input type="number" className='form-control mb-4 shadow' placeholder='Enter your Number' id='Contact' onChange={ContactForm.handleChange} value={ContactForm.values.Contact} />

              <label htmlFor="">Message</label>
              <span className='ms-4 fs-6 text-danger'>{ContactForm.errors.Message}</span>
              <input type="text" className='form-control mb-3 shadow' placeholder='Enter your Message' id='Message' onChange={ContactForm.handleChange} value={ContactForm.values.Message} />

              <button type='submit' className='btn btn-outline-danger w-25 mt-3 shadow'>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact;
