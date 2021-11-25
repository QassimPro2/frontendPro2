import React from "react";
import "./style.css";

export default function Signup() {
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
        <label for="name" className="labelsLogin">
          أعد كتابة كلمة المرور
        </label>
        <br />
        <input type="password" id="name"></input>
        <br />
        <input type="submit" value="الإنضمام" className="loginBtn2"></input>
      </form>
    </div>
  );
}
