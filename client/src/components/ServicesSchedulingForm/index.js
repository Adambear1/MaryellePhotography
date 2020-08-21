import React from "react";

function ServicesSchedulingForm() {
  return (
    <form>
      <fieldset class="uk-fieldset">
        <legend class="uk-legend">Legend</legend>

        <div class="uk-margin">
          <input class="uk-input" type="text" placeholder="Input" />
        </div>

        <div class="uk-margin">
          <select class="uk-select">
            <option>Option 01</option>
            <option>Option 02</option>
          </select>
        </div>

        <div class="uk-margin">
          <textarea
            class="uk-textarea"
            rows="5"
            placeholder="Textarea"
          ></textarea>
        </div>
      </fieldset>
    </form>
  );
}

export default ServicesSchedulingForm;
