import React from "react";
import { Header } from "./componed/Header";
import { Balance } from "./componed/Balance";
import { Addlist } from "./componed/Addlist";
import { Tranlist } from "./componed/Tranlist";
import { Icome } from "./componed/Icome";

import { GlobalProvider } from "./context/GlobalState";

import "./App.css";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <Icome />
        <Tranlist />
        <Addlist />
      </div>
    </GlobalProvider>
  );
}

export default App;
