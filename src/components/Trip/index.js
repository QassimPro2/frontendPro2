import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Slide } from "react-slideshow-image";
import "./style.css";
import axios from "axios";

const slideImages = [
  "https://www.okaz.com.sa/uploads/images/2020/06/09/1579215.jpg",
  "https://cnn-arabic-images.cnn.io/cloudinary/image/upload/w_1920,c_scale,q_auto/cnnarabic/2021/05/04/images/184127.jpg",
  "https://www.al-madina.com/uploads/images/2021/06/02/1897304.jpg",
];

const BASE_URL = "http://localhost:5000";

export default function Trip() {
  const id = useParams().id;
  const [item, setItem] = useState([]);

  useEffect(() => {
    getItem();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    console.log(item);
    // eslint-disable-next-line
  }, [item]);

  const getItem = async () => {
    const items = await axios.get(`${BASE_URL}/journey/getInfo/${id}`);
    setItem(items.data);
  };

  return (
    <>
      <div className="tripContainer">
        {/* <select name="days" id="days">
          <option value="hotel">مكان الإقامة</option>
          <option value="1">خطة اليوم الأول</option>
          <option value="2">خطة اليوم الثاني</option>
          <option value="3">خطة اليوم الثالث</option>
        </select> */}
        <br />
        <br />
        <hr />
        <br />
        {item.length !== 0 ? (
          <>
            <div className="tripBox1">
              <div className="tripBox1C1">
                <h1>{item[1].name}</h1>
                <p>{item[1].desc}</p>
              </div>

              <div className="tripBox1C2">
                <img
                  src={item[1].imges[0]}
                  alt="r7lty"
                  width="40%"
                  height="40%"
                />
              </div>
            </div>
            <br />
            <br />
            <hr />
            <br />
            {/* <div className="slideSizeTrip">
              <Slide easing="ease">
                <div className="each-slide slideRepeatTrip">
                  <div style={{ backgroundImage: `url(${item[1].imges[0]})` }}>
                    <span>Slide 1</span>
                  </div>
                </div>
                <div className="each-slide slideRepeatTrip">
                  <div style={{ backgroundImage: `url(${item[1].imges[1]})` }}>
                    <span>Slide 2</span>
                  </div>
                </div>
                <div className="each-slide slideRepeatTrip">
                  <div style={{ backgroundImage: `url(${item[1].imges[2]})` }}>
                    <span>Slide 3</span>
                  </div>
                </div>
                <div className="each-slide slideRepeatTrip">
                  <div style={{ backgroundImage: `url(${item[1].imges[3]})` }}>
                    <span>Slide 3</span>
                  </div>
                </div>
                <div className="each-slide slideRepeatTrip">
                  <div style={{ backgroundImage: `url(${item[1].imges[4]})` }}>
                    <span>Slide 3</span>
                  </div>
                </div>
              </Slide>
            </div> */}
            {/* <div className="infoTrip">
              <h1>{item[1].name}</h1>
              <p>{item[1].desc}</p>
            </div> */}
            {item[2].map((elem) => {
              return (
                <>
                  <div className="tripBox1">
                    <div className="tripBox1C1">
                      <h1>{elem.name}</h1>
                      <p>
                        {elem.desc}
                        <br />
                      </p>
                    </div>

                    <div className="tripBox1C2">
                      <img
                        src={elem.imges[0]}
                        alt="r7lty"
                        width="40%"
                        height="40%"
                      />
                    </div>
                  </div>

                  <br />
                  <br />
                  <hr />
                  <br />
                </>
              );
            })}
            <span className="text2"> التكلفة: </span>{" "}
            <span className="text3"> {item[0].cost} </span>
            <div className="btns">
              <button
                className="loginBtn"
                onClick={() => {
                  //navigate("/login");
                }}
              >
                إضافة الى المفضلة
              </button>

              <button
                className="signupBtn"
                onClick={() => {
                  //navigate("/login");
                }}
              >
                إرسال الى بريدك الإلكتروني
              </button>
            </div>
          </>
        ) : (
          <h1>جاري التحميل</h1>
        )}
      </div>
    </>
  );
}
