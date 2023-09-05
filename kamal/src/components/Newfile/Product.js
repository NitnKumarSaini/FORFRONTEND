import React from 'react';
import { useSelector , useDispatch} from 'react-redux';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn,
    MDBRow,
    MDBCol,
    MDBContainer,
    
} from 'mdb-react-ui-kit';
// import {  increment } from '../../Slices/ProductSlice';


export default function Product() {

  const dispatch = useDispatch()
  
  const items =useSelector((state)=>state.Allcartvalue.midelwear)
    


    return (

      // console.log(items)
      <>

<br></br>


  
<div className='m-3'>
    <MDBContainer >
    <MDBRow className='mb-3' style={{gap:"45px"}} >
   
  {
    items.map((li, key)=>(
    
      <MDBCol className='col-lg-3.5' style={{border:"2px solid lightgray"   }}>
      <MDBCard >
     <MDBCardImage  position='top' key={key} src={li.image} alt='...' style={{width:"100% ", height:"100%"}} />
     <MDBCardBody>
     <MDBCardTitle>{li.name}</MDBCardTitle>
       <MDBCardTitle>{li.title}</MDBCardTitle>
       <MDBCardText>
         Some quick example text to build on the card .
       </MDBCardText>
       <MDBCardTitle>{li.price}</MDBCardTitle>
<MDBCardTitle>{li.model}</MDBCardTitle>
       {/* <MDBBtn onClick={()=>dispatch(increment(li))} >Add to Cart</MDBBtn> */}
       
       

     </MDBCardBody>
     </MDBCard>
     </MDBCol>
     ))}
       </MDBRow>

  
   </MDBContainer>             
   </div>
            </>
            )
    
    
         }

    




