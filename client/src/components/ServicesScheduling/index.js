import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function ServicesScheduling() {
  const [date, setDate] = useState({ date: new Date() });
  function onChange(date) {
    setDate({ date });
  }

  return (
    <div>
      <h1 class="uk-heading-line uk-text-center">
        <span>Schedule By Appointment</span>
      </h1>
      <div>
        <Calendar onChange={onChange} showWeekNumbers="true" value={date} />
      </div>
    </div>
  );
}

export default ServicesScheduling;
