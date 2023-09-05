import React from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBBtn,
  MDBDropdown
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

export default function Navbar2() {
  return (
    <MDBNavbar light bgColor='light'style={{border:"12px solid lightgray"  }}>
      <MDBContainer fluid style={{ backgroundColor: "linear-gradient (red, green)"}}>
        <MDBDropdown>
        <MDBNavbarBrand>MObiles</MDBNavbarBrand>
        

        </MDBDropdown>
        <span style={{fontSize:"30px"}}>All product</span>
        <MDBBtn color='dark'>
        <Link to="/cartt">cart(0)</Link>
      </MDBBtn>
        
      </MDBContainer>
    </MDBNavbar>
  );
}