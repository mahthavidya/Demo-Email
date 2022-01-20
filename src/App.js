import React, { Suspense, lazy } from "react";
import View from "./HOME/View";
import { Route, Routes, Router } from "react-router-dom";
// import Documents from "./Documents/Documents";
const Documents = lazy(() => import("./Documents/Documents"));

class App extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <>
        <Routes>
          <Route path="/" element={<View />} />
        </Routes>
        <Suspense fallback={<div>"....loading"</div>}>
          <Routes>
            <Route path="/document" element={<Documents />} />
          </Routes>
        </Suspense>
      </>
    );
  }
}

export default App;
