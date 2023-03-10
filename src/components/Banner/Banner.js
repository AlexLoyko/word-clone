import React from "react";

function Banner({ type, children }) {
  const className = type === 'happy'
    ? 'happy banner'
    : 'sad banner';

  return (
    <div className={className}>
      { children }
    </div>
  );
}

export default Banner;
