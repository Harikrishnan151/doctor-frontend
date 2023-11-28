import React from 'react'
import './Mainpage.css'
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple
} from 'mdb-react-ui-kit';
function Mainpage() {
  return (
    <div>
        <div className="container my-5">
            <img className='img1' src="https://s3.ap-southeast-1.amazonaws.com/www.practostatic.com/consumer-home/desktop/images/1597423628/chronic_consumer_banner_dweb.png" alt="" />
        </div>
        <div className="container ">
            <div className="row mt-4">
                <h3>Consult top doctors online for any health concern</h3>
                <p>Private online consultations with verified doctors in all specialists</p>
        <div className="col-3">

      <MDBCard className='card' style={{backgroundColor:'rgb(240, 235, 235)'}}>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage  className='img2' src='https://www.practostatic.com/consumer-home/desktop/images/1597423628/dweb_instant_video_consulation.png'  />
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle>Video Consultation</MDBCardTitle>
        <MDBCardText>
     
        </MDBCardText>
      </MDBCardBody>
    </MDBCard>
           
    </div>
       <div className="col-3">
  
        <MDBCard className='card' style={{backgroundColor:'rgb(240, 235, 235)'}}>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage className='img02' src='https://www.practostatic.com/consumer-home/desktop/images/1597423628/dweb_find_doctors.png'  />
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle>Find Doctors Near You</MDBCardTitle>
       
       
      </MDBCardBody>
    </MDBCard>
        </div>
       <div className="col-3">

<MDBCard className='card' style={{backgroundColor:'rgb(240, 235, 235)'}}>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage className='img2' src='https://www.practostatic.com/consumer-home/desktop/images/1597423628/dweb_medicines.png' />
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle>Medicines</MDBCardTitle>
        <MDBCardText>
        
        </MDBCardText>
       
      </MDBCardBody>
    </MDBCard >
              </div>
              <div className="col-3">
        <MDBCard className='card' style={{backgroundColor:'rgb(240, 235, 235)'}}>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage className='img2' src='https://www.practostatic.com/consumer-home/desktop/images/1597423628/dweb_lab_tests.png'  />
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody >
        <MDBCardTitle>Lap Tests</MDBCardTitle>
        <MDBCardText>
        
        </MDBCardText>
       
      </MDBCardBody>
    </MDBCard>
              </div>
             
            </div>
        </div>
        <div id='banner1' className="container-fluid my-5">
            <div id='row1' className="row">
                <div id='content' className="col-6 mt-5" >
                    <h1>Skip the travel!</h1>
                    <h1>Take Online Doctor Consultation</h1>
                    <p>Private consultation + Audio call · Starts at just ₹199</p>
                </div>
                <div className="col-6 mt-5">
                    <img className='img3' src="https://www.practo.com/consult/static/images/homepage-hero-image-web-v1.png" alt="" />
                </div>
            </div>
        </div>
        <div className="container my-4">
            <div id='row2'  className="row">
                <div  className="col-6">
                    <img className='img4' src="https://www.practostatic.com/consumer-home/desktop/images/1540464906/app-banner@2x.jpg" alt="" />
                </div>
                <div id='content1' className="col-6 mt-5">
                     <div className='con1'>
                    <h1>Instant appointment with</h1>
                    <h1>doctors.Guaranteed.</h1>
                    <h6>100,000 Verified doctors</h6>
                    <h6>3M+ Patient recommendations</h6>
                    <h6>25M Patients/year</h6>
                    </div>
                </div>
               
            </div>
        </div>
        <div id='banner2' className="container-fluid">
            <img className='img5' src="https://www.practostatic.com/ecommerce-assets/static/media/home/desktop/full-width-1.48172107.png" alt="" />
        </div>

        <div className="container my-5">
            <div id='row3' className="row">
                <div className="col-6">
                    <img className='img6' src="https://www.practostatic.com/web-assets/home/assets/images/provider.c4a3d938da109434de6ce3a9046bbf42.png" alt="" />
                </div>
                <div className="col-6 mt-5">
                    <div className='con2'>
                    <h1>Skip the waiting room.</h1>
                    <h1>Consult with a doctor</h1>
                    <h6>Fees starting at ₹99</h6>
                    <h6>Verified doctors respond in 5 minutes</h6>
                    <h6>100% Private and confidential</h6>
                    </div>
                </div>
            </div>
        </div>

        <div id='banner3' className="container-fluid">
            <div className="row">
                <img className='img7' src="https://www.practostatic.com/ecommerce-assets/static/media/home/desktop/full-width-2.573c08f7.png" alt="" />
            </div>
        </div>

        
      
    </div>
  )
}

export default Mainpage