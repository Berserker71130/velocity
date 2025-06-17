import Header from "./Header";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import { TfiFacebook } from "react-icons/tfi";
import { TfiTwitterAlt } from "react-icons/tfi";
import { FaGooglePlusG } from "react-icons/fa";

function Main() {
  return (
    <div className="flex flex-col flex-1 bg-gray-100">
      <Header />
      <div className="p-7 bg-gray-100">
        <h2 className="text-xl font-semibold text-gray-700">Default</h2>
        <a href="/home" className="text-gray-600 font-semibold">
          Home
        </a>{" "}
        {">"}{" "}
        <a href="/dashboard" className="text-gray-600 font-semibold">
          Dashboard
        </a>{" "}
        {">"} <span className="text-gray-600 font-semibold">Default</span>
      </div>
      <div className="bg-gray-100 flex flex-col sm:flex-row p-4 justify-between">
        <div className="w-full sm:w-1/3 p-4 m-2 bg-white font-semibold">
          <h3 className="mb-6">Daily Sales</h3>
          <div className="flex justify-between">
            <span className="flex text-xl items-center text-gray-400">
              <FaArrowUp className="text-green-400 mr-3" /> $ 249.95
            </span>
            <span className="text-sm text-gray-400">67%</span>
          </div>
          <div className="w-full bg-blue-300 rounded-full h-1 mt-3">
            <div className="bg-blue-600 h-1 rounded-full w-[67%]"></div>
          </div>
        </div>

        <div className="w-full sm:w-1/3 p-4 m-2 bg-white font-semibold">
          <h3 className="mb-6">Monthly Sales</h3>
          <div className="flex justify-between">
            <span className="flex text-xl items-center text-gray-400">
              <FaArrowDown className="text-red-400 mr-3" /> $ 2,942.32
            </span>
            <span className="text-sm text-gray-400">36%</span>
          </div>
          <div className="w-full bg-gray-300 rounded-full h-1 mt-3">
            <div className="bg-gray-600 h-1 rounded-full w-[36%]"></div>
          </div>
        </div>

        <div className="w-full sm:w-1/3 p-4 m-2 bg-white font-semibold">
          <h3 className="mb-6">Yearly Sales</h3>
          <div className="flex justify-between">
            <span className="flex text-xl items-center text-gray-400">
              <FaArrowUp className="text-green-400 mr-3" /> $ 8,638.32
            </span>
            <span className="text-sm text-gray-400">80%</span>
          </div>
          <div className="w-full bg-blue-300 rounded-full h-1 mt-3">
            <div className="bg-blue-600 h-1 rounded-full w-[80%]"></div>
          </div>
        </div>
      </div>
      <div>
        {/* Social media cards */}
        <div className="bg-gray-100 flex flex-col sm:flex-row p-4 justify-between">
          <div className="w-full sm:w-1/3 p-4 m-2 bg-white font-semibold">
            <div className="flex justify-between">
              <div className="text-blue-400 text-3xl mr-4">
                <TfiFacebook />
              </div>
              <div className="flex flex-col">
                <span className="text-3xl text-gray-600">12,281</span>
                <span className="text-gray-400">+7.2% Total Likes</span>
              </div>
            </div>
            {/* progressbar */}
            <div className="mt-4 w-full flex justify-between space-x-4">
              <div className="flex flex-col flex-1">
                <h4 className="text-sm text-gray-500 mb-1">Target: 35,098</h4>
                <div className="w-full bg-gray-200 rounded-full h-1">
                  <div className="bg-blue-500 h-1 rounded-full w-[35%]"></div>
                </div>
              </div>
              {/* durationBlock */}
              <div className="flex flex-col flex-1">
                <h4 className="text-sm text-gray-500 mb-1">Duration: 350</h4>
                {/* progressbar */}
                <div className="w-full bg-gray-200 rounded-full h-1">
                  <div className="bg-green-500 h-1 rounded-full h-1 w-[60%]"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full sm:w-1/3 p-4 m-2 bg-white font-semibold">
            <div className="flex justify-between">
              <div className="text-blue-400 text-3xl mr-4">
                <TfiTwitterAlt />
              </div>
              <div className="flex flex-col">
                <span className="text-3xl text-gray-600">11,200</span>
                <span className="text-gray-400">+6.2% Total Likes</span>
              </div>
            </div>

            <div className="mt-4 w-full flex justify-between space-x-4">
              <div className="flex flex-col flex-1">
                <h4 className="text-sm text-gray-500">Target: 34,185</h4>
                {/* progressbar */}
                <div className="w-full bg-gray-200 rounded-full h-1">
                  <div className="bg-blue-500 h-1 rounded-full w-[34%]"></div>
                </div>
              </div>
              {/* Duration Block */}
              <div className="flex flex-col flex-1">
                <h4 className="text-sm text-gray-500 mb-1">Duration: 800</h4>
                <div className="w-full bg-gray-200 rounded-full h-1">
                  <div className="bg-green-500 h-1 rounded-full w-[80%]"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full sm:w-1/3 p-4 m-2 bg-white font-semibold">
            <div className="flex justify-between">
              <div className="text-red-400 text-3xl mr-4">
                <FaGooglePlusG />
              </div>
              <div className="flex flex-col">
                <span className="text-3xl text-gray-600">10,500</span>
                <span className="text-gray-400">+5.9% Total Likes</span>
              </div>
            </div>
            <div className="mt-4 w-full flex justify-between space-x-4">
              <div className="flex flex-col flex-1">
                <h4 className="text-sm text-gray-500 mb-1">Target: 25,998</h4>
                <div className="w-full bg-gray-200 rounded-full h-1">
                  <div className="bg-blue-500 h-1 rounded-full rounded-full w-[25%]"></div>
                </div>
              </div>
              <div className="flex flex-col flex-1">
                <h4 className="text-sm text-gray-500 mb-1">Duration: 900</h4>
                <div className="w-full bg-gray-200 rounded-full h-1">
                  <div className="bg-green-500 h-1 rounded-full w-[90%]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between font-semibold text-gray-600 p-6">
        <span className="">Rating</span>
        <span>Recent Users</span>
      </div>
    </div>
  );
}

export default Main;
