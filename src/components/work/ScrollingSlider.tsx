"use client";

import { Flex } from "@once-ui-system/core";
import { ReactNode } from "react";
import classNames from "classnames";

interface ScrollingSliderProps {
  children: ReactNode;
  gap?: string;
  duration?: number; // seconds, not fully implemented in CSS variable yet, using fixed 40s for now
  className?: string;
}

export const ScrollingSlider: React.FC<ScrollingSliderProps> = ({ children, gap = "32", className }) => {
  return (
    <div className={classNames("scrolling-slider", className)}>
      <div className="scrolling-slider-content" style={{ gap: `${gap}px` }}>
        {children}
        {children} 
      </div>
    </div>
  );
};
