import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {base_url} from '../base_url'
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn,
    MDBRipple
  } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import './AllDoc.css'
function AllDoc() {

//  const base_url='http://localhost:3001'

 const [doctors,setDoctors]=useState([])

  const fetchData=async()=>{
    const {data} = await axios.get(`${base_url}doctors`)
    console.log(data);
    setDoctors(data)
  }
  console.log(doctors);
  useEffect(()=>{
    fetchData()
  },[])
  return (
    <div className='container'>
        <div className="row" id="mainrow">
        {
            doctors.map((item)=>(
                <div className="col-4 my-4">
                        <MDBCard className='card' style={{backgroundColor:'rgb(240, 235, 235)'}}>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage style={{width:'260px', height:'250px', marginTop:"18px"}} src={item.image_url}  />
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle>{item.name}</MDBCardTitle>
        <MDBCardText>
          {item.specialty}
        </MDBCardText>
      <Link to={`/viewDoc/${item.id}`}> <MDBBtn >Book</MDBBtn></Link> 
      </MDBCardBody>
    </MDBCard>
                </div>
            ))
        }
        </div>

    </div>
  )
}

export default AllDoc