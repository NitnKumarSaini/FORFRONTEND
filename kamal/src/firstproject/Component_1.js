import React from 'react';
import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';

export default function COMPONENT1() {
  return (

    <MDBCarousel showControls fade>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={1}
        src='https://i.pinimg.com/originals/43/7c/62/437c62b5ae94a51b655c9d9c52c9013f.jpg'
        alt='...'style={{width:"200px", height:"600px"}}
      />
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={2}
        src='https://images.cntechpost.com/2020/11/9b1c793e0b8064b75df7e90fc9fe647c.jpg'
        alt='...'
        style={{width:"200px", height:"600px"}}
      />
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={3}
        src='https://i1.wp.com/www.aftvnews.com/wp-content/uploads/2015/10/bannershop-options.jpg?w=1920&quality=100'
        style={{width:"200px", height:"600px"}}
        alt='...'
      />
    </MDBCarousel>

  );
}