import React from "react";
import "./Dialog.css";
import { useState } from "react";

export default function Dialog(props) {
  const [diffX, setDiffX] = useState(0);
  const [diffY, setDiffY] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [styles, setStyles] = useState({
    left: props.x + "%",
    top: props.y + "%",
  });

  const _dragStart = (e) => {
    setDiffX(e.screenX - e.currentTarget.getBoundingClientRect().left);
    setDiffY(e.screenY - e.currentTarget.getBoundingClientRect().top);
    setDragging(true);
  };

  const _dragging = (e) => {
    if (dragging) {
      var left = e.screenX - diffX;
      var top = e.screenY - diffY;

      setStyles({
        left: left,
        top: top,
      });
    }
  };

  const _dragEnd = (e) => {
    setDragging(false);
  };

  let classes = props.show ? "Dialog" : "Dialog hidden";

  return (
    <div
      className={classes}
      style={styles}
      onMouseDown={_dragStart}
      onMouseMove={_dragging}
      onMouseUp={_dragEnd}
    >
      <div style={{ display: "flex", alignItems: "center", cursor: "move" }}>
        <div className="DialogTitle" style={{ width: "50%" }}>
          {props.title}
        </div>
        <div
          style={{
            color: "red",
            width: "45%",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <div className="close" onClick={props.onClose}>
            X
          </div>
        </div>
      </div>

      <div className="Separator"></div>
      <div className="Contents">{props.text}</div>
    </div>
  );
}
