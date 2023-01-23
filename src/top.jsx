import React, { useState, useEffect } from "react";
import "./top.scss";

const Top = () => {
  const [img, setImg] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setImg(true);
    }, 800);
  }, []);

  return (
    <div className="top-comp">
      <div className="left-side">
        <h1>Lorem</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          itaque suscipit, accusamus recusandae non aperiam repellat corporis
          sunt vero nesciunt. Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Saepe repudiandae laudantium molestias, nisi nobis
          impedit sint reprehenderit a sed eum!
        </p>
      </div>
      <div className="right-side">
        <div className="right-image">
          <img
            src="https://images.unsplash.com/photo-1593693595296-7f89cb1d8b0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c2t5JTIwaW1hZ2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            alt="img"
            style={{
              animation: img && "identifier 1.2s",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Top;
