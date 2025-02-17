/*
 * Copyright (c) 2025 Rembrand Pardo
 * Unauthorized copying, modification, or redistribution is strictly prohibited.
 * Violators will face legal action.
 */

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]); // Runs every time the pathname changes

  return null;
};

export default ScrollToTop;