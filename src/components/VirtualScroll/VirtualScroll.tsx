import React from "react";
import { useVirtualScroll } from "./VirtualScroll.hook";
import "./VirtualScroll.styles.css";

export default interface VirtualScrollProps {
  list: string[];
  onItemSelected: (item: string) => void;
  containerItemStyle: React.CSSProperties;
  listStyle: React.CSSProperties;
  centerItemStyle: React.CSSProperties;
  itemStyle: React.CSSProperties;
}

export const VirtualScroll = ({
  list,
  onItemSelected,
  containerItemStyle,
  listStyle,
  centerItemStyle,
  itemStyle,
}: VirtualScrollProps) => {
  const {
    state: { scrollList, scrollRef, centerIndex },
  } = useVirtualScroll({
    list,
    onItemSelected,
  });

  return (
    <div ref={scrollRef} style={containerItemStyle} className="Container">
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
