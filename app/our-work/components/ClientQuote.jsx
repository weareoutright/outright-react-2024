import React from "react";

const ClientQuote = ({ clientQuote, waypoint }) => {
  const { quote, speaker } = clientQuote;
  const { name, title, org } = speaker;

  if (quote) {
    return (
      <div className="ClientQuote" data-waypoint={waypoint}>
        <div className="open-quotation">,,</div>
        <div className="quote-body">
          <h2 className="quote-text">{quote}</h2>
          <small>
            {name}, {title}, {org}
          </small>
        </div>
        <div className="close-quotation">,,</div>
      </div>
    );
  } else {
    return null;
  }
};

export default ClientQuote;
