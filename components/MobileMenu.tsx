import React from "react";

interface MobileMenuProp {
  visible?: boolean;
}

const MobileMenu: React.FC<MobileMenuProp> = ({ visible }) => {
  if (!visible) {
    return null;
  }
  return (
    <div className="bg-red-500 w-56 absolute top-8 left-0 py-5 flex-col border-2 border-gray-800 flex">
      <div className="flex flex-col gap-4">
        <div className="px-3 text-center text-white hover:underline">Home</div>
        <div className="px-3 text-center text-white hover:underline">
          Movies
        </div>
        <div className="px-3 text-center text-white hover:underline">
          Tv Shows
        </div>
        <div className="px-3 text-center text-white hover:underline">
          Popular
        </div>
        <div className="px-3 text-center text-white hover:underline">
          My List
        </div>
        <div className="px-3 text-center text-white hover:underline">
          Languages
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
