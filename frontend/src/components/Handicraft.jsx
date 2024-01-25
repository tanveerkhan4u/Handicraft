import { useFormik } from 'formik'
import { enqueueSnackbar } from 'notistack';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';





const HandicraftSchema = Yup.object().shape({
  name: Yup.string().required('Name is Required').min(4, 'Name is too short'),
  category: Yup.string().required('Category is Required'),
  material: Yup.string().required('Material is Required'),
  
  price: Yup.number().required('Price is Required'),
});







const Handicraft = () => {

  const navigate = useNavigate();

  const [selFile, setSelFile] = useState('');


  const HandicraftForm = useFormik({
    initialValues: {
      name: '',
      category: '',
      material: '',
      price: '',
      image: '',
      color: '',
      art: ''
    },
    onSubmit: async (values, { resetForm }) => {
      values.image = selFile;
      console.log(values);

      const res = await fetch('http://localhost:3000/Handicraft/add', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json'
        }
      }
      );



      if (res.status === 200) {
        enqueueSnackbar('Welcome to Handicraft Form Successfully', { variant: 'success' });
        resetForm();
        const data = await res.json();

        sessionStorage.setItem('Handicraft', JSON.stringify(data));

          navigate('/Listhandicraft');
   
      } else if (res.status === 401) {
        enqueueSnackbar('Invalid Handicraft Form', { variant: 'error' });
      } else {
        enqueueSnackbar('Something went werong ', { variant: 'error' });
      }




    },
    validationSchema: HandicraftSchema
  });

  const uploadFile = (e) => {
    const file = e.target.files[0];
    setSelFile(file.name);
    const fd = new FormData();
    fd.append("myfile", file);
    fetch("http://localhost:3000/util/uploadfile", {
      method: "POST",
      body: fd,
    }).then((res) => {
      if (res.status === 200) {
        console.log("file uploaded");
      }
    });
  };

  return (

    <div className='container17'>
      <div className='col-md-4 mx-auto py-2'>
        <div className="card" data-aos="zoom-in-up">
          <div className="card-body shadow p-4">
            <form onSubmit={HandicraftForm.handleSubmit}>
              <h2 className='text-center'>Handicraft Form</h2>
              <hr />

              <label htmlFor="">Name</label>
              <span className='ms-4 fs-6 text-danger'>{HandicraftForm.touched.name && HandicraftForm.errors.name}</span>
              <input type="text" className='form-control mb-4 shadow' id="name" onChange={HandicraftForm.handleChange} value={HandicraftForm.values.name} />
              
              <label htmlFor="">Category</label>
              <span className='ms-4 fs-6 text-danger'>{HandicraftForm.touched.category && HandicraftForm.errors.category}</span>

              <select className='form-control mb-4 shadow' id="category" onChange={HandicraftForm.handleChange} value={HandicraftForm.values.category} >
                <option>Choose Category</option>
                <option>Coffe Mugs</option>
                <option>Hanging Planters</option>
                <option>Oil Bottles</option>
                <option>Wall Hangings</option>
                <option>Spice Boxes</option>
                <option> Boxes</option>
              </select>

              <label className="mb-2">Material</label>
              <span className='ms-4 fs-6 text-danger'>{HandicraftForm.touched.material && HandicraftForm.errors.material}</span>
              <select className='form-control mb-4 shadow' id='material' onChange={HandicraftForm.handleChange} value={HandicraftForm.values.material}>
                <option>Choose Material</option>
                <option>Wodden</option>
                <option>Rubber</option>
                <option>Paper</option>
                <option>Plastic</option>
                <option>Clay</option>
                <option>Metal</option>
              </select>
              <label htmlFor="">Color</label>
              <span className='ms-4 fs-6 text-danger'>{HandicraftForm.touched.color && HandicraftForm.errors.color}</span>
              <input type='text' className='form-control mb-4 shadow' id='color' onChange={HandicraftForm.handleChange} value={HandicraftForm.values.color} />

              <label htmlFor="">Art</label>
              <span className='ms-4 fs-6 text-danger'>{HandicraftForm.touched.art && HandicraftForm.errors.art}</span>
              <input type='text' className='form-control mb-4 shadow' id='art' onChange={HandicraftForm.handleChange} value={HandicraftForm.values.art} />



              <label htmlFor="">Price</label>
              <span className='ms-4 fs-6 text-danger'>{HandicraftForm.touched.price && HandicraftForm.errors.price}</span>
              <input type='number' className='form-control mb-4 shadow' id='price' onChange={HandicraftForm.handleChange} value={HandicraftForm.values.price} />
              <label htmlFor="">Image</label>
              
              <input type='file' className='form-control mb-4 shadow' id='image' onChange={uploadFile} />


              <button type='submit' className='btn btn-outline-danger w-100 mt-3 shadow'>Add to Handicraft</button>
            </form>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Handicraft;
