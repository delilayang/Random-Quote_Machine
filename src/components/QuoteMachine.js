import React from "react";
import Button from "./Button";

const QuoteMachine = (props) => {
  return (
    <React.Fragment>
      {props.selectedQuote
        ? `"${props.selectedQuote.quote}" - "${props.selectedQuote.author}"`
        : ""}
      <Button
        buttonDisplayName="Next Quote"
        clickHandler={props.generateNewQuoteIndex}
      />
    </React.Fragment>
  );
};

export default QuoteMachine;
