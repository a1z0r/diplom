import React, { useState } from "react";
import seasonBg from "../assets/img/sezon.png";
import seasonBg2 from "../assets/img/sezon2.png";
import seasonBg3 from "../assets/img/sezon3.png";
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';


function Seasoncase() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block carouselStyle"
                    src={seasonBg}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block carouselStyle"
                    src={seasonBg2}
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block carouselStyle"
                    src={seasonBg3}
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    );
}

export default Seasoncase;
//function Seasoncase(){
//   return(
// <>
//<div className="seasonBgStyle">
//   <img src={seasonBg} alt="" />
//           </div>
//        </>
//   );
//}