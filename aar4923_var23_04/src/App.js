import './style/app.css';
import React from "react";
import Header from "./component/Header";
import {Footer} from "./component/Footer";
import {HTML} from "./component/HTML";
import {OverlayManger} from "./component/OverlayManger";



function App() {
    return (
    <div className="App">
      <Header />
        <HTML />
        <OverlayManger  />
      <Footer />
    </div>
  );
}

export default App;
