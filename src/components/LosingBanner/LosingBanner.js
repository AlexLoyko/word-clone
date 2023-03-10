import React from "react";
import Banner from "../Banner";

function LosingBanner({ answer }) {
  return (
      <Banner type='sad'>
        <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
      </Banner>
  );
}

export default LosingBanner;
