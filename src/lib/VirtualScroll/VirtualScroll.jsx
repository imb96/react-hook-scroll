import React from "react";
import { useVirtualScroll } from "./VirtualScroll.hook";
import "./VirtualScroll.styles.css";

export const VirtualScroll = ({
  list,
  onItemSelected,
  width,
  listStyle,
  centerItemStyle,
  itemStyle,
}) => {
  const {
    state: { scrollList, scrollRef, centerIndex },
  } = useVirtualScroll({
    list,
    onItemSelected,
  });

  return (
    <div ref={scrollRef} width={width} className="Container">
      <div className="List">
        {scrollList.map((item, index) => (
          <div key={index} style={listStyle}>
            {index === centerIndex ? (
              <div className="CenterItem" style={centerItemStyle}>
                {item}
              </div>
            ) : (
              <div className="Item" style={itemStyle}>
                {item}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
