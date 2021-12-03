import React from "react";
import Split from "react-split";
import { Editor } from "./Editor";
import { Output } from "./Output";
import "../css/playground.css";

export const Playground: React.FC = () => {
  return (
    <Split
      sizes={[50, 50]}
      direction="horizontal"
      cursor="col-resize"
      className="split-flex"
      gutterSize={12}
    >
      <Editor />
      <Output />
    </Split>
  );
};
