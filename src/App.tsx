import React from "react";

import HomePage from "./pages/HomePage";
import CommentsPage from "./pages/CommentsPage";
import { Router } from "@reach/router";
function App() {
  return (
    <>
      <Router>
        <HomePage path="/" />
        <CommentsPage path="/comments" />
      </Router>
    </>
  );
}

export default App;
