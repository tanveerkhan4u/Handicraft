import React, { useState } from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';


const Detail = () => {

  const { id } = useParams();

  const [handicraftData, setHandicraftData] = useState(null);

  const getHandicraftData = async () => {
    const res = await fetch('http://localhost:3000/Handicraft/getbyid/' + id);
    console.log(res.status);

    const data = await res.json();
    console.log(data);
    setHandicraftData(data);
  }

  useEffect(() => {
    getHandicraftData();
  }, [])


  const displayDetails = () => {
    if (handicraftData !== null) {
      return <div style={{ overflow: 'hidden' }}>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <img src={'http://localhost:3000/' + handicraftData.image} style={{ width: "100%", marginTop: "40px" }} alt="" />
          </div>

          <div className="col-6" style={{ marginTop: "40px" }} >
            <h3 className='text'>{handicraftData.name}</h3>&nbsp;

            <h5 className='text'>{handicraftData.category}</h5>&nbsp;
            <h5 className='text'>{handicraftData.material}</h5>&nbsp;
            {/* <h3 className='text'>Image</h3>&nbsp; */}
            <h5 className='text'> ₹ {handicraftData.price}</h5>&nbsp;
            <h5 className='text'>  {handicraftData.color}</h5>&nbsp;
            <h5 className='text'>  {handicraftData.art}</h5>&nbsp;

            <div className="border border-dark p-2 mb-2">
  <h6 className="fw-bold text-danger">BEST OFFERS FOR YOU!</h6>
  <hr/>
  <h6>Extra 10% OFF on Orders Above Rs. 1999</h6>
  <p className='coupon'>Use Code:  &nbsp; <button className="btn btn-primary " style={{ fontSize:"15px", padding:"4px" }}>NEW10</button> </p>
 

  
</div>

            <br />
            <br />

            <button className='btn btn-outline-primary w-100 shadow'><i class="fa-solid fa-cart-shopping"></i>   &nbsp;&nbsp;Add to Cart</button>
            <br />
            <br />
            <button className='btn btn-outline-dark w-100 shadow'>BUY NOW  &nbsp;&nbsp;<i class="fa-brands fa-google-pay">&nbsp;&nbsp;</i> <i class="fa-brands fa-cc-mastercard"></i>&nbsp;&nbsp;<i class="fa-brands fa-cc-paypal"></i> </button>
          </div>
          <div className='container20' style={{ marginTop: "20px" }}>
            <ul className='text-center' style={{ fontSize: "30px" }}> SHIPPING DETAILS</ul>
            <p className='text-center' style={{ fontSize: "20px" }}>
              <i class="fa-solid fa-cube"></i> &nbsp; FOR BULK ORDERS: Whatsapp on +91-9599198373</p>
            <p className='text-center' style={{ fontSize: "20px", marginRight: "150px" }}>
              <i class="fa-solid fa-truck"></i> &nbsp; FREE RETURNS + FREE SHIPPING
            </p>
            <p className='text-center' style={{ fontSize: "20px", marginRight: "285px" }}>
              <i class="fa-solid fa-truck"></i> &nbsp; Ships in 24 Hours
            </p>
            <p className='text-center' style={{ fontSize: "20px", marginRight: "230px" }}>
              <i class="fa-solid fa-cube"></i> &nbsp; ART FORM: Handcrafted
            </p>
            <p className='text-center' style={{ fontSize: "20px", marginRight: "320px" }}>
              <i class="fa-regular fa-circle-check"></i> &nbsp; Made in India
            </p>
            <br />
            <div className='container21'>
              <h2 className='text' style={{ marginLeft: "20px" }}>Why Choose Us ?</h2>
            </div>
            <br />
            <div className="container d-flex " style={{ marginLeft: "110px", gap: "100px" }}>
              <div className="card" style={{ width: "8rem", border: "none" }}>
                <img src="https://exclusivelane.com/cdn/shop/files/Capture_1_small.jpg?v=1688728907" style={{ borderRadius: "50%" }} className="card-img-top" alt="..." />
                <div className="card-body">
                  <p className="text-center">10+ YEARS, 12 LAKH CUSTOMERS</p>
                </div>
              </div>
              <div className="card" style={{ width: "8rem", border: "none" }}>
                <img src="https://exclusivelane.com/cdn/shop/files/FINAL_SYMBOLS-06_1_small.jpg?v=1688728937" style={{ borderRadius: "50%" }} className="card-img-top" alt="..." />
                <div className="card-body">
                  <p className="text-center">120+ ARTISANS</p>
                </div>
              </div>
              <div className="card" style={{ width: "8rem", border: "none" }}>
                <img src="https://exclusivelane.com/cdn/shop/files/FINAL_SYMBOLS-07_small.jpg?v=1688728968" style={{ borderRadius: "50%" }} className="card-img-top" alt="..." />
                <div className="card-body">
                  <p className="text-center">HANDMADE</p>
                </div>
              </div>

            </div>
            <div className='container22'>
              <h2 className='text' style={{ marginLeft: "18px" }}>DESCRIPTION</h2>&nbsp;
              <p className='text' style={{ marginLeft: "15px" }}>Handcrafted in sheesham beach wood from the interiors of India, this Nine Blends is a beautiful square spice box that captures the richness of Indian spice blends with nine in-built compartments in the main box. Complete with an attached glass lid for easy viewing and a spoon, this compact €˜masala-dabba€™ (spice-box) has been finished to detail by hand, maintaining the natural feel and brown colour of the wood and makes the perfect addition to your kitchen. Making spice storage organised and aesthetic, this flavour box is handmade with love; capturing and preserving the nostalgic essence of our ancient relationship with spices and love for mouth watering fragrant food. This simple, ethnic hand-made for home-made spice box also doubles up as the perfect gift for mothers and grandmothers and all of your cooking-loving loved ones.</p>
            </div>
            <hr />
            <br />
            <br />
            <div className='container24'>
              <h4 className='text-center'>More From Best Sellers</h4>
            </div>
            <br />
            <br />
            <div className="container d-flex " style={{ gap: "10px" }}>
              <div className="col-md-3 mb-4">
                <div className="card shadow">
                  <img
                    className="card-img-top myimg"
                    src="https://exclusivelane.com/cdn/shop/products/EL-021-114_A_360x.jpg?v=1594980554"
                    alt=""
                  />
                  <div className="card-body">
                    <h6>'Swinging Hut' Handmade & Hand-painted Bird House In Terracotta (6 Inch)</h6>

                    <p>
                      <i className="fa-solid fa-star" /> 4.4 stars from 222 Reviews
                    </p>
                    <h4>₹ 749</h4>
                    <button className="btn btn-primary float-end w-100">
                      {" "}
                      <i className="fa-solid fa-cart-shopping" /> Add to cart
                    </button>

                  </div>
                </div>
              </div>&nbsp;

              <div className="col-md-3 mb-4">
                <div className="card shadow">
                  <img
                    className="card-img-top myimg"
                    src="https://exclusivelane.com/cdn/shop/products/EL-021-108_A_360x.jpg?v=1594980490"
                    alt=""
                  />
                  <div className="card-body">
                    <h6>Mud Blossom Pair' Handmade & Hand-painted Planter Pots In Terracotta (4 Inch | Set of 2)</h6>

                    <p>
                      <i className="fa-solid fa-star" /> 4.8 stars from 22 Reviews
                    </p>
                    <h4>₹ 1,099</h4>
                    <button className="btn btn-primary float-end w-100">
                      {" "}
                      <i className="fa-solid fa-cart-shopping" /> Add to cart
                    </button>

                  </div>
                </div>
              </div>&nbsp;
              <div className="col-md-3 mb-4">
                <div className="card shadow">
                  <img
                    className="card-img-top myimg"
                    src="https://exclusivelane.com/cdn/shop/products/el-021-006_a_360x.jpg?v=1570516176"
                    alt=""
                  />
                  <div className="card-body">
                    <h6>'Moroccan Roots' Handpainted Planters Beautiful In Ceramic (Set Of 2)</h6>

                    <p>
                      <i className="fa-solid fa-star" /> 4.0 stars from 2542 Reviews
                    </p>
                    <h4>₹ 575</h4>
                    <button className="btn btn-primary float-end w-100">
                      {" "}
                      <i className="fa-solid fa-cart-shopping" /> Add to cart
                    </button>

                  </div>
                </div>
              </div>&nbsp;

              <div className="col-md-3 mb-4">
                <div className="card shadow">
                  <img
                    className="card-img-top myimg"
                    src="https://exclusivelane.com/cdn/shop/products/el-021-034_a_1_360x.jpg?v=1570515988"
                    alt=""
                  />
                  <div className="card-body">
                    <h6>'Climbing Squirrels' Handmade Garden Decorative Table Cum Wall Showpiece</h6>

                    <p>
                      <i className="fa-solid fa-star" /> 3.7 stars from 242 Reviews
                    </p>
                    <h4>₹ 785</h4>
                    <button className="btn btn-primary float-end w-100">
                      {" "}
                      <i className="fa-solid fa-cart-shopping" /> Add to cart
                    </button>

                  </div>
                </div>
              </div>&nbsp;

            </div>
            <hr />










            <div className='container23'>
              <h5 className='text-center'>Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals</h5>
            </div>
            <br />

          </div>
        </div>
      </div>
      </div>
    } else {
      return <h3>Loading ... Please Wait</h3>
    }
  }


  return (
    <>
      {displayDetails()}
    </>
  )
}



export default Detail;
