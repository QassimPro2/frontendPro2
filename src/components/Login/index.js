import React from "react";
import "./style.css";

export default function Login() {
  return (
    <div className="loginForm">
      <form>
        <label for="name" className="labelsLogin">
          الإيميل
        </label>
        <br />
        <input type="text" id="name"></input>
        <br />
        <label for="name" className="labelsLogin">
          كلمة المرور
        </label>
        <br />
        <input type="password" id="name"></input>
        <br />
        <input type="submit" value="تسجيل الدخول" className="loginBtn2"></input>
      </form>
    </div>
  );
}
