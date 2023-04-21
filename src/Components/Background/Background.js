import React from "react";

const Background = () => {
  const videoStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    zIndex: "-1",
  };

  return (
    <video style={videoStyle} autoPlay muted loop>
      <source src="pexels-tom-fisk-2073129-3840x2160-30fps.mp4" type="video/mp4" />
    </video>
  );
};

export default Background;
