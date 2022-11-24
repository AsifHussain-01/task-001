import React from "react";
import Games from "./Games";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {

  return (
    <>

      <Router>
        <Routes>
          <Route>
            <Route path="/" element={<Games />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
