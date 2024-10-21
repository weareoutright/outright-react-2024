import React from "react";

const ClientQuote = ({ clientQuote, waypoint }) => {
  const { quote, speaker } = clientQuote;
  const { name, title, org } = speaker;
  return (
    <div className="ClientQuote" data-waypoint={waypoint}>
      <div className="quote-text">{quote}</div>
      <small>
        {name}, {title}, {org}
      </small>
    </div>
  );
};

export default ClientQuote;
