import { useEffect, useState } from "react";

export default function Bar() {
  const [date, setDate] = useState({
    curTime: new Date().toLocaleString(),
  });

  useEffect(() => {
    setInterval(() => {
      setDate({
        curTime: new Date().toLocaleString(),
      });
    document.querySelector("canvas")?.remove()
    }, 1000);
  });

  return (
    <div className="bar">
      <div
        style={{
          marginLeft: "10px",
          borderRight: "3px solid grey",
          width: "80px",
          height: "100%",
          display: "flex",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            height: "100%",
            marginLeft: "10px",
            cursor: "pointer",
          }}
        >
          <b>START</b>

          <div
            style={{
              width: "96vw",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <b>{date?.curTime}</b>
          </div>
        </div>
      </div>
    </div>
  );
}
