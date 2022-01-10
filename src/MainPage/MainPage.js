import Dialog from "../Dialog/Dialog";
import angel from "../assets/angel.jpg";
import list from "../assets/list.png";
import background from "../assets/back.gif";
import text from "../assets/text.png";
import file from "../assets/file.png";
import paragua from "../assets/paragua.png";
import music from "../assets/music.png";
import abilities from "../assets/abilities.png";
import grocery from "../assets/GROCERYT.png";
import { useEffect, useState } from "react";

const visibleInit = {
  questions: true,
  sad_truths: true,
  angel: true,
  colors: true,
};

function MainPage() {
  const [visible, setVisible] = useState(visibleInit);

  // dialogState = { questions: true }
  function toggleVisible(dialogState) {
    console.log({ ...visible, ...dialogState });
    setVisible({ ...visible, ...dialogState });
  }

  return (
    <>
      <div
        style={{
          width: "100px",
          height: "60vh",
          position: "absolute",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          marginLeft: "30px",
        }}
      >
        <div
          onClick={() => toggleVisible({ colors: true })}
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            cursor: "pointer",
          }}
        >
          <img
            src={text}
            style={{
              width: "30px",
              marginTop: "20px",
              marginLeft: "-5px",
              marginBottom: "10px",
              filter: "hue-rotate(150deg)",
              imageRendering: "-moz-crisp-edges",
            }}
          ></img>
          <div style={{ color: "white" }}>C0L0R5.TXT</div>
        </div>

        <div
          onClick={() => toggleVisible({ sad_truths: true })}
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            cursor: "pointer",
          }}
        >
          <img
            src={abilities}
            style={{
              width: "60px",
              marginTop: "20px",
              marginLeft: "-5px",
              filter: "hue-rotate(150deg)",
              imageRendering: "-moz-crisp-edges",
            }}
          ></img>
          <div style={{ color: "white" }}>S4D_7RU7HS.EXE</div>
        </div>

        <div
          onClick={() => toggleVisible({ questions: true })}
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            cursor: "pointer",
          }}
        >
          <img
            src={paragua}
            style={{
              width: "60px",
              marginTop: "20px",
              marginLeft: "-5px",
              filter: "hue-rotate(150deg)",
              imageRendering: "-moz-crisp-edges",
            }}
          ></img>
          <div style={{ color: "white" }}>QU3ST10NS.RTF</div>
        </div>

        <div
          onClick={() => toggleVisible({ angel: true })}
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            cursor: "pointer",
          }}
        >
          <img
            src={file}
            style={{
              width: "35px",
              marginTop: "20px",
              marginLeft: "-5px",
              filter: "hue-rotate(150deg)",
              imageRendering: "-moz-crisp-edges",
            }}
          ></img>
          <div style={{ color: "white" }}>4NG3L.JPG</div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            cursor: "pointer",
          }}
        >
          <img
            src={music}
            style={{
              width: "60px",
              marginTop: "20px",
              marginLeft: "-5px",
              imageRendering: "-moz-crisp-edges",
            }}
          ></img>
          <div style={{ color: "white" }}>CHRISTTT - RESIDUE.MP3</div>
        </div>
      </div>

      <div
        style={{ backgroundColor: "black" }}
        className="line anim-typewriter"
        contentEditable
      >
        If you gaze long into an abyss, the abyss will gaze back into you
      </div>
      <div
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-end",
        }}
      >
        <img
          src={background}
          style={{
            objectFit: "cover",
            width: "100vw",
            height: "100vh",
            position: "fixed",
            top: 0,
            left: 0,
            zIndex: -9999,
            filter: "blur(6px)",
            opacity: "50%",
          }}
        />
      </div>

      <Dialog
        text={
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img
              src={angel}
              style={{
                width: "100%",
                filter: "saturate(2.1) hue-rotate(228deg)",
              }}
            ></img>
          </div>
        }
        onClose={() => toggleVisible({ angel: false })}
        show={visible.angel}
        title="4NG3L.JPG"
        y="40"
        x="30"
      />

      <Dialog
        text={
          <ul contentEditable>
            <li>Black</li>
            <li>Red</li>
            <li>Purple</li>
            <li>Gray</li>
            <li>Black</li>
            <li>Red</li>
            <li>Purple</li>
            <li>Gray</li>
            <li>Black</li>
            <li>Red</li>
            <li>Purple</li>
            <li>Gray</li>
          </ul>
        }
        onClose={() => toggleVisible({ colors: false })}
        show={visible.colors}
        title="C0L0R5.TXT"
        y="10"
        x="55"
      />
      <Dialog
        text={
          <ul contentEditable>
            <li>
              Nothingness was <b>always</b> present
            </li>
            <li>
              Hell is already <b>full</b> and we don't deserve heaven
            </li>
            <li>
              {" "}
              To be tired is to <b>understand</b>{" "}
            </li>
          </ul>
        }
        onClose={() => toggleVisible({ sad_truths: false })}
        show={visible.sad_truths}
        title="S4D_7RU7HS.EXE"
        y="30"
        x="5"
      />

      <Dialog
        text={
          <ol contentEditable>
            <li>Just how far are we?</li>
            <li>How long will it take?</li>
            <li>Is this it?</li>
            <li>Can we return?</li>
          </ol>
        }
        onClose={() => toggleVisible({ questions: false })}
        show={visible.questions}
        title="QU3ST10NS.RTF"
        y="5"
        x="20"
      />
    </>
  );
}

export default MainPage;
