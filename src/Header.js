import { FiMenu } from "react-icons/fi";
import { FiSearch } from "react-icons/fi";
import { CiBrightnessUp } from "react-icons/ci";
import { FiSettings } from "react-icons/fi";
import { CiBellOn } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
function Header() {
  return (
    <div className="bg-white p-5 flex justify-between w-full shadow-sm">
      <div className="flex space-x-5 text-xl">
        <FiMenu className="hover:bg-gray-300" />
        <FiSearch className="hover:bg-gray-300" />
      </div>
      <div className="flex space-x-5 text-xl">
        <CiBrightnessUp className="hover:bg-gray-300" />
        <FiSettings className="hover:bg-gray-300" />
        <CiBellOn className="hover:bg-gray-300" />
        <CiUser className="hover:bg-gray-300" />
      </div>
    </div>
  );
}
export default Header;
