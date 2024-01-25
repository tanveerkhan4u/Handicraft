import React from 'react'
import { NavLink } from 'react-router-dom';
import useAppContext from '../AppContext';

const Navbar = () => {

  const { loggedIn, logout } = useAppContext();

  const showLoginOptions = () => {
    if (loggedIn) {
      return (
        <li className='nav-item'>
          <button onClick={logout} className='btn btn-outline-danger'>Log Out</button>
        </li>
      )
    } else {
      return <>
        <li className="nav-item" style={{ fontSize: "20px" }}>
          <NavLink className="nav-link" to="/Login">
            <i class="fa-regular fa-user"></i>
          </NavLink>
        </li>&nbsp; &nbsp; &nbsp;


        <li className="nav-item" style={{  fontSize: "20px" }}>
          <NavLink className="nav-link" to="/Signup">
            <i class="fa-solid fa-user-plus"></i>

          </NavLink>


        </li>&nbsp; &nbsp; &nbsp;
        
        <li className="nav-item" style={{ fontSize:"20px", marginRight:"30px" }}>
                <NavLink className="nav-link" to="/Cart">
                <i class="fa-solid fa-cart-shopping"></i>
                </NavLink>
              </li>
       

      </>
    }
  }








  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-light shadow">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"><img className='myimg' src='https://exclusivelane.com/cdn/shop/files/EL_logo_social_media_80_x_80_px_1_ba1e49e2-ed30-4e86-ae3b-94d7b404c8ac_150x.png?v=1655183699' style={{ marginLeft: "80px" }} alt='' ></img>

          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

              <li className="nav-item">
                <NavLink className="nav-link" to="/Home">
                  Home
                </NavLink>
              </li>



              <li className="nav-item">
                <NavLink className="nav-link" to="/Handicraft">
                  Handicraft
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/Listhandicraft">
                  Listhandicraft
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Managehandicraft">
                  Managehandicraft
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/About">
                  About Us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Contact">
                  Contact
                </NavLink>
              </li>

             
            </ul>

            <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
              {showLoginOptions()}
            </ul>


          </div>
        </div>
      </nav>

    </div>
  )
}

export default Navbar;
