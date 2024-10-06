import { useState } from "react";
import { menu } from "./Data";
import { NavLink } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toogleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <section className="">
      <nav className="fixed w-full z-10">
        <div className="flex flex-row justify-between p-5 md:px-14 bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
          <div className="flex flex-row items-center cursor-pointer">
            <NavLink to="/" className="text-xl font-bold">
              Abdur Rahman
            </NavLink>
          </div>
          <div className="lg:flex justify-between items-center gap-10 hidden">
            {menu.map((val, index) => (
              <ul key={index} className="cursor-pointer">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-red-600" : " text-black"
                  }
                  to={val.path}
                >
                  {val.name}
                </NavLink>
              </ul>
            ))}
          </div>
          {/*========== Mobile Button Start===================*/}
          <button onClick={toogleMenu} className="lg:hidden text-2xl">
            {isMenuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
        <div className="flex flex-row justify-between md:px-32 bg-white">
          {isMenuOpen && (
            <div className="bg-white py-4 flex flex-col gap-2 mx-auto">
              {menu.map((val, index) => (
                <ul key={index} className="cursor-pointer">
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "text-red-600" : " text-black"
                    }
                    to={val.path}
                    onClick={() => setIsMenu(!isMenuOpen)}
                  >
                    {val.name}
                  </NavLink>
                </ul>
              ))}
            </div>
          )}
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
