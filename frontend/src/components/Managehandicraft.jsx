import React, { useEffect, useState } from 'react'
import { enqueueSnackbar } from 'notistack'
import { Link } from 'react-router-dom';

const Managehandicraft = () => {

  const [handicraftList, sethandicraftList] = useState([]);

  const fetchHandicraftData = async () => {
    const res = await fetch('http://localhost:3000/Handicraft/getall');
    console.log(res.status);

    const data = await res.json();
    console.table(data);

    sethandicraftList(data);
  }

  useEffect(() => {
    fetchHandicraftData();
  }, []);


  const deletehandicraft = async (id) => {
    console.log(id);

    const res = await fetch('http://localhost:3000/Handicraft/delete/' + id, { method: 'Delete' });
    console.log(res.status);
    if (res.status === 200) {
      enqueueSnackbar('user Deleted Successfully', { variant: 'success' });
      fetchHandicraftData();
    }
  }

  const displayHandicraftData = () => {
    return <table className='table table-dark'>
      <thead>
        <tr>
          <th>Name</th>
          <th>Category</th>
          <th>Material</th>
          <th>Price</th>
          <th>Image</th>
          <th colSpan={2}>Action</th>
        </tr>
      </thead>
      <tbody>
        {
          handicraftList.map((handicraft) => {
            return <tr>
              <td>{handicraft.name}</td>
              <td>{handicraft.category}</td>
              <td>{handicraft.material}</td>
              <td>{handicraft.price}</td>
              <td>{handicraft.image}</td>
              <td>
                <Link to={'/UpdateHandicraft/' + handicraft._id} className='btn btn-primary'>Edit</Link>
              </td>
              <td>
                <button className='btn btn-danger' onClick={() => { deletehandicraft(handicraft._id) }}>Delete</button>
              </td>
            </tr>
          })
        }
      </tbody>
    </table>
  }



  return (
    <div>
      <div className='container'>
        {displayHandicraftData()}
      </div>
    </div>
  )
}

export default Managehandicraft