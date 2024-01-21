import React from "react";
import { useScrollToTop } from "./ScrollToTop.hook";
import "./ScrollToTop.styles.css";

export const ScrollToTop = ({ children, style }) => {
  const { isVisible, onClick } = useScrollToTop();

  return (
    <div
      className={`ScrollToTop ${isVisible ? "visible" : ""}`}
      isVisible={isVisible}
      onClick={onClick}
      style={style}
    >
      {children}
    </div>
  );
};
