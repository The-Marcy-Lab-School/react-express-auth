import { useState, useEffect } from "react";

export default function Additives({item}) {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [wiki, setWiki] = useState([])

  useEffect(() => {
     const doFetch = async () => {
        try {
          // if (!item) return;
          const url = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=${item.replace(
            "en:",
            ""
          )}`;
          const res = await fetch(url);
          const data = await res.json();
          setWiki(data.query.search[0]);
        } catch (err) {
          console.log(err);
          return null;
        }
    };
    doFetch();
  },[]);
  console.log(wiki)

  const toggleCollapse = async() => {
    setIsCollapsed(!isCollapsed);
   
  }
  console.log(item)
  return (
    <>
      <button className="collapse-btn" onClick={toggleCollapse}>
        {isCollapsed ? item.toUpperCase() : "Collapse"}
      </button>
      {!isCollapsed && (
        <div id="collapse-content">
          <h2>{wiki.title}</h2>
          <p>{wiki.snippet.replace(/<[^>]+>|[^\w\s]/gi,
            "")}</p>
        </div>
      )}
    </>
  );
}
