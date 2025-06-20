// Major
import Header from "./Header";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import { TfiFacebook } from "react-icons/tfi";
import { TfiTwitterAlt } from "react-icons/tfi";
import { FaGooglePlusG } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { VscTriangleUp } from "react-icons/vsc";
import { FaCircleUser } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";

function Main() {
  return (
    <div className="flex flex-col flex-1 bg-gray-100 ml-64">
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

        {/* Rating and Recent User Container */}
        <div className="flex gap-x-4 bg-gray-100 p-5">
          <div className="bg-white w-1/3 rounded-md shadow-md">
            <h1 className="font-bold p-6">Rating</h1>

            {/* Straight Line */}
            <div className="w-full h-px bg-gray-200 mb-2"></div>

            <div className="flex items-center p-6 justify-between rounded-md">
              <span className="text-4xl flex items-center">
                4.7 <FaStar className="text-yellow-600 text-sm ml-3" />
              </span>
              <span className="font-semibold flex items-center">
                0.4 <VscTriangleUp className="text-green-500 ml-2" />{" "}
              </span>
            </div>

            <div className="mt-4 p-6">
              <ul>
                <li className="flex justify-between">
                  <span className="flex items-center font-semibold text-gray-600 mb-3">
                    <FaStar className="text-sm text-yellow-500 mr-5" /> 5
                  </span>
                  <span className="font-semibold text-gray-500">384</span>
                </li>
                <div className="w-full bg-gray-200 rounded-full h-1 mb-4">
                  <div className="bg-blue-500 h-1 rounded-full w-[80%]"></div>
                </div>

                <li className="flex justify-between">
                  <span className="flex items-center text-gray-600 mb-3">
                    <FaStar className="text-sm text-yellow-500 mr-5" /> 4
                  </span>
                  <span className="text-gray-500 font-semibold">145</span>
                </li>
                <div className="w-full bg-gray-200 rounded-full h-1 mb-4">
                  <div className="bg-blue-500 h-1 rounded-full w-[58%]"></div>
                </div>

                <li className="flex justify-between">
                  <span className="flex items-center text-gray-600 mb-3">
                    <FaStar className="text-sm mr-5 text-yellow-500" /> 3
                  </span>
                  <span className="font-semibold text-gray-500">24</span>
                </li>
                <div className="w-full bg-gray-200 rounded-full h-1 mb-4">
                  <div className="bg-blue-500 h-1 rounded-full w-[37%]"></div>
                </div>

                <li className="flex justify-between">
                  <span className="flex items-center text-gray-600 mb-3">
                    <FaStar className="text-sm mr-5 text-yellow-500" /> 2
                  </span>
                  <span className="font-semibold text-gray-500">1</span>
                </li>
                <div className="w-full bg-gray-200 rounded-full h-1 mb-4">
                  <div className="bg-blue-500 h-1 rounded-full w-[20%]"></div>
                </div>

                <li className="flex justify-between">
                  <span className="flex items-center text-gray-600 mb-3">
                    <FaStar className="text-sm mr-5 text-yellow-500" /> 1
                  </span>
                  <span className="font-semibold text-gray-500">0</span>
                </li>
              </ul>
            </div>
          </div>

          <div className=" w-full shadow-md rounded-md">
            <div className="bg-white p-6">
              <h1 className="font-bold">Recent Users</h1>
            </div>
            <div className="w-full h-px bg-gray-200"></div>
            <div className="p-6 bg-white rounded-md shadow-md">
              <ul>
                <li className="mb-6">
                  <div className="flex">
                    <span>
                      <FaCircleUser className="text-3xl mr-3" />
                    </span>
                    <span className=" font-semibold text-gray-800">
                      Isabella Christensen
                    </span>
                  </div>
                  <div className="ml-11 flex items-center space-x-8">
                    <span className="text-gray-500">
                      Lorem Ipsum is simply dummy text of...
                    </span>
                    <div className="w-2 h-2 rounded-full bg-green-600 mr-2"></div>
                    <span className="font-semibold text-gray-800">
                      11 MAY 12:56
                    </span>
                    <span className="space-x-5">
                      <button className="bg-purple-600 px-4 py-1 rounded-md text-white font-semibold">
                        Reject
                      </button>
                      <button className="bg-green-600 px-4 py-1 rounded-md text-white font-semibold">
                        Approve
                      </button>
                    </span>
                  </div>
                </li>
                <div className="w-full h-px bg-gray-200"></div>

                <li className="mb-6 mt-4">
                  <div className="flex">
                    <span>
                      <FaCircleUser className="text-3xl mr-3" />
                    </span>
                    <span className=" font-semibold text-gray-800">
                      Mathilde Andersen
                    </span>
                  </div>
                  <div className="ml-11 flex items-center space-x-8">
                    <span className="text-gray-500">
                      Lorem Ipsum is simply dummy text of...
                    </span>
                    <div className="w-2 h-2 rounded-full bg-red-600 mr-2"></div>
                    <span className="font-semibold text-gray-800">
                      11 MAY 10:35
                    </span>
                    <span className="space-x-5">
                      <button className="bg-purple-600 px-4 py-1 rounded-md text-white font-semibold">
                        Reject
                      </button>
                      <button className="bg-green-600 px-4 py-1 rounded-md text-white font-semibold">
                        Approve
                      </button>
                    </span>
                  </div>
                </li>
                <div className="w-full h-px bg-gray-200"></div>

                <li className="mb-6 mt-4">
                  <div className="flex">
                    <span>
                      <FaCircleUser className="text-3xl mr-3" />
                    </span>
                    <span className=" font-semibold text-gray-800">
                      Karla Sorensen
                    </span>
                  </div>
                  <div className="ml-11 flex items-center space-x-8">
                    <span className="text-gray-500">
                      Lorem Ipsum is simply dummy text of...
                    </span>
                    <div className="w-2 h-2 rounded-full bg-green-600 mr-2"></div>
                    <span className="font-semibold text-gray-800">
                      9 MAY 17:38
                    </span>
                    <span className="space-x-5">
                      <button className="bg-purple-600 px-4 py-1 rounded-md text-white font-semibold">
                        Reject
                      </button>
                      <button className="bg-green-600 px-4 py-1 rounded-md text-white font-semibold">
                        Approve
                      </button>
                    </span>
                  </div>
                </li>

                <div className="w-full h-px bg-gray-200"></div>
                <li className="mb-6 mt-4">
                  <div className="flex">
                    <span>
                      <FaCircleUser className="text-3xl mr-3" />
                    </span>
                    <span className=" font-semibold text-gray-800">
                      Ida Jorgensen
                    </span>
                  </div>
                  <div className="ml-11 flex items-center space-x-8">
                    <span className="text-gray-500">
                      Lorem Ipsum is simply dummy text of...
                    </span>
                    <div className="w-2 h-2 rounded-full bg-red-600 mr-2"></div>
                    <span className="font-semibold text-gray-800">
                      19 MAY 12:56
                    </span>
                    <span className="space-x-5">
                      <button className="bg-purple-600 px-4 py-1 rounded-md text-white font-semibold">
                        Reject
                      </button>
                      <button className="bg-green-600 px-4 py-1 rounded-md text-white font-semibold">
                        Approve
                      </button>
                    </span>
                  </div>
                </li>

                <div className="w-full h-px bg-gray-200"></div>
                <li className="mb-6 mt-4">
                  <div className="flex">
                    <span>
                      <FaCircleUser className="text-3xl mr-3" />
                    </span>
                    <span className=" font-semibold text-gray-800">
                      Albert Andersen
                    </span>
                  </div>
                  <div className="ml-11 flex items-center space-x-8">
                    <span className="text-gray-500">
                      Lorem Ipsum is simply dummy text of...
                    </span>
                    <div className="w-2 h-2 rounded-full bg-green-600 mr-2"></div>
                    <span className="font-semibold text-gray-800">
                      21 JULY 12:56
                    </span>
                    <span className="space-x-5">
                      <button className="bg-purple-600 px-4 py-1 rounded-md text-white font-semibold">
                        Reject
                      </button>
                      <button className="bg-green-600 px-4 py-1 rounded-md text-white font-semibold">
                        Approve
                      </button>
                    </span>
                  </div>
                </li>
                <div className="w-full h-px bg-gray-200"></div>
              </ul>
            </div>
          </div>
        </div>
        <footer className="flex justify-between text-gray-400">
          <span className="flex items-center text-gray-">
            CodedThemes, Built with{" "}
            <FaHeart className="text-sm mr-1 text-gray-500 ml-1" />
            for a smoother web presence.
          </span>
          <span>Distributed by Themewagon</span>
        </footer>
      </div>
    </div>
  );
}

export default Main;
