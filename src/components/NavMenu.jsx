import React from "react";

const NavMenu = () => {
  return (
    <ul className="flex gap-20 items-center text-zinc-600">
      <li>
        <butto className="py-1 transition-all hover:border-b-2 hover:border-black hover:text-black cursor-pointer">
          Home
        </butto>
      </li>
      <li>
        <butto className="py-1 transition-all hover:border-b-2 hover:border-black hover:text-black cursor-pointer">
          About
        </butto>
      </li>
      <li>
        <butto className="py-1 transition-all hover:border-b-2 hover:border-black hover:text-black cursor-pointer">
          Portfolio
        </butto>
      </li>
    </ul>
  );
};

export default NavMenu;
