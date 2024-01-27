import { useState, useEffect } from "react";

export const useScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const handleScroll = () => {
    const shouldShowButton = window.scrollY > 200;
    setIsVisible(shouldShowButton);
  };

  const onClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return {
    isVisible,
    onClick,
  };
};
