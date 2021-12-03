import React from "react";
import { Navbar } from "./components/Navbar";
import { Playground } from "./components/Playground";

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Playground />
    </div>
  );
};

export default App;
