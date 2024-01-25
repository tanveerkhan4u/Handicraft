import React from 'react'

const About = () => {
  return (
    <>
<div style={{overflow: 'hidden'}}>
      <div className='container' data-aos="zoom-in-down">
        <img src='https://exclusivelane.com/cdn/shop/files/3_490d9724-c3f0-454b-bbbb-c673a20b6613_900x.jpg?v=1699693550' style={{ width: "1000px", height: "500px", marginTop: "10px", marginLeft: "60px" }} alt=''></img>
      </div>
      <br />
      <br />
      <div className='container-fluid10' data-aos="zoom-in-down" >
        <h1 className='text' style={{ marginLeft: "80px" }}>What Got Us Started ?</h1>
        <p className='text' style={{ fontSize: "22px", marginLeft: "80px" }}>Started ExclusiveLane in 2012 with a vision to promote crafts globally & help small artisans based in different parts of the World earn a living out of it. We work with 100 plus creative artisans & designers across India & help them in developing the end product, right from the ideation phase. Each product is uniquely handcrafted & hand painted with miniature details by skilled craftsmen. We have products across multiple categories like Home & Decor, Lighting, Kitchen & Dining, Furniture & Furnishing, made in different materials like terracotta, Teak & Sheesham wood, ceramic, Brass, Canvas etc.</p>
      </div>

      <br />
      <br />
      <div className='container-fluid11 ' data-aos="zoom-in-down">
        <h1 className='text' style={{ marginLeft: "80px" }}>Our Mission</h1>
        <p className='text' style={{ fontSize: "22px", marginLeft: "80px" }}>We are on a mission to:<br />
          a) Design & Co-create functional products with craftsmen from different parts of India & the World by fusing multiple art forms & materials for urban market & consumers.
          <br />

          b) Provide a better livelihood & lifestyle to the craftsmen & their families by creating a sustainable & a long-term business model for them.
          <br />

          c) Preserving the pride of India; the traditional art forms, techniques & skill set of the artisans inherited from the ancestors which are depleting day by day due to non-functional product design, competition from China & low sales of handicrafts.</p>
      </div>
      <br />
      <br />

      <section className="Team my-5 text-center" id="Team">
        <div className="container">
          <div className="text-center my-5">
            <h1>
              Our Team
            </h1>
            <hr className="w-25 m-auto" />
          </div>
        </div>
      </section>

      <div className="row">
        <div className="col-md-3" style={{ marginLeft: "180px" }}>
          <div className="card" data-aos="zoom-in-up" data-aos-offset={200}>
            <div className="card-body">
              <img
                src="https://images.unsplash.com/photo-1603988089669-c041ac2fe196?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                alt="..."
                className="img-fluid rounded-circle border border-primary p-2"
              />
              <h5 className="card-title mt-4">scarlett</h5>
              <p className="card-text">Full-Stack Developer</p>
              <a href="#" className="btn btn-primary">
                Read More
              </a>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="card" data-aos="zoom-in-down" data-aos-offset="200">
            <div class="card-body">
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                alt="..." class="img-fluid rounded-circle border border-primary p-2"></img>
              <h5 class="card-title mt-4">Lisa</h5>
              <p class="card-text">Back-End Developer</p>
              <a href="#" class="btn btn-primary">Read More</a>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card" data-aos="zoom-in-left" data-aos-offset={200}>
            <div className="card-body">
              <img
                src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                alt="..."
                className="img-fluid rounded-circle border border-primary p-2"
              />
              <h5 className="card-title mt-4">Andrew</h5>
              <p className="card-text">Front-End Developer</p>
              <a href="#" className="btn btn-primary">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      
      <div className='container-fluid12 bg-body-secondary'>
        <h1 className='text-center' >Thank you for Visiting Us !</h1>
      </div>
      </div>
      
































    </>
  )
}

export default About;