import Carousel from 'react-bootstrap/Carousel';
import Gallery1 from '../images/concert1.jpg'
import Gallery2 from '../images/kekedrip1.jpg'
import Gallery3 from '../images/miarina3.jpg'
import Gallery4 from '../images/movietime.jpg'
import Gallery5 from '../images/nesobear.jpg'
import Gallery6 from '../images/rinachristmas.jpg'
import Gallery7 from '../images/rubytotsugeki.jpg'
import Gallery8 from '../images/rubytotsugeki2.jpg'
import Gallery9 from '../images/zuradog.jpg'
import Gallery10 from '../images/zuradrip.jpg'


export default function ImageGallery() {
  return (
    <Carousel interval={2000}>
      <Carousel.Item>
        <img 
            className='galleryImg'
            src={Gallery10}
            alt='react'
        />
      </Carousel.Item>
      <Carousel.Item>
        <img 
            className='galleryImg'
            src={Gallery2}
            alt='react'
        />
      </Carousel.Item>
      <Carousel.Item>
        <img 
            className='galleryImg'
            src={Gallery3}
            alt='react'
        />
      </Carousel.Item>
      <Carousel.Item>
        <img 
            className='galleryImg'
            src={Gallery4}
            alt='react'
        />
      </Carousel.Item>
      <Carousel.Item>
        <img 
            className='galleryImg'
            src={Gallery5}
            alt='react'
        />
      </Carousel.Item>
      <Carousel.Item>
        <img 
            className='galleryImg'
            src={Gallery6}
            alt='react'
        />
      </Carousel.Item>
      <Carousel.Item>
        <img 
            className='galleryImg'
            src={Gallery7}
            alt='react'
        />
      </Carousel.Item>
      <Carousel.Item>
        <img 
            className='galleryImg'
            src={Gallery8}
            alt='react'
        />
      </Carousel.Item>
      <Carousel.Item>
        <img 
            className='galleryImg'
            src={Gallery9}
            alt='react'
        />
      </Carousel.Item>
      <Carousel.Item>
        <img 
            className='galleryImg'
            src={Gallery1}
            alt='react'
        />
      </Carousel.Item>
    </Carousel>
  );
}