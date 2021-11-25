import React from "react";
import { Slide } from "react-slideshow-image";
import "./style.css";

const slideImages = [
  "https://www.okaz.com.sa/uploads/images/2020/06/09/1579215.jpg",
  "https://cnn-arabic-images.cnn.io/cloudinary/image/upload/w_1920,c_scale,q_auto/cnnarabic/2021/05/04/images/184127.jpg",
  "https://www.al-madina.com/uploads/images/2021/06/02/1897304.jpg",
];

export default function Home() {
  return (
    <>
      <div className="slideSize">
        <Slide easing="ease">
          <div className="each-slide">
            <div style={{ backgroundImage: `url(${slideImages[0]})` }}>
              <span>Slide 1</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{ backgroundImage: `url(${slideImages[1]})` }}>
              <span>Slide 2</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{ backgroundImage: `url(${slideImages[2]})` }}>
              <span>Slide 3</span>
            </div>
          </div>
        </Slide>
      </div>
    </>
  );
}
