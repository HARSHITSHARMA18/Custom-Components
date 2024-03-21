import { useState } from "react";

import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";

function App() {
  return (
    <>
      <Navbar />

      <div className="Hero-section">
        <h1>Featured Products</h1>
        <p>Explore and discover a variety of products</p>
      </div>

      <div className="footer">
        <p>Harshit Sharma ( 2K20/ME/111)</p>
      </div>

      <Carousel />
    </>
  );
}

export default App;
