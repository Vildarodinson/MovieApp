import React from "react";

interface NavbarItemProp {
  label: string;
}

const NavbarItem: React.FC<NavbarItemProp> = ({ label }) => {
  return (
    <div className="text-white cursor-default transition hover:underline">
      {label}
    </div>
  );
};

export default NavbarItem;
