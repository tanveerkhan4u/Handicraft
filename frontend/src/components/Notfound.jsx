import React from 'react'
import { Link } from 'react-router-dom'

const Notfound = () => {
  return (
    <div className='col-md-6 mx-auto text-center'>
      <img className='w-100' src='https://cdn.dribbble.com/users/992274/screenshots/7392790/media/95483df50a0a3324c4cf9ccb1094b825.jpg'/>
      <h1 className='display-1 fw-bold text-center'style={{color: '#f773f9'}} >Page Not found</h1>
      <Link to="/Home" className='btn btn-primary'>Go to Home</Link>
    </div>
    
  )
}

export default Notfound;
