import { useVirtualScroll } from "./VirtualScroll.hook";
import "./VirtualScroll.styles.css";

export const VirtualScroll = ({ list, onItemSelected, width }) => {
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
          <div key={index}>
            {index === centerIndex ? (
              <div className="CenterItem">{item}</div>
            ) : (
              <div className="Item">{item}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
