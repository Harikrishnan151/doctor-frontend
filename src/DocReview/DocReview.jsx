import React, { useState } from 'react'
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from 'mdb-react-ui-kit';
  

function DocReview({day}) {
    console.log(day);

    const [scrollableModal, setScrollableModal] = useState(false)
  return (
    <div>
              {/* <MDBBtn onClick={toggleShow}>Review</MDBBtn>
      <MDBModal show={basicModal} setShow={setBasicModal} tabIndex='-1'>
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Review</MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
             {
                 day?.map(item=>(
                    <div>
                        <p style={{textAlign:'start'}}>Name : {item.patient_name}</p>
                        <p style={{textAlign:'start'}}>Date : {item.date}</p>
                        <p style={{textAlign:'start'}}>Rating : {item.rating}</p>
                        <p style={{textAlign:'start'}}>Comments : {item.comments} </p>
                        <p>----------------------------------------------------------------------------</p>
                    </div>
                
                    ))
             }
            </MDBModalBody>

            <MDBModalFooter>
              <MDBBtn color='secondary' onClick={toggleShow}>
                Close
              </MDBBtn>
              
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal> */}
           <MDBBtn onClick={() => setScrollableModal(!scrollableModal)}>Reviews</MDBBtn>

<MDBModal show={scrollableModal} setShow={setScrollableModal} tabIndex='-1'>
  <MDBModalDialog scrollable>
    <MDBModalContent>
      <MDBModalHeader>
        <MDBModalTitle style={{color:'#3DC2CF ',fontWeight:700 }}>Reviews</MDBModalTitle>
        <MDBBtn
          className='btn-close'
          color='none'
          onClick={() => setScrollableModal(!scrollableModal)}
        ></MDBBtn>
      </MDBModalHeader>
      <MDBModalBody>
      {
                 day?.map(item=>(
                    <div>
                        <p style={{textAlign:'start'}}>Name : {item.patient_name}</p>
                        <p style={{textAlign:'start'}}>Date : {item.date}</p>
                        <p style={{textAlign:'start'}}>Rating : {item.rating}</p>
                        <p style={{textAlign:'start'}}>Comments : {item.comments} </p>
                        <p>----------------------------------------------------------------------------</p>
                    </div>
                
                    ))
             }
      </MDBModalBody>
      <MDBModalFooter>
        <MDBBtn color='secondary' onClick={() => setScrollableModal(!setScrollableModal)}>
          Close
        </MDBBtn>
      
      </MDBModalFooter>
    </MDBModalContent>
  </MDBModalDialog>
</MDBModal>
    </div>
  )
}

export default DocReview