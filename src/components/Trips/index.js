import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./style.css";
import axios from "axios";
import { AiFillHeart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import Select from "react-select";

const BASE_URL = "http://localhost:5000";

const options = [
  { value: "abha", label: "أبها" },
  { value: "makkah", label: "مكة" },
  { value: "jeddah", label: "جدة" },
];

export default function Trips() {
  const navigate = useNavigate();
  const [items, setItems] = useState([]);
  const [items2, setItems2] = useState([]);
  const [price, setPrice] = useState(1000);

  //setValues
  const [min, setMin] = useState(1000000);
  const [max, setMax] = useState(0);
  const [cities, setCities] = useState([]);
  const [catg, setCatg] = useState([]);
  const [days, setDays] = useState([]);
  const [change, setChange] = useState(0);

  useEffect(() => {
    getAllItems();
    getAllItems2();

    // setValues();
  }, []);

  const getAllItems = async () => {
    const items = await axios.get(`${BASE_URL}/journey/get`);
    setItems(items.data);
  };

  const getAllItems2 = async () => {
    const items = await axios.get(`${BASE_URL}/journey/get`);
    setItems2(items.data);
  };

  useEffect(() => {
    setValues();
  }, [items2]);

  const setValues = async () => {
    let citiesOption = ["الكل"];
    let catgOption = ["الكل"];
    let daysOption = ["الكل"];
    items2.forEach((elem) => {
      if (elem.cost < min) setMin(elem.cost);
      if (elem.cost > max) setMax(elem.cost);
      citiesOption.push(elem.city);
      catgOption.push(elem.category);
      daysOption.push(elem.days);
    });

    citiesOption = [...new Set(citiesOption)];
    setCities(citiesOption);

    catgOption = [...new Set(catgOption)];
    setCatg(catgOption);

    daysOption = [...new Set(daysOption)];
    setDays(daysOption);

    //console.log(citiesOption);
  };

  const itemDetails = (id) => {
    navigate(`/trip/${id}`);
  };

  const setPriceBar = (e) => {
    setPrice(e.target.value);
  };

  const selectCities = async (e) => {
    console.log(e.target.value);
    if (e.target.value === "الكل") {
      getAllItems();
    } else {
      const items = await axios.get(
        `${BASE_URL}/journey/getJourneyByCity/${e.target.value}`
      );
      setItems(items.data);
    }
  };

  const selectCatg = async (e) => {
    console.log(e.target.value);
    if (e.target.value === "الكل") {
      getAllItems();
    } else {
      const items = await axios.get(
        `${BASE_URL}/journey/getJourneyByCatg/${e.target.value}`
      );
      setItems(items.data);
    }
  };

  const selectDays = async (e) => {
    console.log(e.target.value);
    if (e.target.value === "الكل") {
      getAllItems();
    } else {
      const items = await axios.get(
        `${BASE_URL}/journey/getJourneyByDays/${e.target.value}`
      );
      setItems(items.data);
    }
  };

  return (
    <>
      {items.length !== 0 ? (
        <div className="main">
          <div className="itemsContainer">
            {items.map((item) => (
              <div className="itemContainer">
                <AiFillHeart />
                <span className="text1">{item.name}</span>
                <br />
                <span className="text2">من </span>
                <span>
                  {" "}
                  <select name="city" id="cities">
                    {item.city === "أبها" ? (
                      <>
                        <option value="makkah">مكة</option>
                        <option value="Riyadh">الرياض</option>
                        <option value="jeddah">جدة</option>
                        <option value="Ala">العلا</option>
                      </>
                    ) : item.city === "مكة" ? (
                      <>
                        <option value="abha">أبها</option>
                        <option value="Riyadh">الرياض</option>
                        <option value="jeddah">جدة</option>
                        <option value="Ala">العلا</option>
                      </>
                    ) : item.city === "الرياض" ? (
                      <>
                        <option value="abha">أبها</option>
                        <option value="makkah">مكة</option>
                        <option value="jeddah">جدة</option>
                        <option value="Ala">العلا</option>
                      </>
                    ) : item.city === "جدة" ? (
                      <>
                        <option value="abha">أبها</option>
                        <option value="makkah">مكة</option>
                        <option value="Riyadh">الرياض</option>
                        <option value="Ala">العلا</option>
                      </>
                    ) : (
                      <>
                        <option value="abha">أبها</option>
                        <option value="makkah">مكة</option>
                        <option value="jeddah">جدة</option>
                        <option value="Riyadh">الرياض</option>
                      </>
                    )}
                  </select>
                </span>
                <span className="text2"> الى </span>{" "}
                <span className="text2"> {item.city} </span>
                <br />
                <button
                  className="showBtn"
                  onClick={() => {
                    itemDetails(item._id); //text2;
                  }}
                >
                  تفاصيل أكثر
                </button>
                <span className="text2"> نوع الرحلة: </span>{" "}
                <span className="text3"> {item.category} </span>
                <span className="text2"> عدد الأيام: </span>{" "}
                <span className="text3"> {item.days} </span>
                <span className="text2"> التكلفة: </span>{" "}
                <span className="text3"> {item.cost} </span>
              </div>
            ))}
          </div>

          <div className="catgContainer">
            <p>
              {price} : التكلفة المتوقعة
              <br />
              <input
                type="range"
                min={1000}
                max={5000}
                step="100"
                id="input"
                onChange={(e) => {
                  setPriceBar(e);
                }}
              />
            </p>
            <p>المدينة</p>
            <select
              name="city"
              id="cities"
              onChange={(e) => {
                selectCities(e);
              }}
            >
              {cities.map((item) => {
                return <option value={item}>{item}</option>;
              })}
            </select>
            <p>نوع الرحلة</p>
            <select
              name="type"
              id="type"
              onChange={(e) => {
                selectCatg(e);
              }}
            >
              {catg.map((item) => {
                return <option value={item}>{item}</option>;
              })}
            </select>
            <p>عدد الأيام</p>
            <select
              name="day"
              id="day"
              onChange={(e) => {
                selectDays(e);
              }}
            >
              {days.map((item) => {
                return <option value={item}>{item}</option>;
              })}
            </select>
            {/* <p>تصنيف الفندق</p>
            <select name="catg" id="catg">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select> */}
          </div>
        </div>
      ) : (
        <h1>جاري التحميل</h1>
      )}
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
