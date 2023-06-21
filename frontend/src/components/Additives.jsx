import { useState } from "react";

export default function Additives({item}) {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const toggleCollapse = () => setIsCollapsed(!isCollapsed);
  console.log(item)
  return (
    <>
      <button className="collapse-btn" onClick={toggleCollapse}>
        {isCollapsed ? "Expand" : "Collapse"}
      </button>
      {!isCollapsed && (
        <div id="collapse-content">
          <h2>{item.title}</h2>
          <p>{item.snippet}</p>
        </div>
      )}
    </>
  );
}
