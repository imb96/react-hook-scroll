import React from "react";
import { useScrollToTop } from "./ScrollToTop.hook";
import "./ScrollToTop.styles.css";

export interface ScrollToTopProps {
  children: React.ReactNode;
  style: React.CSSProperties;
}

export const ScrollToTop = ({ children, style }: ScrollToTopProps) => {
  const { isVisible, onClick } = useScrollToTop();

  return (
    <div
      className={`ScrollToTop ${isVisible ? "visible" : ""}`}
      onClick={onClick}
      style={style}
    >
      {children}
    </div>
  );
};
