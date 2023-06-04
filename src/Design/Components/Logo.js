import React from "react";
import productLogo from "../Assets/productLogo.png";

export default function Logo() {
  return (
    <div className="logo">
      <img src={productLogo} id="productLogo" />
    </div>
  );
}
