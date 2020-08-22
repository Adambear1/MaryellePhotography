import React, { useState } from "react";
import API from "../../utils/API";

function ServicesSchedulingForm() {
  const [obj, setObj] = useState({});
  const [bool, setBool] = useState(false);

  function onChange(e) {
    setObj({
      ...obj,
      scheduleDate: sessionStorage.getItem("date"),
      [e.target.name]: e.target.value,
    });
    obj["fullName"] && obj["phoneNumber"] && obj["contactMethod"]
      ? setBool(true)
      : setBool(false);
  }
  function onSubmit(e) {
    e.preventDefault();
    API.postInquire(obj)
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <form onSubmit={onSubmit}>
      <fieldset className="uk-fieldset">
        <legend className="uk-legend uk-margin-bottom">Details</legend>
        <div>
          <input
            onChange={onChange}
            className="uk-input uk-margin-bottom"
            name="fullName"
            type="text"
            placeholder="Full Name"
          />
          <input
            onChange={onChange}
            className="uk-input uk-margin-bottom"
            name="phoneNumber"
            type="text"
            placeholder="Phone Number"
          />
          <input
            onChange={onChange}
            className="uk-input uk-margin-bottom"
            name="email"
            type="email"
            placeholder="Email"
          />
        </div>

        <div className="uk-margin">
          <select
            className="uk-select"
            name="contactMethod"
            onChange={onChange}
          >
            <option default="true">Contact Method</option>
            <option value="email">Email</option>
            <option value="text">Text</option>
            <option value="phoneCall">Phone Call</option>
          </select>
        </div>

        <div className="uk-margin">
          <textarea
            onChange={onChange}
            name="additionalDetails"
            className="uk-textarea"
            rows="5"
            placeholder="Additional Details"
          ></textarea>
        </div>
        {bool === true ? (
          <div className="uk-flex uk-flex-center">
            <button
              className="uk-button uk-button-default uk-margin-bottom"
              onSubmit={onSubmit}
            >
              Submit!
            </button>
          </div>
        ) : null}
      </fieldset>
    </form>
  );
}

export default ServicesSchedulingForm;
