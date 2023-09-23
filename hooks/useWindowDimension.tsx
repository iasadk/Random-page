'use client'
import { useState, useEffect } from "react";


function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState({
    width: typeof window !== "undefined" ? window?.innerWidth : 0,
    height: typeof window !== "undefined" ? window?.innerHeight : 0,
  });

  const updateWindowDimensions = () => {
    setWindowDimensions({
      width: window?.innerWidth,
      height: window?.innerHeight,
    });
  };

  useEffect(() => {
    window?.addEventListener("resize", updateWindowDimensions);

    return () => {
      window?.removeEventListener("resize", updateWindowDimensions);
    };
  }, []);

  return windowDimensions;
}

export default useWindowDimensions;
