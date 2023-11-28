import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {base_url} from '../base_url'
import axios from 'axios';
import {
  // MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple
} from 'mdb-react-ui-kit';
import {
  MDBCard,
  MDBCardHeader,
  MDBListGroup,
  MDBListGroupItem
} from 'mdb-react-ui-kit';
import './ViewDoc.css'
import DocTime from '../DocTime/DocTime';
import DocReview from '../DocReview/DocReview';
function ViewDoc() {

    // const pathParams=useParams()
    // console.log(pathParams.id);
    const {id}=useParams()
    console.log(id);

    const [details,setDetails]=useState([])

    //Api call to fetch perticular doctor details
    const fetchData=async()=>{
        const {data}=await axios.get(`${base_url}doctors/${id}`)
        console.log(data);
        setDetails(data)
    }
    console.log(details);
    useEffect(()=>{
        fetchData()
    },[])



  return (
    <div className='container'>
       <div className="row">
        <div className="col-6 mt-4">
        <MDBCard className='card' style={{backgroundColor:'rgb(240, 235, 235)'}}>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage className='img' src={details.image_url}  />
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle>{details.name}</MDBCardTitle>
        <MDBCardText>
          {details.specialty}
        </MDBCardText>
       
      </MDBCardBody>
    </MDBCard>
        </div>
        <div className="col-6 mt-5">
         

        <MDBCard className='card' >
      <MDBCardHeader style={{textAlign:'start', color:'#3DC2CF'}}><h4 >{details.name}</h4></MDBCardHeader>
      <MDBListGroup flush>
      <MDBListGroupItem style={{textAlign:'start'}}><h5>Specialty : {details.specialty}</h5> </MDBListGroupItem>
        <MDBListGroupItem style={{textAlign:'start'}}><h5>Hospital : {details.hospital}</h5></MDBListGroupItem> 
        <MDBListGroupItem style={{textAlign:'start'}}><h5>Phone : {details.phone}</h5></MDBListGroupItem>
        <MDBListGroupItem style={{textAlign:'start'}}><h5>Email : {details.email}</h5></MDBListGroupItem>
        <MDBListGroupItem style={{textAlign:'start'}}><h5>Address : {details.address}</h5></MDBListGroupItem>
        <MDBListGroupItem style={{textAlign:'start'}}> <h5>Rating : {details.rating} </h5></MDBListGroupItem>
        <MDBListGroupItem>
          <div className='d-flex justify-content-around'>
        {/* <MDBBtn  color='info'> */}
        <p>  <DocTime days={details.available_days} time={details. available_hours}  /></p> 
          {/* </MDBBtn> */}
              
          <p>  <DocReview day={details.reviews} /></p> 
         {/* <p>
           Book Doctors
           </p> */}
          </div>
        </MDBListGroupItem>
      </MDBListGroup>
    </MDBCard>
        </div>
       </div>
        
      
    </div>
  )
}

export default ViewDoc