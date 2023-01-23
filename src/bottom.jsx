import React, { useState, useEffect } from "react";
import "./bottom.scss";

const Bottom = () => {
  const [topPart, setTopPart] = useState(false);
  const [bottomPart, setBottomPart] = useState(false);

  function handleMouseEnter() {
    setTimeout(() => {
      setTopPart(true);
    }, 500);
  }

  useEffect(() => {
    topPart &&
      setTimeout(() => {
        setBottomPart(true);
      }, 1500);
  }, [topPart]);

  return (
    <div className="bottom-comp">
      <div className="test-main-div">
        <div
          className="hidden-div"
          onMouseEnter={handleMouseEnter}
          // onMouseLeave={ }
        ></div>
        <div
          className="top-hr-line"
          style={{
            opacity: topPart && "1",
          }}
        >
          <div className="content-one">Box 1</div>
          <div className="circle-one"></div>
        </div>
        <div
          className="bottom-hr-line"
          style={{
            opacity: bottomPart && "1",
          }}
        >
          <div className="content-two">Box 2</div>
          <div className="circle-two"></div>
        </div>
        <div
          className="hrline"
          style={{
            opacity: bottomPart && "1",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Bottom;
