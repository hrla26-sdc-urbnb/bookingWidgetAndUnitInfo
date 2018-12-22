import React from 'react';

const Descriptions = ({ unitData }) => {
  let {
    aboutYourUnit,
    whatGuestsCanAccess,
    yourInteractionWithGuests,
    otherThingsToNote,
  } = unitData;
  return(
    <div>
        <div className="aboutUnit">
          <div>The Space</div>
          <div>{aboutYourUnit}</div>
        </div>

        <div className="access">
          <div>Guest Access</div>
          <div>{whatGuestsCanAccess}</div>
        </div>

        <div className="interaction">
          <div>Interaction with Guests</div>
          <div>{yourInteractionWithGuests}</div>
        </div>

        <div className="otherNote">
          <div>Other Things to Note</div>
          <div>{otherThingsToNote}</div>
        </div>
    </div>
  );
};

export default Descriptions;