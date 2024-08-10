import React from "react";
import { Link } from "react-router-dom";

const BreadCrumb = ({ current_page }) => {
  return (
    <div className="flex gap-2">
      <Link to={"/"}>Home</Link>
      <span>/</span>
      <p>{current_page}</p>
    </div>
  );
};

export default BreadCrumb;
