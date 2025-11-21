import React, { useState } from "react";


const data = [
  {
    title: "Accordion Item #1",
    content: "This is the first item's accordion body.",
  },
  {
    title: "Accordion Item #2",
    content: "This is the second item's accordion body.",
  },
  {
    title: "Accordion Item #3",
    content: "This is the third item's accordion body.",
  },
];

export default function Accordion() {
  const [openItems, setOpenItems] = useState([]);

  const toggleItem = (index) => {
    if (openItems.includes(index)) {
      // remove index → close the item
      setOpenItems(openItems.filter((i) => i !== index));
    } else {
      // add index → open the item
      setOpenItems([...openItems, index]);
    }
  };

  return (
    <div className="accordion-container">
      {data.map((item, index) => (
        <div className="accordion-item" key={index}>
          <button className="accordion-header" onClick={() => toggleItem(index)}>
            {item.title}
            <span className="arrow">
              {openItems.includes(index) ? "▲" : "▼"}
            </span>
          </button>

          {openItems.includes(index) && (
            <div className="accordion-body">
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
