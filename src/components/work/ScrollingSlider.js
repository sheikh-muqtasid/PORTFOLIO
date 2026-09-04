"use client";

import classNames from "classnames";

export const ScrollingSlider = ({ children, gap = "32", className }) => {
  return (
    <div className={classNames("scrolling-slider", className)}>
      <div className="scrolling-slider-content" style={{ gap: `${gap}px` }}>
        {children}
        {children}
      </div>
    </div>
  );
};
