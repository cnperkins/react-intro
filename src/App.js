import React from "react";
import "./styles.css";
import { Header } from "./comps/Header";
import { Home } from "./pages/Home";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Header state="MA" />
      <Home />
    </div>
  );
}
