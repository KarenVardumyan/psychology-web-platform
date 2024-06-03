import React, { useEffect, useRef, useState } from "react";

import "./style.css";

function Accordion(props) {
  const [active, setActive] = useState(false);
  const content = useRef(null);
  const [height, setHeight] = useState("0px");
  const { Children, key, title } = props;
  useEffect(() => {
    console.log("Height for ", props.title, ": ", height);
  }, [height]);

  function toggleAccordion() {
    setActive(!active);
    setHeight(active ? "0px" : `${content.current.scrollHeight}px`);
  }

  return (
    <div className="accordion__section" key={key}>
      <div
        className={`accordion ${active ? "active" : ""}`}
        onClick={toggleAccordion}
      >
        <p className="accordion__title">{title}</p>
        {/* <span style={{ marginLeft: "20px" }}>{active ? "-" : "+"}</span> */}
      </div>
      <div
        ref={content}
        style={{ maxHeight: `${height}` }}
        className="accordion__content"
      >
        <div
          className="accordion__text"
        >
          {Children}
        </div>
      </div>
    </div>
  );
}

export default Accordion;
