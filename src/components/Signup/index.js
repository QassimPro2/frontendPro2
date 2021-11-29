import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";
import axios from "axios";

const BASE_URL = "http://localhost:5000";

export default function Signup() {
  const [inputs, setInputs] = useState({});
  const navigate = useNavigate();

  const handleChange = (event) => {
    const name = event.target.id;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const signupForm = (e) => {
    e.preventDefault();

    if (inputs.username.length == 0) {
      alert("خانة اسم المستخدم فارغة");
    } else if (inputs.email.length == 0) {
      alert("خانة الإيميل فارغة");
    } else if (inputs.pass1.length == 0) {
      alert("خانة كلمة المرور فارغة");
    } else if (inputs.username.length < 4 && 21 > inputs.username.length)
      alert("اسم المستخدم لابد أن يكون مابين 4 الى 20 حرف");
    else if (inputs.pass1 !== inputs.pass2) alert("كلمات المرور غير متطابقة");
    else {
      axios
        .post(`${BASE_URL}/user/signup`, {
          email: inputs.email,
          username: inputs.username,
          pass: inputs.pass1,
        })
        .then(function (response) {
          if (response.data === "تم التسجيل بنجاح") {
            //alert(response);
            alert(response.data);
            navigate(`/`);
          } else {
            alert(response.data);
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  return (
    <div className="backgroundRL">
      <div className="signupForm">
        <form>
          <label for="username">اسم المستخدم</label>
          <br />
          <input
            type="text"
            id="username"
            onChange={handleChange}
            className="labelsLogin"
          ></input>
          <br />
          <label for="email">الإيميل</label>
          <br />
          <input
            type="text"
            id="email"
            onChange={handleChange}
            className="labelsLogin"
          ></input>
          <br />
          <label for="pass1">كلمة المرور</label>
          <br />
          <input
            type="password"
            id="pass1"
            onChange={handleChange}
            className="labelsLogin"
          ></input>
          <br />
          <label for="pass2">أعد كتابة كلمة المرور</label>
          <br />
          <input
            type="password"
            id="pass2"
            onChange={handleChange}
            className="labelsLogin"
          ></input>
          <br />
          <input
            type="submit"
            value="الإنضمام"
            className="loginBtn2"
            onClick={(e) => signupForm(e)}
          ></input>
        </form>
      </div>
    </div>
  );
}
