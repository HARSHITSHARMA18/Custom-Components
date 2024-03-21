import React, { useState, useEffect } from "react";

function useScreenSize() {
  const [elements, setElements] = useState([
    "HOME",
    "ELETRONICS",
    "BOOKS",
    "MUSIC",
    "MOVIES",
    "CLOTHING",
    "GAMES",
    ["MORE", "FURNITURE", "TRAVEL", "BOTANICAL", "CATEGORY NAME"],
  ]);

  useEffect(() => {
    const handleResize = () => {
      const screenSize = window.innerWidth;

      console.log(screenSize);

      if (screenSize > 1024) {
        //Above Tablet
        setElements([
          "HOME",
          "ELECTRONICS",
          "BOOKS",
          "MUSIC",
          "MOVIES",
          "CLOTHING",
          "GAMES",
          ["MORE", "FURNITURE", "TRAVEL", "BOTANICAL", "CATEGORY NAME"],
        ]);
      } else if (screenSize >= 768 && screenSize <= 1024) {
        // Mobile phones to tablet

        setElements([
          "HOME",
          "ELECTRONICS",
          "BOOKS",

          [
            "MORE",
            "MUSIC",
            "MOVIES ",
            "CLOTHING",
            "GAMES",
            "FURNITURE",
            "TRAVEL",
            "BOTNAICAL",
            "CATEGORY NAME",
          ],
        ]);
      } else {
        // Smaller mobile phones

        setElements([
          "HOME",

          [
            "MORE",
            "ELECTRONICS",
            "BOOKS",
            "MUSIC",
            "MOVIES",
            "CLOTHING",
            "GAMES",
            "FURNITURE",
            "TRAVEL",
            "BOTANICAL",
            "CATEGORY NAME",
          ],
        ]);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return elements;
}

export default useScreenSize;
