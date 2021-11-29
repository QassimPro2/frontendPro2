import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";
import axios from "axios";

const BASE_URL = "http://localhost:5000";

export default function Login() {
  const [inputs, setInputs] = useState({});
  const navigate = useNavigate();

  const handleChange = (event) => {
    const name = event.target.id;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const loginForm = (e) => {
    e.preventDefault();

    if (inputs.usernameOrEmail.length === 0) {
      alert("خانة اسم المستخدم فارغة");
    } else if (inputs.pass.length === 0) {
      alert("خانة كلمة المرور فارغة");
    } else {
      axios
        .post(`${BASE_URL}/user/login`, {
          usernameOrEmail: inputs.usernameOrEmail,
          pass: inputs.pass,
        })
        .then(function (response) {
          if (response.data === "خطأ بمعلومات الدخول") {
            alert(response.data);
          } else {
            //alert(response);
            console.log(response.data);
            localStorage.setItem("username", response.data);
            alert("تم تسجيل الدخول بنجاح");
            navigate(`/`);
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  return (
    <div className="backgroundRL">
      <div className="loginForm">
        <form>
          <label for="usernameOrEmail">أدخل الإيميل أواسم المستخدم</label>
          <br />
          <input
            type="text"
            id="usernameOrEmail"
            onChange={handleChange}
            className="labelsLogin"
          ></input>
          <br />
          <label for="pass">كلمة المرور</label>
          <br />
          <input
            type="password"
            id="pass"
            onChange={handleChange}
            className="labelsLogin"
          ></input>
          <br />
          <input
            type="submit"
            value="تسجيل الدخول"
            className="loginBtn2"
            onClick={(e) => loginForm(e)}
          ></input>
        </form>
      </div>
    </div>
  );
}
