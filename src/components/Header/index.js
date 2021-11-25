import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";

export default function Header() {
  const navigate = useNavigate();

  return (
    <>
      <div className="nav">
        <span>
          <button
            className="loginBtn"
            onClick={() => {
              navigate("/login");
            }}
          >
            تسجيل الدخول
          </button>
          <button
            className="signupBtn"
            onClick={() => {
              navigate("/signup");
            }}
          >
            التسجيل
          </button>
        </span>

        <span className="logo">وجهتي </span>

        <span className="headers">
          <Link to="/" className="link">
            الرئيسية
          </Link>
          <Link to="/trips" className="link">
            {" "}
            الرحلات{" "}
          </Link>
          <Link to="/myplan" className="link">
            خطط لرحلتك
          </Link>
        </span>
      </div>
    </>
  );
}
