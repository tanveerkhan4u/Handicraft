import React, { useEffect, useRef, useState } from 'react'
import { enqueueSnackbar } from 'notistack'
import { Link } from 'react-router-dom'


const Listhandicraft = () => {

  const [handicraftList, sethandicraftList] = useState([]);
  const [masterList, setMasterList] = useState([]);
  const searchRef = useRef(null);


  const category = ['Coffe Mugs', 'Hanging Planters', 'Oil Bottles', 'Wall Hangings', 'Spice Boxes', 'Boxes', 'Door Mates', 'Hand Mirros', 'Decorative Hanger', 'Cloth Hanger', 'Curious', 'Cushion Cover'];
  const [selcategory, setSelcategory] = useState([]);

  const material = ['Wooden', 'Rubber', 'Paper', 'Plastic', 'Clay', 'Metal', 'Aluminium', 'Acrylic & Brass', 'Acrylic & MDF', 'Brass & Wood', 'Cedar Wood', 'Ceramic', 'Chilbil Wood', 'Fibre', 'Glass'];
  const [selmaterial, setSelmaterial] = useState([]);


  const color = ['Multicoloured', 'Terracotta', 'Grass Green', 'Brown', 'Glossy Red', 'Natural White', 'Natural Off White', 'Light Green', 'Sky Blue', 'Olive', 'Dark Blue', 'Yellow'];
  const [selcolor, setSelcolor] = useState([]);

  const art = ['Handmade', 'Handcrafted', 'Crafty Creation', 'Fabled Fabrics', 'Charismatic', 'Chalkboard Creations', 'Dhokra Art', 'Hand Carved', 'Warli Art'];
  const [selart, setSelart] = useState([]);

  const searchProduct = () => {
    const filteredData = masterList.filter((laptop) => {
      return laptop.name.toLowerCase().includes(searchRef.current.value.toLowerCase())
    });
    console.log(filteredData);
    sethandicraftList(filteredData);
  }
  const filterPrice = (e) => {
    console.log(e.target.value);
    const filteredData = masterList.filter((laptop) => { return laptop.price <= parseInt(e.target.value) });

    setProductList(filteredData)
  }

  
  const Selectcategory = (e, category) => {
    console.log(e.target.checked);
    if (selcategory.includes(category)) {
      const filteredcategory = selcategory.filter((b) => { return b !== category });
      if (filteredcategory.length === 0) {
        sethandicraftList(masterList);
      } else {
        const filteredData = masterList.filter((laptop) => { return filteredcategory.includes(laptop.category) });
        sethandicraftList(filteredData);
      }

      setSelcategory(filteredcategory);
      console.log(filteredcategory);
    } else {
      const filteredcategory = [...selcategory, category]

      const filteredData = masterList.filter((laptop) => { return filteredcategory.includes(laptop.category) });
      sethandicraftList(filteredData);
      setSelcategory(filteredcategory);


      console.log([...selcategory, category]);
    }
  }

  const Selectmaterial = (e, material) => {
    console.log(e.target.checked);
    if (selmaterial.includes(material)) {
      const filteredmaterial = selmaterial.filter((b) => { return b !== material });
      if (filteredmaterial.length === 0) {
        sethandicraftList(filteredmaterial);
      } else {
        const filteredData = masterList.filter((laptop) => { return filteredmaterial.includes(laptop.material) });
        sethandicraftList(filteredData);
      }

      setSelmaterial(filteredmaterial);
      console.log(filteredmaterial);
    } else {
      const filteredmaterial = [...selmaterial, material]

      const filteredData = masterList.filter((laptop) => { return filteredmaterial.includes(laptop.material) });
      sethandicraftList(filteredData);
      setSelmaterial(filteredmaterial);


      console.log([...selmaterial, material]);
    }
  }

  const Selectcolor = (e, color) => {
    console.log(e.target.checked);
    if (selcolor.includes(color)) {
      const filteredcolor = selcolor.filter((b) => { return b !== color });
      if (filteredcolor.length === 0) {
        sethandicraftList(filteredcolor);
      } else {
        const filteredData = masterList.filter((laptop) => { return filteredcolor.includes(laptop.color) });
        sethandicraftList(filteredData);
      }

      setSelcolor(filteredcolor);
      console.log(filteredcolor);
    } else {
      const filteredcolor = [...selcolor, color]

      const filteredData = masterList.filter((laptop) => { return filteredcolor.includes(laptop.color) });
      sethandicraftList(filteredData);
      setSelcolor(filteredcolor);


      console.log([...selcolor, color]);
    }
  }

  const Selectart = (e, art) => {
    console.log(e.target.checked);
    if (selart.includes(art)) {
      const filteredart = selart.filter((b) => { return b !== art });
      if (filteredart.length === 0) {
        sethandicraftList(filteredart);
      } else {
        const filteredData = masterList.filter((laptop) => { return filteredart.includes(laptop.art) });
        sethandicraftList(filteredData);
      }

      setSelart(filteredart);
      console.log(filteredart);
    } else {
      const filteredart = [...selart, art]

      const filteredData = masterList.filter((laptop) => { return filteredart.includes(laptop.art) });
      sethandicraftList(filteredData);
      setSelart(filteredart);


      console.log([...selart, art]);
    }
  }


  const fetchHandicraftData = async () => {
    const res = await fetch('http://localhost:3000/Handicraft/getall');
    console.log(res.status);

    const data = await res.json();
    console.table(data);

    sethandicraftList(data);
    setMasterList(data);
  }

  useEffect(() => {
    fetchHandicraftData();
  }, []);


  const deletehandicraft = async (id) => {
    console.log(id);

    const res = await fetch('http://localhost:3000/Handicraft/delete/' + id, { method: 'Delete' });
    console.log(res.status);
    if (res.status === 200) {
      enqueueSnackbar('handicraft Deleted Successfully', { variant: 'success' });
      fetchHandicraftData();
    }
  }


  const displayHandicraftData = () => {
    if (!handicraftList.length) return <h1>Loading... PLease Wait</h1>
    return <div className='row gy-4'>

      {handicraftList.map((laptop) => {
        return (<div className='col-md-3'>
          <div className='card bg-body-secondary shadow' style={{ height: '430px', width: '240px' }}>
            <img src={'http://localhost:3000/' + laptop.image} style={{ height: '300px', objectFit: 'cover', objectPosition: 'center' }} alt="" />

            <div className='card-body'>
              <h6>{laptop.name}</h6>
              <h4>{laptop.model}</h4>
              <h6>  {laptop.rating}</h6>

              <Link to={'/Detail/' + laptop._id} className='btn btn-primary btn-sm float-end'>View Details</Link>
              <h5 className='fw-bold'>₹{laptop.price}</h5>

              <h4 className='fw-bold'>{laptop.category}</h4>
              

            </div>
          </div>
        </div>)
      })}
    </div>


  }




  return (
    <div>
      
      <header className='bg-info-subtle text-dark'>
        <div className='container py-5'>
          <h4 className='text-center'>Best Sellers</h4>
          <p className='text-center'>Presenting to you our bestsellers - specially chosen items from our collections will make you revamp your entire home decor!</p>
          <div className='input-group'>
            <input type="text" className='form-control' placeholder='Search for Products , Category and More ...' ref={searchRef} />
            <button onClick={searchProduct} className='btn btn-primary w-5'>Search</button>
          </div>
        </div>
      </header>
      <div className='row' >
          <div className='col-md-3' style={{ marginTop: '10px' }}>
            <div className='card'>
              <div className='card-body'>


              


                <label>Max Price</label>
                <input type="range" step={600} min={1000} max={3500} className='form-range' onChange={filterPrice} />

                <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button
        className="accordion-button"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseOne"
        aria-expanded="true"
        aria-controls="collapseOne"
      >
        <label className='fw-bold '>CATEGORY</label>
      </button>
    </h2>
    <div
      id="collapseOne"
      className="accordion-collapse collapse show"
      data-bs-parent="#accordionExample"
    >
      <div className="accordion-body">
        <strong><hr className='my-3 mb-2 px-2' />
                
                {
                  category.map((category) => {
                    return <div>
                      <input type='checkbox' style={{ margin: '4px' }}
                        checked={selcategory.includes(category)}
                        onChange={(e) => { Selectcategory(e, category) }} />
                      <label>{category}</label>
                    </div>
                  })
                }
                <hr className='my-3' /></strong>
      </div>
    </div>
  </div>
</div>
                

<div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button
        className="accordion-button"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseOne"
        aria-expanded="true"
        aria-controls="collapseOne"
      >
        <label className='fw-bold '>MATERIAL</label>
      </button>
    </h2>
    <div
      id="collapseOne"
      className="accordion-collapse collapse show"
      data-bs-parent="#accordionExample"
    >
      <div className="accordion-body">
        <strong> <hr className='my-3 mb-2 px-2' />
        {
                  material.map((material) => {
                    return <div>
                      <input type='checkbox' style={{ margin: '4px' }}
                        checked={selmaterial.includes(material)}
                        onChange={(e) => { Selectmaterial(e, material) }} />
                      <label>{material}</label>
                    </div>
                  })
                }
                <hr className='my-3' /></strong>
      </div>
    </div>
  </div>
</div>

<div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button
        className="accordion-button"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseOne"
        aria-expanded="true"
        aria-controls="collapseOne"
      >
        <label className='fw-bold '>Colour</label>
      </button>
    </h2>
    <div
      id="collapseOne"
      className="accordion-collapse collapse show"
      data-bs-parent="#accordionExample"
    >
      <div className="accordion-body">
        <strong> <hr className='my-3 mb-2 px-2' />
        {
                  color.map((color) => {
                    return <div>
                      <input type='checkbox' style={{ margin: '4px' }}
                        checked={selcolor.includes(color)}
                        onChange={(e) => { Selectcolor(e, color) }} />
                      <label>{color}</label>
                    </div>
                  })
                }
                <hr className='my-3' /></strong>
      </div>
    </div>
  </div>
</div>

<div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button
        className="accordion-button"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseOne"
        aria-expanded="true"
        aria-controls="collapseOne"
      >
        <label className='fw-bold '>Made In Art</label>
      </button>
    </h2>
    <div
      id="collapseOne"
      className="accordion-collapse collapse show"
      data-bs-parent="#accordionExample"
    >
      <div className="accordion-body">
        <strong> <hr className='my-3 mb-2 px-2' />
        {
                  art.map((art) => {
                    return <div>
                      <input type='checkbox' style={{ margin: '4px' }}
                        checked={selart.includes(art)}
                        onChange={(e) => { Selectart(e, art) }} />
                      <label>{art}</label>
                    </div>
                  })
                }
                <hr className='my-3' /></strong>
      </div>
    </div>
  </div>
</div>



 </div>
            </div>
          </div>

          <div className='col-md-9' style={{ marginTop: '10px' }}>


          {displayHandicraftData()}
          </div>

        </div>
    </div>
  )
}

export default Listhandicraft
