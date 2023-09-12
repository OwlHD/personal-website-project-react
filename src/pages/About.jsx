import ImageGallery from "../components/ImageGallery"
import aboutImg1 from '../images/ygo.jpg'
import aboutImg2 from '../images/zuramoon.jpg'
import aboutImg3 from '../images/skates.jpg'

export default function About() {
    return (
        <div className="flex">
            <div className="leftContent">
                <div className="mainDiv">
                <img src={aboutImg1} className="aboutImg" alt="collection image" />
                    <h2>Collecting</h2>
                    <p>From plushies to apparel to trading cards to games, I love collecting things from various fandoms.</p>
                </div>
                <div className="mainDiv">
                <img src={aboutImg2} className="aboutImg" alt="collection image" />
                    <h2>Photography</h2>
                    <p>
                        One of my favorite things to do when exploring new places or engaging in any activies is to take pictures.  I will usually use plushies to help set the mood
                        and allow for a bit of extra creativity! 
                    </p>
                </div>
                <div className="mainDiv">
                <img src={aboutImg3} className="aboutImg" alt="collection image" />
                    <h2>Inline Skating</h2>
                    <p>
                        Exercise is important to living a healthy life, and my favorite way to stay fit is inline skating.  Feeling the breeze on your face while cruising 
                        down the streets is an amazing feeling and is great for resetting your mindset and starting fresh.
                    </p>
                </div>
            </div>
            <ImageGallery />
        </div>
    )
}