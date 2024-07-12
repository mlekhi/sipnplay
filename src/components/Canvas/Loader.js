import React from "react";
import { Html, useProgress } from "@react-three/drei";
import CircularProgress from "@mui/material/CircularProgress";

const CanvasLoader = () => {
  const { progress } = useProgress();
  return (
    <Html center>
      {/* <CircularProgress variant="determinate" value={progress} /> */}
      <p>{progress.toFixed(2)}%</p>
    </Html>
  );
};

export default CanvasLoader;
