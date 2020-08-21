import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import ServicesSchedulingForm from "../ServicesSchedulingForm";

function ServicesScheduling() {
  const [date, setDate] = useState(new Date());
  function onChange(date) {
    setDate(date);
  }

  return (
    <>
      <h1 class="uk-heading-line uk-text-center">
        <span>Schedule By Appointment</span>
      </h1>
      <div uk-grid="true">
        <div>
          {" "}
          <Calendar onChange={onChange} value={date} />
        </div>
        <div>
          <ServicesSchedulingForm />
        </div>
      </div>
    </>
  );
}

export default ServicesScheduling;
