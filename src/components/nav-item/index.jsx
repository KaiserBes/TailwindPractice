import React from "react";

export const NavItem = ({ text = "qw" }) => {
  return (
    <div className="relative flex items-center">
      <div className="flex space-x-2 cursor-pointer">
        <span className="text-medium-gray hover:text-almost-black">{text}</span>
      </div>
    </div>
  );
};
