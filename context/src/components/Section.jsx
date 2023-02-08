import React, { useContext } from "react";
import { ThemeContext } from "../App";

export default function Section() {
  const theme = useContext(ThemeContext);
  return <div className={`section ${theme}`}>Section words</div>;
}
