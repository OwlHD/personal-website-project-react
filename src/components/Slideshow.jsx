import Carousel from 'react-bootstrap/Carousel';
import ReactImg from '../images/skills/react.png'
import ExpressImg from '../images/skills/express.png'
import JavaScriptImg from '../images/skills/javascript.jpg'
import NodeImg from '../images/skills/node.jpg'
import ReactBootstrapImg from '../images/skills/reactbootstrap.png'
import PostgresqlImg from '../images/skills/postgresql.png'

export default function Slideshow() {
  return (
    <Carousel interval={2000} pause={false} indicators={false}>
      <Carousel.Item>
        <img 
            className='homeImg'
            src={ReactImg}
            alt='react'
        />
      </Carousel.Item>
      <Carousel.Item>
        <img 
            className='homeImg'
            src={ReactBootstrapImg}
            alt='react'
        />
      </Carousel.Item>
      <Carousel.Item>
        <img 
            className='homeImg'
            src={NodeImg}
            alt='react'
        />
      </Carousel.Item>
      <Carousel.Item>
        <img 
            className='homeImg'
            src={JavaScriptImg}
            alt='react'
        />
      </Carousel.Item>
      <Carousel.Item>
        <img 
            className='homeImg'
            src={ExpressImg}
            alt='react'
        />
      </Carousel.Item>
      <Carousel.Item>
        <img 
            className='homeImg'
            src={PostgresqlImg}
            alt='react'
        />
      </Carousel.Item>
    </Carousel>
  );
}