import { FiTrendingUp } from "react-icons/fi";
import { FiHome } from "react-icons/fi";
import { IoMdColorFilter } from "react-icons/io";
import { TbFileTypography } from "react-icons/tb";
import { TiInfoLarge } from "react-icons/ti";
import { FiLogIn } from "react-icons/fi";
import { IoIosPersonAdd } from "react-icons/io";
import { MdFormatAlignRight } from "react-icons/md";
import { RiPagesLine } from "react-icons/ri";
function Sidebar() {
  return (
    <aside className="bg-gray-800 w-64 shadow-lg fixed">
      <a href="/" className="text-2xl hover:bg-gray-900 text-white flex items-center px-3 py-4">
        <FiTrendingUp className="bg-blue-400 text-5xl mr-3 rounded-xl p-1" />
        <span>Datta Able</span>
      </a>
      <div className="mt-7  mb-12 text-white text-xs font-semibold">
        NAVIGATION
      </div>
      <div>
        <ul>
          <li>
            <a
              href="dashboard"
              className="flex items-center text-white hover:bg-gray-900 p-3"
            >
              <FiHome className="text-2xl mr-5" />
              <span className="text-xl">Dashboard</span>
            </a>
          </li>
        </ul>
      </div>

      <h2 className="text-white font-semibold mt-5 py-2 px-3">UI COMPONENTS</h2>
      <ul className="space-y-2 px-3">
        <li>
          <a
            href="color"
            className="flex items-center space-x-2 text-white py-1 hover:bg-gray-900"
          >
            <IoMdColorFilter className="text-xl" />
            <span>Color</span>
          </a>
        </li>
        <li>
          <a
            href="typography"
            className="flex items-center space-x-2 text-white py-1 hover:bg-gray-900"
          >
            <TbFileTypography className="text-xl" />
            <span>Typography</span>
          </a>
        </li>
        <li>
          <a
            href="icons"
            className="flex items-center space-x-2 text-white py-2 hover:bg-gray-900"
          >
            <TiInfoLarge className="text-xl" />
            <span>Icons</span>
          </a>
        </li>
      </ul>

      <h2 className="text-white font-semibold mt-5 py-3 px-3">PAGES</h2>

      <ul className="space-y-2 px-3">
        <li>
          <a
            href="login"
             className="flex items-center space-x-2 text-white py-2 hover:bg-gray-900"
          >
            <FiLogIn className="text-xl" />
            <span>Login</span>
          </a>
        </li>
        <li>
          <a
            href="register"
            className="flex items-center space-x-2 text-white py-2 hover:bg-gray-900"
          >
            <IoIosPersonAdd className="text-xl" />
            <span>Register</span>
          </a>
        </li>
      </ul>

      <h2 className="text-white font-semibold mt-5 py-3 px-3">OTHER</h2>

      <ul className="space-y-2 px-3" >
        <li>
          <a
            href="register"
            className="flex items-center space-x-2 text-white py-2 hover:bg-gray-900"
          >
            <MdFormatAlignRight className="text-xl" />
            <span>Menu Levels</span>
          </a>
        </li>
        <li>
          <a
            href="sample page"
         className="flex items-center space-x-2 text-white py-2 hover:bg-gray-900"
          >
            <RiPagesLine className="text-xl" />
            <span>Sample Page</span>
          </a>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
