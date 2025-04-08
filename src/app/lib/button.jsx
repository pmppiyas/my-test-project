import React from "react";

function Button({ props }) {
  return (
    <button className="bg-primary text-background  px-4 py-2 rounded-md hover:bg-primary-secondary  transition duration-300 w-max">
      {props ? props : "Get your free guide now"}
    </button>
  );
}

export default Button;
