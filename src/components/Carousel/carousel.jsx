import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import carousel1 from '../../assets/images/carousel1.png';
import carousel2 from '../../assets/images/carousel2.png';
import carousel3 from '../../assets/images/carousel3.png';

const MyCarousel = () => {
    return (
        <Carousel autoPlay interval={5000} infiniteLoop useKeyboardArrows dynamicHeight>
            <div>
                <img src={carousel1} alt="Imagem 1" />
            </div>
            <div>
                <img src={carousel2} alt="Imagem 2" />
            </div>
            <div>
                <img src={carousel3} alt="Imagem 3" />
            </div>
        </Carousel>
    );
};

export default MyCarousel;
