import React from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBNavbarBrand
  } from 'mdb-react-ui-kit';
  import { MDBBtn } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import './Header.css'
function Header() {
  return (
    <div>
           <MDBNavbar light bgColor='light'>
        <MDBContainer fluid>
          <Link to={'/'}>
          <MDBNavbarBrand >
            <img
              src='https://th.bing.com/th?id=OIP.l-s4dbD1btMPbcKs3X5uMQAAAA&w=198&h=113&c=8&rs=1&qlt=90&o=6&dpr=1.4&pid=3.1&rm=2'
              height='68'
              alt=''
              loading='lazy'
            />
            <span  style={{color:'#3DC2CF',marginLeft:'-20px'}} >doctor-</span> plus
         
          </MDBNavbarBrand>
          </Link>
          <MDBNavbarLink active aria-current='page' href='#'>
            <Link to={'/allDoctors'}>
          <MDBBtn className='btn1' color='info'>
           Book Doctors
          </MDBBtn>
          </Link>
              </MDBNavbarLink>
        </MDBContainer>
      </MDBNavbar>
    </div>
  )
}

export default Header