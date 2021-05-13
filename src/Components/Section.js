import React from "react";

const Section = ({ dark, id, content }) => {
  return (
    <div className={"section" + (dark ? " section-dark" : "")}>
      <div className="section-content" id={id}>
        {content}
      </div>
    </div>
  );
}
export default Section