import React from "react";

function BookNow() {
  return (
    <div className="uk-section uk-section-large uk-section-muted">
      <div className="uk-container">
        <h3 className="uk-text-center">Book Now</h3>

        <div className="uk-grid-match uk-child-width-1-3@m" uk-grid="true">
          <div></div>
          <div>
            <p className="uk-text-center">
              The quickest way to schedule an appointment, rather for a last
              minute senior photo, or for a wedding in the future, please call
              me directly. I am always flexible and have never backed down from
              doing what is the best for my clients. There are no dumb
              questions, I am always here for you ~
            </p>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default BookNow;
