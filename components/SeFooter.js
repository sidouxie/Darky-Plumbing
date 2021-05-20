import React from "react";
import DarkyLogo from "./icon/DarkyLogo";

export default function SeFooter() {
  return (
    <footer>
      <div className="container">
        <div className="flex">
          <div className="social-media">
            <div className="sec-logo">
              <DarkyLogo fill={"#e6e6e6"} width={140} height={140} />
            </div>
          </div>
          <div className="contact"></div>
        </div>
      </div>
    </footer>
  );
}
