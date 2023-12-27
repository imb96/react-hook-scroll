import { useEffect, useMemo, useRef, useState } from "react";

export const useVirtualScroll = ({ list, onItemSelected }) => {
  const scrollList = useMemo(() => [null, null, ...list, null, null], [list]);
  const scrollRef = useRef(null);
  const [centerIndex, setCenterIndex] = useState(0);

  useEffect(() => {
    if (scrollRef.current) {
      const scrollContainer = scrollRef.current;
      const updateCenterItemWithRef = () => {
        const containerHeight = scrollContainer.clientHeight;
        const itemHeight = 2.5 * 16;
        const scrollTop = scrollContainer.scrollTop;
        const centerScroll = containerHeight / 2;
        const centerItemIndex = Math.floor(
          (scrollTop + centerScroll) / itemHeight
        );
        setCenterIndex(centerItemIndex);

        onItemSelected(scrollList[centerItemIndex]);
      };
      scrollContainer.addEventListener("scroll", updateCenterItemWithRef);

      updateCenterItemWithRef();

      return () => {
        scrollContainer.removeEventListener("scroll", updateCenterItemWithRef);
      };
    }
  }, [scrollList, onItemSelected]);

  return {
    state: {
      scrollList,
      scrollRef,
      centerIndex,
    },
  };
};
