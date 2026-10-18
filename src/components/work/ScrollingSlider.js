"use client";

import classNames from "classnames";

export const ScrollingSlider = ({ children, gap = "24", className }) => {
  return (
    <div className={classNames("w-full overflow-x-auto py-2 select-none", className)}>
      <div className="flex items-center min-w-full" style={{ gap: `${gap}px` }}>
        {children}
      </div>
    </div>
  );
};
