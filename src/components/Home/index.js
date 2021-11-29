import React from "react";
import { Slide, Zoom } from "react-slideshow-image";
import "./style.css";
//import Slideshow from "react-native-image-slider-show";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Header from "./../Header";

const slideImages = [
  "https://www.ukinarabic.co.uk/wp-content/uploads/2021/03/man-791049_1920.jpg",
  "https://www.aleqt.com/sites/default/files/rbitem/2020/01/3/1238231-160127220.jpg",
  "https://www.aleqt.com/sites/default/files/rbitem/2020/01/3/1238231-160127220.jpg",
];

export default function Home() {
  return (
    <>
      <div className="imageHome">
        {/* <Header className="headerHome" /> */}

        <div className="imageHomeContent">
          <h1
            style={{ fontSize: "50px" }}
            // style={
            //   ({ borderBottom: "5px solid white" },
            //   { borderTop: "5px solid white" })
            // }
          >
            ابها البهية
          </h1>
          <h1>!بدأ موسم ابها وجهزنا لك وجهتك وراح تكون غير</h1>
        </div>
      </div>

      <h1 className="homeText1">الرحلات</h1>

      <div className="homeBox1">
        <div className="homeBox1C1">
          <h1>وجهتي</h1>
          <p>
            ندري انك تبي ترفه نفسك او احبابك بوجهة سياحية بدون بحث عن فندق او
            تخطيط لطلعة او اماكن ترفيهة وحتى قلق الميزانية عشان كذا حنا جهزنا لك
            وجهة سياحية متكاملة مع مين ماكانت او تكون
          </p>

          <button className="homeBox1C1B1"> أعرف أكثر</button>
        </div>

        <div className="homeBox1C2">
          <img src={slideImages[0]} alt="r7lty" width="40%" height="40%" />
        </div>
      </div>

      <div className="homeBox2">
        <div className="homeBox2C1">
          <img src={slideImages[1]} alt="r7lty" width="60%" height="60%" />
        </div>

        <div className="homeBox2C2">
          <h1>شارك وجهتك الخاصة</h1>
          <p>
            عطنا وجهتك اللي كانت في غاية المتعة مع اهلك او زوجتك او اصدقائك
            وشاركها معنا
          </p>
          <button className="homeBox2C1B1"> أعرف أكثر</button>
        </div>
      </div>
      <h1 className="homeText1">من نحن</h1>
      <div className="homeBox1" style={{ textAlign: "center" }}>
        <p>
          تطبيق وجهتي هو تطبيق سياحي يساعدك انك تلقى وجهتك بحيث يوفر لك دليل
          سياحي متكامل يناسبك ويريح بالك من عناءالبحث
        </p>
      </div>

      <h1 className="homeText1">لماذا نحن</h1>
      <div className="homeBox1" style={{ textAlign: "center" }}>
        <p>
          لأننا نقدر حبك للسياجة ونبي نوفر وقتك ونحافظ على ميزانيتك نحن هنا نسعد
          بخدمتك ونكون سبب في سياحتك وانت بأتم الراحة والأطئنان في اكتمال وجهتك
          من بعد تعب عمل او تقضيها شهر عسل او رحلة عائلية او رحلة شبابية او رحلة
          استجماء
        </p>
      </div>
    </>
  );
}

/*

<div>
        <Carousel autoPlay="true" className="slideSize">
          <div>
            <span className="legend">Legend 2</span>
            <img src={slideImages[0]} />
          </div>
          <div>
            <img src={slideImages[1]} />
          </div>
          <div>
            <img src={slideImages[2]} />
            <span className="legend">Legend 3</span>
          </div>
        </Carousel>
      </div>



*/
