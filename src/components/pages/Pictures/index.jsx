import { Link } from 'react-router-dom';
import './styles.css';
import mot1 from 'assets/img/mot1.jpg';
import mot2 from 'assets/img/mot2.jpg';
import mot3 from 'assets/img/mot3.jpg';
import mot4 from 'assets/img/mot4.jpg';
import mot5 from 'assets/img/mot5.jpg';
import mot6 from 'assets/img/mot6.jpg';
import mot7 from 'assets/img/mot7.jpg';
import mot8 from 'assets/img/mot8.jpg';
import mot9 from 'assets/img/mot9.jpg';

import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const slideImages = [
  { url: mot1 },
  { url: mot2 },
  { url: mot3 },
  { url: mot4 },
  { url: mot5 },
  { url: mot6 },
  { url: mot7 },
  { url: mot8 },
  { url: mot9 },
]

const Slideshow = () => {
  return (
    <div className="slide-container">
      <Slide transitionDuration={500}>
        {slideImages.map((slideImage, index) => (
            <img src={slideImage.url} className="d-block w-100" alt="Image 9" />
        ))}
      </Slide>
    </div>
  )
}

function Pictures() {
  return (
    <div id="pictures" className="carousel slide" data-ride="carousel">
      <h2>Նկարներ</h2>
      <Slideshow />
      <button className="butt">
        <Link to="/motivation">Վերադառնալ</Link>
      </button>
    </div>
  );
};

export default Pictures;
