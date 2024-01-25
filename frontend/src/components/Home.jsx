import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';


const Home = () => {

  useEffect(() => {
    AOS.init({ duration: "500", delayed: "300" })
  }, [])

  return (
    <div style={{ overflow: 'hidden' }}>
      <header className='bg-dark text-light  ' data-aos="zoom-in-up">
        <div className='container1 py-1'>
          <h5 className='text-center'>COD + Free Shipping + Free Returns</h5>
        </div>
      </header>
      <div id="carouselExampleCaptions" className="carousel slide" data-aos="flip-down">
        <div className="carousel-indicators"  >
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={0}
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={1}
            aria-label="Slide 2"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={2}
            aria-label="Slide 3"
          />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://exclusivelane.com/cdn/shop/files/aaaaa_637dd79c-52b6-4f3d-8cfe-3270053531a5_900x.jpg?v=1699694050" style={{ width: "380px", height: "600px" }} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h1>Lightning</h1>
              <p>Range of Lightning designs that suit any contemporary, minimalist and vintage homes
                Handicrafts are goods predominantly made by hand even though some tools or machinery may also have been used in the process; such goods are graced with visual appeal in the nature of ornamentation of in-lay work or some similar work of a substantial nature; possess distinctive features, which can be aesthetic, artistic, ethnic or culturally attached and are amply different from mechanically produced goods of similar utility.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://exclusivelane.com/cdn/shop/files/4_19469558-c13a-4c78-8e41-5019590832c5_900x.jpg?v=1699693307" style={{ width: "380px", height: "600px" }} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h1>Table Planters</h1>
              <p>A Complete range of curated planters of all styles to suit any garden.Handicrafts are goods predominantly made by hand even though some tools or machinery may also have been used in the process; such goods are graced with visual appeal in the nature of ornamentation of in-lay work or some similar work of a substantial nature; possess distinctive features, which can be aesthetic, artistic, ethnic or culturally attached and are amply different from mechanically produced goods of similar utility.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://exclusivelane.com/cdn/shop/files/Untitled_900_x_581_px_900x.jpg?v=1703850121" style={{ width: "380px", height: "600px" }} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h1>Chapati Boxes</h1>
              <p>Add a touch of artistic prints in your kitchen with these new launch of wooden chapati Boxe. Handicrafts are goods predominantly made by hand even though some tools or machinery may also have been used in the process; such goods are graced with visual appeal in the nature of ornamentation of in-lay work or some similar work of a substantial nature; possess distinctive features, which can be aesthetic, artistic, ethnic or culturally attached and are amply different from mechanically produced goods of similar utility. </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <br />
      <div className='container2' data-aos="zoom-in-down">
        <h2 className='text-center'>Handcrafted In India</h2>
      </div>
      <br />
      <div className='container3' data-aos="fade-left">
        <h2 className='text' style={{ marginLeft: '70px' }}>Shop By Category</h2>
      </div>
      <br />


      <div className="container d-flex " style={{ gap: "10px" }} data-aos="fade-left">
        <div className="card" style={{ width: "15rem", border: "none" }}>
          <img src="https://exclusivelane.com/cdn/shop/collections/2_400x400.jpg?v=1697808762" style={{ borderRadius: "50%" }} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="text-center">Coffe Mugs</h5>
          </div>
        </div> &nbsp;

        <div className="card" style={{ width: "15rem" }}>
          <img src="https://exclusivelane.com/cdn/shop/collections/6_400x400.jpg?v=1698042130" style={{ borderRadius: "50%" }} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="text-center">Hanging Planters</h5>
          </div>
        </div>&nbsp;

        <div className="card" style={{ width: "15rem" }}>
          <img src="https://exclusivelane.com/cdn/shop/collections/3_400x400.jpg?v=1697808486" style={{ borderRadius: "50%" }} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="text-center">Oil Bottles</h5>
          </div>
        </div>&nbsp;
        <div className="card" style={{ width: "15rem" }}>
          <img src="https://exclusivelane.com/cdn/shop/collections/4_400x400.jpg?v=1697720601" style={{ borderRadius: "50%" }} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="text-center">Showpieces & Curios</h5>
          </div>
        </div>&nbsp;
        <div className="card" style={{ width: "15rem" }}>
          <img src="https://exclusivelane.com/cdn/shop/collections/1_400x400.jpg?v=1697808546" style={{ borderRadius: "50%" }} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="text-center">Spice Boxes</h5>
          </div>

        </div>
        <div className="card" style={{ width: "15rem" }}>
          <img src="https://exclusivelane.com/cdn/shop/collections/2_7b1eefcd-9ab6-4716-a1d3-5f6cb887768c_400x400.jpg?v=1697720487" style={{ borderRadius: "50%" }} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="text-center">Wall Hangings</h5>
          </div>

        </div>
      </div>
      <br />
      <div className='container4' data-aos="flip-up">
        <h2 className='text' style={{ marginLeft: '70px' }}>Trending Now</h2>
      </div>
      <br />

      <div className="container d-flex " style={{ gap: "10px" }} data-aos="fade-right">
        <div className="col-md-3 mb-4 ">
          <div className="card shadow">
            <img
              className="card-img-top myimg"
              src="https://exclusivelane.com/cdn/shop/products/EL-002-127_A_280x.jpg?v=1568953176"
              alt="" 
            />
            <div className="card-body">
              <h6>Coloured Fish' Handmade & Hand-Painted Garden Decorative Wall Hanging In Terracotta</h6>

              <p>
                <i className="fa-solid fa-star" /> 4.1 stars from 25582 Reviews
              </p>
              <h4>₹ 1,200</h4>
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
              src="https://exclusivelane.com/cdn/shop/products/el-005-490_a_3_360x.jpg?v=1570516030"
              alt=""
            />
            <div className="card-body">
              <h6> The 'Flowy Flora' Mughal Hand-Painted Ink Blue Decorative Ceramic Oil Bottle (1000 ML)</h6>

              <p>
                <i className="fa-solid fa-star" /> 4.7 stars from 255 Reviews
              </p>
              <h4>₹ 2,000</h4>
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
              src="https://exclusivelane.com/cdn/shop/products/EL-005-614_A_280x.jpg?v=1600838418"
              alt=""
            />
            <div className="card-body">
              <h6>'Twelve Blends' Spice Box With 12 Containers & Spoon In Sheesham Wood</h6>

              <p>
                <i className="fa-solid fa-star" /> 4.4 stars from 2232 Reviews
              </p>
              <h4>₹ 1,565</h4>
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
              src="https://exclusivelane.com/cdn/shop/products/el-002-001_a_3_280x.jpg?v=1570516510"
              alt=""
            />
            <div className="card-body">
              <h6>8 Terracotta Warli Handpainted Pots With Sheesham Wooden Frame Wall Hanging</h6>

              <p>
                <i className="fa-solid fa-star" /> 4.6 stars from 3252 Reviews
              </p>
              <h4>₹ 1,800</h4>
              <button className="btn btn-primary float-end w-100">
                {" "}
                <i className="fa-solid fa-cart-shopping" /> Add to cart
              </button>

            </div>
          </div>
        </div>

      </div>
      <br />

      <div className='container5' data-aos="fade-right">
        <h2 className='text' style={{ marginLeft: '70px' }}>New Collections</h2>
      </div>
      <br />

      <div className="container d-flex " style={{ gap: "10px" }} data-aos="fade-down-left" >
        <div className="card" style={{ width: "15rem", border: "none" }}>
          <img src="https://exclusivelane.com/cdn/shop/products/EL-003-457_A_70689fc7-2e35-454f-a93a-4a9da9d5e980_400x400.jpg?v=1697547565" style={{ borderRadius: "50%" }} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="text-center">Table Lamps</h5>
          </div>
        </div> &nbsp;

        <div className="card" style={{ width: "15rem", border: "none" }}>
          <img src="https://exclusivelane.com/cdn/shop/files/EL-002-259_A_400x400.jpg?v=1691994007" style={{ borderRadius: "50%" }} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="text-center">Wall Decor</h5>
          </div>
        </div> &nbsp;

        <div className="card" style={{ width: "15rem", border: "none" }}>
          <img src="https://exclusivelane.com/cdn/shop/files/EL-008-347_A_400x400.jpg?v=1691744097" style={{ borderRadius: "50%" }} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="text-center">The Brass Beams</h5>
          </div>
        </div> &nbsp;

        <div className="card" style={{ width: "15rem", border: "none" }}>
          <img src="https://exclusivelane.com/cdn/shop/files/EL-025-176_A_400x400.jpg?v=1690436500" style={{ borderRadius: "50%" }} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="text-center">Showpieces</h5>
          </div>
        </div> &nbsp;

        <div className="card" style={{ width: "15rem", border: "none" }}>
          <img src="https://exclusivelane.com/cdn/shop/files/EL-049-022_A_400x400.jpg?v=1689839289" style={{ borderRadius: "50%" }} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="text-center">Scented Candles</h5>
          </div>
        </div> &nbsp;

        <div className="card" style={{ width: "15rem", border: "none" }}>
          <img src="https://exclusivelane.com/cdn/shop/files/EL-005-1628_A_400x400.jpg?v=1688629541" style={{ borderRadius: "50%" }} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="text-center">The Ceramic Treasures</h5>
          </div>
        </div> &nbsp;
      </div>
      <br />

      <div className='container6' data-aos="fade-up" >
        <h2 className='text' style={{ marginLeft: '70px' }}>New Arrivals</h2>

      </div>
      <br />

      <div className="container d-flex " style={{ gap: "10px" }} data-aos="fade-right">
        <div className="col-md-3 mb-4 ">
          <div className="card shadow">
            <img
              className="card-img-top myimg"
              src="https://exclusivelane.com/cdn/shop/products/elegant-peacock-hand-etched-decorative-hanging-bell-in-brass-1139-grams_1_280x.jpg?v=1648857217"
              alt=""
            />
            <div className="card-body">
              <h6>'Elegant Peacock' Hand-Etched Decorative Hanging Bell In Brass (1139 Grams)</h6>

              <p>
                <i className="fa-solid fa-star" /> 4.1 stars from 25582 Reviews
              </p>
              <h4>₹ 2,100</h4>
              <button className="btn btn-primary float-end w-100">
                {" "}
                <i className="fa-solid fa-cart-shopping" /> Add to cart
              </button>

            </div>
          </div>
        </div>&nbsp;

        <div className="col-md-3 mb-4 ">
          <div className="card shadow">
            <img
              className="card-img-top myimg"
              src="https://exclusivelane.com/cdn/shop/files/EL-002-254_A_280x.jpg?v=1692966284"
              alt=""
            />
            <div className="card-body">
              <h6>Vishnu Mantra' Wall Hanging Decor (Om Namo Bhagavate Vasudevaya)</h6>

              <p>
                <i className="fa-solid fa-star" /> 4.2 stars from 282 Reviews
              </p>
              <h4>₹ 1,900</h4>
              <button className="btn btn-primary float-end w-100">
                {" "}
                <i className="fa-solid fa-cart-shopping" /> Add to cart
              </button>

            </div>
          </div>
        </div>&nbsp;

        <div className="col-md-3 mb-4 ">
          <div className="card shadow">
            <img
              className="card-img-top myimg"
              src="https://exclusivelane.com/cdn/shop/products/EL-008-336_A_280x.jpg?v=1676026856"
              alt=""
            />
            <div className="card-body">
              <h6>Inaayat' Dhoop Dani Brass Incense Burner (Hand-Etched | 5 Inch | 0.6 Kg)</h6>

              <p>
                <i className="fa-solid fa-star" /> 4.7 stars from 3000 Reviews
              </p>
              <h4>₹ 2,200</h4>
              <button className="btn btn-primary float-end w-100">
                {" "}
                <i className="fa-solid fa-cart-shopping" /> Add to cart
              </button>

            </div>
          </div>
        </div>&nbsp;

        <div className="col-md-3 mb-4 ">
          <div className="card shadow">
            <img
              className="card-img-top myimg"
              src="https://exclusivelane.com/cdn/shop/products/lion-laurels--hand-etched-cavred-door-knocker-in-brass-343-grams_1_280x.jpg?v=1648858049"
              alt=""
            />
            <div className="card-body">
              <h6>'Lion Laurels ' Hand-Etched Cavred Door Knocker In Brass (343 Grams)</h6>

              <p>
                <i className="fa-solid fa-star" /> 4.9 stars from 255 Reviews
              </p>
              <h4>₹ 3,200</h4>
              <button className="btn btn-primary float-end w-100">
                {" "}
                <i className="fa-solid fa-cart-shopping" /> Add to cart
              </button>

            </div>
          </div>
        </div>&nbsp;
      </div>
      <br />

      <div className='container6' data-aos="fade-up-right">
        <h2 className='text' style={{ marginLeft: '70px' }}>Shop By Art</h2>
      </div>
      <br />

      <div className="container d-flex " style={{ gap: "10px" }} data-aos="zoom-in-down">
        <div className="card" style={{ width: "15rem", border: "none" }}>
          <img src="https://exclusivelane.com/cdn/shop/products/el-002-001_a_3_400x400.jpg?v=1570516510" style={{ borderRadius: "50%" }} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="text-center">Warli Art</h5>
          </div>
        </div> &nbsp;

        <div className="card" style={{ width: "15rem", border: "none" }}>
          <img src="https://exclusivelane.com/cdn/shop/products/el-006-038_a_4_400x400.jpg?v=1570516456" style={{ borderRadius: "50%" }} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="text-center">Madhubani Art</h5>
          </div>
        </div> &nbsp;

        <div className="card" style={{ width: "15rem", border: "none" }}>
          <img src="https://exclusivelane.com/cdn/shop/products/el-002-025_a_3_400x400.jpg?v=1570516475" style={{ borderRadius: "50%" }} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="text-center">Dhokra Art</h5>
          </div>
        </div> &nbsp;

        <div className="card" style={{ width: "15rem", border: "none" }}>
          <img src="https://exclusivelane.com/cdn/shop/products/el-025-006_a_2_400x400.jpg?v=1570516415" style={{ borderRadius: "50%" }} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="text-center">Meenakari Art</h5>
          </div>
        </div> &nbsp;

        <div className="card" style={{ width: "15rem", border: "none" }}>
          <img src="https://exclusivelane.com/cdn/shop/files/EL-015-165_A_400x400.jpg?v=1685515990" style={{ borderRadius: "50%" }} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="text-center">Ghantadi Art</h5>
          </div>
        </div> &nbsp;

        <div className="card" style={{ width: "15rem", border: "none" }}>
          <img src="https://exclusivelane.com/cdn/shop/products/65_400x400.png?v=1610968350" style={{ borderRadius: "50%" }} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="text-center">Pyrography Art</h5>
          </div>
        </div>
      </div>
      <br />

      <div className='container6' data-aos="fade-up-left">
        <h2 className='text' style={{ marginLeft: '70px' }}>Shop By Material</h2>
      </div>
      <br />

      <div className="container d-flex " style={{ gap: "10px" }} data-aos="zoom-in">
        <div className="card" style={{ width: "15rem", border: "none" }}>
          <img src="https://exclusivelane.com/cdn/shop/files/EL-008-347_A_400x400.jpg?v=1691744097" style={{ borderRadius: "50%" }} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="text-center">Brass</h5>
          </div>
        </div> &nbsp;

        <div className="card" style={{ width: "15rem", border: "none" }}>
          <img src="https://exclusivelane.com/cdn/shop/products/el-005-490_a_3_400x400.jpg?v=1570516030" style={{ borderRadius: "50%" }} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="text-center">Ceramic</h5>
          </div>
        </div> &nbsp;

        <div className="card" style={{ width: "15rem", border: "none" }}>
          <img src="https://exclusivelane.com/cdn/shop/products/EL-002-127_A_400x400.jpg?v=1568953176" style={{ borderRadius: "50%" }} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="text-center">Terracotta</h5>
          </div>
        </div> &nbsp;

        <div className="card" style={{ width: "15rem", border: "none" }}>
          <img src="https://exclusivelane.com/cdn/shop/products/EL-005-058_A_400x400.jpg?v=1599743521" style={{ borderRadius: "50%" }} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="text-center">Wood</h5>
          </div>
        </div> &nbsp;

        <div className="card" style={{ width: "15rem", border: "none" }}>
          <img src="https://exclusivelane.com/cdn/shop/products/EL-005-703_A_400x400.jpg?v=1583559542" style={{ borderRadius: "50%" }} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="text-center">Iron</h5>
          </div>
        </div> &nbsp;

        <div className="card" style={{ width: "15rem", border: "none" }}>
          <img src="https://exclusivelane.com/cdn/shop/products/EL-005-649_A_400x400.jpg?v=1571911555" style={{ borderRadius: "50%" }} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="text-center">Steel</h5>
          </div>
        </div> &nbsp;
      </div>
      <br />
      <br />

      <div className='container d-flex justify-content-between' style={{ marginLeft: "80px" }} data-aos="fade-left">
        <img src='https://exclusivelane.com/cdn/shop/files/Artisan_720x.png?v=1641295018' style={{ width: "500px" }} alt=''></img>

        <div className='row'>
          <div className="Mycard1">
            <h1 className='text-center'>Our Mission</h1>
            <p class="p-5" style={{ textAlign: "center" }}>
              Our mission is to curate beautifully handcrafted products from across the globe. We preserve the traditional art of India handed down to us by our ancestors, helping our talented artisans gain global recognition through the products that can be used on a daily basis in the urban market. Our vision is to be an International Brand synonym to craft. We are well on our way with a solemn goal to provide economic upliftment of the rural artisans that are involved in preserving the heritage of the handicrafts industry in India.We are well on our way with a solemn goal to provide economic upliftment of the rural artisans that are involved in preserving the heritage of the handicrafts industry in India.
            </p>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />

      <div className='container d-flex justify-content-between' style={{ marginLeft: "20px" }} data-aos="fade-right">
        <div className='row'>
          <div className="Mycard1">
            <h1 className='text-center'>Made In India</h1>
            <p class="p-5" style={{ textAlign: "center" }}>
              ExclusiveLane is an online craft brand started in 2012 with a vision to promote Indian handicrafts globally & help small artisans based in different parts of India earn a living out of it.
            </p>
          </div>
        </div>

        <img src='https://exclusivelane.com/cdn/shop/files/Artisan_1_720x.png?v=1641295038' style={{ width: "500px", height: "400px" }} alt=''></img>
      </div>
      <br />
      <br />
      <br />



      <div className='container bg-body-secondary' data-aos="fade-up-right">
        <div className='row'>
          <div className='card3'>
            <h2 className='text'>ExclusiveLane: The Indian Handicraft Catalogue</h2>
            <p>ExclusiveLane is inspired by a generation that is highly connected with its roots. Hence, we have crafted this platform that connects you to the artisans of India and showcases their work by providing you with the best handicraft items online. We aim to make the experience of buying aesthetic and contemporary products online delightful for customers. Also, the core motive is to make sure the handicraft industry in India gets a digital boost. We are here to make purchasing products online convenient for your lifestyle, making life simpler & safer for you.</p>
          </div>
        </div>
      </div>
      <br />
      <br />
      <hr />
      <br />

      <footer className='footer' data-aos="flip-down">
        <div className='Mycontainer'>
          <div className='row4'>
            <div className='footer-col'>
              <h5>About Company</h5>
              <ul>
                <li><a href='#'>About us</a></li>
                <li><a href='#'>Reviews</a></li>
                <li><a href='#'>Blog</a></li>
                <li><a href='#'>Coupons</a></li>
                <li><a href='#'>FAQs</a></li>
              </ul>
            </div>
            <div className='footer-col'>
              <h5>Coustomer Service</h5>
              <ul>
                <li><a href='#'>Track Order</a></li>
                <li><a href='#'>Privacy Policy</a></li>
                <li><a href='#'>Shipping Returns</a></li>
                <li><a href='#'>Bulk Orders</a></li>
                <li><a href='#'>Terms & Conditions</a></li>
              </ul>
            </div>
            <div className='footer-col'>
              <h5>Get in Touch</h5>
              <ul>
                <li><a href='#'><i class="fa-solid fa-phone"></i> &nbsp; 6394826676</a></li>
                <br />
                <li><a href='#'><i class="fa-solid fa-envelope"></i>&nbsp; khan6077@gmail.com</a></li>

              </ul>
            </div>
            <div className='footer-col'>
              <h5>Follow Us</h5>
              <div className='social-links'>
                <a href='#'><i class="fa-brands fa-facebook"></i></a>&nbsp; &nbsp;
                <a href='#'><i class="fa-brands fa-instagram"></i></a>&nbsp; &nbsp;
                <a href='#'><i class="fa-brands fa-twitter"></i></a>&nbsp; &nbsp;
                <a href='#'><i class="fa-brands fa-pinterest"></i></a>&nbsp; &nbsp;
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>


  )
}

export default Home;
