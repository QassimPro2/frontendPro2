import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";

export default function Header() {
  const navigate = useNavigate();
  const [username, setUsername] = React.useState(
    localStorage.getItem("username") || ""
  );

  React.useEffect(() => {
    console.log(username);
  }, [username]);

  const selectChoice = (e) => {
    if (e.target.value === 1) {
    } else if (e.target.value === "2") {
      //localStorage.setItem("username", "");
      console.log(e.target.value);
      setUsername("");
    }
  };

  return (
    <>
      <div className="nav">
        {username == "" ? (
          <span id="btns">
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
        ) : (
          <label className="dropdown menu">
            <select
              onChange={(e) => {
                selectChoice(e);
              }}
            >
              <option>{username}</option>
              <option value="2">تسجيل الخروج</option>
            </select>
          </label>
        )}
        <span className="logoName">
          <span className="logo">وجهتي </span>
        </span>
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
