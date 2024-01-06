import { useScrollToTop } from "./ScrollToTop.hook";
import "./ScrollToTop.styles.css";

export const ScrollToTop = ({ children }) => {
  const { isVisible, onClick } = useScrollToTop();

  return (
    <div
      className={`ScrollToTop ${isVisible ? "visible" : ""}`}
      isVisible={isVisible}
      onClick={onClick}
    >
      {children}
    </div>
  );
};
