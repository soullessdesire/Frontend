import React from "react";
import { useNavigate } from "react-router-dom";

function Button({
  text,
  type,
  to,
  marginTop,
  margin,
  paddingLeft,
  width,
  height,
  imgurl,
  imgw,
  imgh,
  bg,
  onClick,
  bR,
  color,
  b,
  videourl,
  videoh,
  videow,
  p,
  bb,
  fS,
  jC,
  m,
  className,
  hC,
  data,
}) {
  const navigate = useNavigate();
  const handleMouseEnter = (event) => {
    if (event) {
      event.target.setAttribute(autoplay, true);
      event.target.play();
    }
  };
  const handleMouseLeave = (event) => {
    if (event) {
      event.target.removeAttribute(autoplay);
      event.target.currentTime = 0;
    }
  };

  const borderHandler = () => {
    return bb ? bb : b ? b : "none";
  };
  const handleClick = (event) => {
    event.preventDefault();
    navigate(to, { state: data && data });
  };
  return (
    <a
      href={to ? to : null}
      style={{
        marginTop: marginTop,
        margin: margin,
        paddingLeft: paddingLeft,
        width: "fit-content",
        height: "fit-content",
      }}
      onClick={hC && handleClick}
    >
      <button
        type={type || "button"}
        onClick={onClick}
        style={{
          width: width || "fit-content",
          height: height,
          padding: p,
          borderRadius: bR,
          display: "flex",
          alignItems: "center",
          justifyContent: jC || "space-around",
          backgroundColor: bg || "white",
          border: b || "none",
          borderBottom: `${borderHandler()}`,
          color: color || "white",
        }}
        className={className || ""}
      >
        {videourl && (
          <video
            src={videourl}
            height={videoh}
            width={videow}
            onMouseLeave={handleMouseLeave}
            onMouseEnter={handleMouseEnter}
          ></video>
        )}
        {imgurl && (
          <img
            src={imgurl}
            style={{ height: imgh, width: imgw, margin: m || "" }}
          ></img>
        )}
        <p style={{ fontSize: fS }}>{text && text}</p>
      </button>
    </a>
  );
}

export default Button;
