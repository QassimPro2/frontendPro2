import React from "react";
import { Slide } from "react-slideshow-image";
import "./style.css";

const slideImages = [
  "https://www.okaz.com.sa/uploads/images/2020/06/09/1579215.jpg",
  "https://cnn-arabic-images.cnn.io/cloudinary/image/upload/w_1920,c_scale,q_auto/cnnarabic/2021/05/04/images/184127.jpg",
  "https://www.al-madina.com/uploads/images/2021/06/02/1897304.jpg",
];

export default function Trip() {
  return (
    <>
      <div className="tripContainer">
        <select name="days" id="days">
          <option value="hotel">مكان الإقامة</option>
          <option value="1">خطة اليوم الأول</option>
          <option value="2">خطة اليوم الثاني</option>
          <option value="3">خطة اليوم الثالث</option>
        </select>

        <br />
        <br />
        <hr />
        <br />

        <div className="slideSizeTrip">
          <Slide easing="ease">
            <div className="each-slide slideRepeatTrip">
              <div style={{ backgroundImage: `url(${slideImages[0]})` }}>
                <span>Slide 1</span>
              </div>
            </div>
            <div className="each-slide slideRepeatTrip">
              <div style={{ backgroundImage: `url(${slideImages[1]})` }}>
                <span>Slide 2</span>
              </div>
            </div>
            <div className="each-slide slideRepeatTrip">
              <div style={{ backgroundImage: `url(${slideImages[2]})` }}>
                <span>Slide 3</span>
              </div>
            </div>
          </Slide>
        </div>

        <div className="infoTrip">
          <h1>اسم الفندق</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tellus
            nibh, ultricies a ex at, pharetra hendrerit dolor. Quisque fringilla
            mi quis ipsum fermentum{" "}
          </p>
        </div>

        <div className="btns">
          <button
            className="btn1"
            onClick={() => {
              //navigate("/login");
            }}
          >
            إضافة الى المفضلة
          </button>

          <button
            className="btn1"
            onClick={() => {
              //navigate("/login");
            }}
          >
            إرسال الى بريدك الإلكتروني
          </button>
        </div>
      </div>
    </>
  );
}
