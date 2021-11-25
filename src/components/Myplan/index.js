import React from "react";

export default function Myplan() {
  return (
    <div>
      {/* <p>
        التكلفة المتوقعة من <input type="number" />
        الى <input type="number" />
      </p> */}
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
      <p>اسم الفندق</p>
      <select name="catg" id="catg">
        <option value="1">1اسم</option>
        <option value="2">2اسم</option>
        <option value="3">3اسم</option>
        <option value="4">4اسم</option>
        <option value="5">5اسم</option>
      </select>

      <p>ترتيب الرحلات لكل يوم</p>
      <select name="day" id="day">
        <option value="1">1</option>
        <option value="3">2</option>
        <option value="5">3</option>
      </select>

      <p>خطة الرحلة لكل يوم</p>
      <select name="day" id="day">
        <option value="1">1رحلة</option>
        <option value="3">2رحلة</option>
      </select>
    </div>
  );
}
