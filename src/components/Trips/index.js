import React from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

export default function Trips() {
  const navigate = useNavigate();

  const itemDetails = () => {
    console.log("fdd");
    navigate(`/trip`);
  };

  return (
    <>
      <div className="main">
        <div className="itemsContainer">
          <div
            className="itemContainer"
            onClick={() => {
              itemDetails();
            }}
          >
            في <span> جدة</span>
            عدد الأيام: <span>3</span>
            :التكلفة <span>2500</span>
          </div>
          <div className="itemContainer">
            في <span> جدة</span>
            عدد الأيام: <span>3</span>
            :التكلفة <span>2500</span>
          </div>
          <div className="itemContainer">
            في <span> جدة</span>
            عدد الأيام: <span>3</span>
            :التكلفة <span>2500</span>
          </div>
        </div>

        <div className="catgContainer">
          <p>
            التكلفة المتوقعة من <input type="number" />
            الى <input type="number" />
          </p>
          <p>المدينة</p>
          <select name="city" id="cities">
            <option value="abha">أبها</option>
            <option value="makkah">مكة</option>
            <option value="jeddah">جدة</option>
          </select>
          <p>نوع الرحلة</p>
          <select name="type" id="type">
            <option value="family">عائلي</option>
            <option value="single">فردي</option>
            <option value="friends">مع الأصدقاء</option>
          </select>
          <p>عدد الأيام</p>
          <select name="day" id="day">
            <option value="1">1</option>
            <option value="3">3</option>
            <option value="5">5</option>
          </select>
          <p>تصنيف الفندق</p>
          <select name="catg" id="catg">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
      </div>
    </>
  );
}

/*

  <div id="id01" class="modal">
        <div className="info">
          <h1>bhvdjhghjgf hbhbhjbhj</h1>
          <h1>bhvdjhghjgf hbhbhjbhj</h1>
          <h1>bhvdjhghjgf hbhbhjbhj</h1>
        </div>
      </div> 



<div
              onClick={() => {
                // document.getElementById("id01").style.display = "block";
              }}
            >


*/
