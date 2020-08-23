import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import ServicesSchedulingForm from "../ServicesSchedulingForm";
import "./styles.css";

function ServicesScheduling() {
  const [date, setDate] = useState(new Date());
  function onChange(d) {
    sessionStorage.clear();
    setTimeout(() => {
      setDate(d);
      sessionStorage.setItem("date", date);
    });
  }

  return (
    <>
      <h1 className="uk-heading-line uk-text-center" id="scheduling">
        <span>Schedule By Appointment</span>
      </h1>
      <div
        className="uk-child-width-expand@s uk-margin-top margin-bottom-scheduling"
        uk-grid="true"
      >
        <div className="uk-flex uk-flex-center">
          {" "}
          <Calendar onChange={onChange} value={date} />
        </div>
        <div className="uk-flex uk-flex-center">
          <ServicesSchedulingForm />
        </div>
      </div>
    </>
  );
}

export default ServicesScheduling;
