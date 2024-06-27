"use client";
import Link from "next/link";
import Profile_Img from "@/assets/images/profile.png";
import Notification_Icon from "@/assets/icons/notify-icon.svg";
import Image from "next/image";
import Search_Icon from "@/assets/icons/search-icon.svg";
import { useState } from "react";
import { EventBtn, MoreOptBtn, NoteBtn, TaskBtn } from "../sidebarbuttons";
import { SideBarLink } from "./SideBarLink";
import Home_icon from "@/assets/icons/home_icon.svg";
import Shortcut_icon from "@/assets/icons/shortcut_icon.svg";
import Notes_icon from "@/assets/icons/notes-icon.svg";

export function LeftSideBar() {
  const [openSideBar, setOpenSideBar] = useState(false);

  return (
    <nav
      className={`relative group transition-all duration-500 ${openSideBar ? "w-[120px]" : "w-[400px]"} flex flex-col justify-between bg-[#f2f2f2] shadow-lg rounded-md border border-solid border-gray-200 p-3 m-2`}
    >
      <div>
        <div
          className={`relative pt-4 flex transition-all duration-500 ${openSideBar ? "justify-center" : "justify-between"} items-center text-[17px]`}
        >
          <div className="flex item-center cursor-pointer">
            <Image
              src={Profile_Img}
              alt="Profile-Image"
              className="w-[50px] h-[50px]  "
            />

            <div className={`ml-[10px] text-gray-500 text-[13px] py-[6px]`}>
              <div
                className={`font-semibold text-wrap-nowrap transition-all duration-300 ${openSideBar ? "text-[0px]" : "text-[16px]"}`}
              >
                turabi1988@gmail.com
              </div>
              <div
                className={`text-wrap-nowrap transition-all duration-300 ${openSideBar ? "text-[0px]" : "text-[13px]"}`}
              >
                turabi1988@gmail.com
              </div>
            </div>
          </div>
          <div
            className={`${openSideBar ? "hidden" : ""} cursor-pointer opacity-55`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={30}
              height={30}
              viewBox="0 0 1000 1000"
              id="notification-bell"
            >
              <path d="M792.07,768.51H207.93a38.23,38.23,0,0,1-33-57.63c30.33-51.15,53.06-124.12,57.3-138.23a6,6,0,0,0,.26-1.79V449.42c0-.13,0-.27,0-.4,1.54-61.86,16.56-115,44.62-157.82,22.63-34.57,53.61-62.39,92.07-82.7,64.76-34.21,128-35.15,130.66-35.17h.28c2.66,0,65.9,1,130.66,35.17,38.46,20.31,69.44,48.13,92.07,82.7,28.06,42.86,43.08,96,44.62,157.82,0,.13,0,.27,0,.4V570.86a5.92,5.92,0,0,0,.26,1.79c4.24,14.11,27,87.09,57.3,138.23h0a38.23,38.23,0,0,1-33,57.63ZM264.5,449.63V570.86a38,38,0,0,1-1.62,11c-4.43,14.73-28.19,91-60.42,145.32a5.88,5.88,0,0,0,0,6.1,6.22,6.22,0,0,0,5.49,3.21H792.07a6.22,6.22,0,0,0,5.49-3.21,5.88,5.88,0,0,0,0-6.1h0c-31.41-53-54.19-124.63-60.43-145.33a38.3,38.3,0,0,1-1.61-11V449.63C732.93,349,692.68,277.36,615.86,236.79,559.36,207,503.33,205.39,500,205.33c-3.12.07-60.26,1.76-116.89,32C307,278,267.06,349.44,264.5,449.63Z"></path>
              <path d="M423.25 219.25a16 16 0 01-16-16v-26.5a92.75 92.75 0 01185.5 0v26a16 16 0 11-32 0v-26a60.75 60.75 0 00-121.5 0v26.5A16 16 0 01423.25 219.25zM500 916c-72.95 0-132.31-59.35-132.31-132.31V752.51a16 16 0 0116-16H616.31a16 16 0 0116 16v31.18C632.31 856.65 573 916 500 916zM399.69 768.51v15.18a100.31 100.31 0 10200.62 0V768.51z"></path>
            </svg>
          </div>
        </div>

        <div className="w-full py-[15px] justify-center items-center">
          <div className="relative">
            <input
              type="text"
              className="px-12 bg-gray-200 w-full text-[16px] py-3 border rounded-md focus:outline-none"
              placeholder={`${openSideBar ? "" : "Search"} `}
            />
            <div
              className={`absolute transition-all duration-500 inset-y-0 ${openSideBar ? "left-9" : "left-3"}  flex items-center pointer-events-none`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                opacity={0.5}
                viewBox="0 0 24 24"
                id="search"
              >
                <path fill="none" d="M0 0h24v24H0V0z"></path>
                <path d="M15.5 14h-.79l-.28-.27c1.2-1.4 1.82-3.31 1.48-5.34-.47-2.78-2.79-5-5.59-5.34-4.23-.52-7.79 3.04-7.27 7.27.34 2.8 2.56 5.12 5.34 5.59 2.03.34 3.94-.28 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
              </svg>
            </div>
          </div>
        </div>
        <div>
          <div
            className={` ${openSideBar ? "flex-col" : "flex-row"} flex gap-2 items-center`}
          >
            <NoteBtn openSideBar={openSideBar} />
            <MoreOptBtn />
          </div>
          <div className={`my-2 items-center flex gap-2`}>
            <TaskBtn openSideBar={openSideBar} />
            <EventBtn openSideBar={openSideBar} />
          </div>
        </div>
        <div
          className={`transition-all duration-300 relative text-[#797578] ${openSideBar ? "text-[0px]" : "text-[16px]"}  `}
        >
          <SideBarLink
            link="/"
            text="Home"
            svg_Icon={Home_icon}
            openSideBar={openSideBar}
          />
          <ul
            id="navigation"
            className="w-full h-full max-h-[285px] flex flex-col gap-2 overflow-auto hover:overflow-y-visible overflow-y-hidden"
          >
            <li className="">
              <SideBarLink
                link="/shortcuts"
                text="Shortcuts"
                svg_Icon={Shortcut_icon}
                openSideBar={openSideBar}
              />
            </li>
            <li>
              <SideBarLink
                link="/notes"
                text="Notes"
                svg_Icon={Notes_icon}
                openSideBar={openSideBar}
              />
            </li>
            <li>
              <Link
                href="/tasks"
                className={`p-3 hover:bg-[#e6e6e6] transition-all duration-700 ${openSideBar ? "justify-center" : "justify-start"} flex gap-1 items-center`}
              >
                <svg
                  width="30"
                  height="26"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M13.646 7.435c.266.22.303.614.083.88l-3.915 4.73a.625.625 0 01-.899.066l-2.23-2.004a.625.625 0 01.835-.93l1.746 1.57 3.5-4.229a.625.625 0 01.88-.083z"
                    fill="#737373"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.019 16.25a6.25 6.25 0 100-12.5 6.25 6.25 0 000 12.5zm0 1.25a7.5 7.5 0 100-15 7.5 7.5 0 000 15z"
                    fill="#737373"
                  ></path>
                </svg>
                <div
                  className={`text-wrap-nowrap transition-all duration-300 ${openSideBar ? "text-[0px]" : "text-[16px]"}`}
                >
                  Tasks
                </div>
              </Link>
            </li>
            <li>
              <Link
                href="/files"
                className={`p-3 hover:bg-[#e6e6e6] transition-all duration-700 ${openSideBar ? "justify-center" : "justify-start"} flex gap-1 items-center`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="26"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.44 15.44a1.5 1.5 0 0 0 2.115 2.125L20.111 7.131a3 3 0 1 0-4.223-4.262L4.332 14.304a4.5 4.5 0 1 0 6.364 6.363l8.98-9.079.712.703-8.981 9.08a5.5 5.5 0 1 1-7.779-7.777L15.185 2.159a4 4 0 1 1 5.63 5.683L10.259 18.276a2.5 2.5 0 0 1-3.527-3.544l8-8 .707.707z" />
                  <path fill="none" d="M0 0h24v24H0z" />
                </svg>
                <div
                  className={`text-wrap-nowrap transition-all duration-300 ${openSideBar ? "text-[0px]" : "text-[16px]"}`}
                >
                  Files
                </div>
              </Link>
            </li>
            <li>
              <Link
                href="/calender"
                className={`p-3 hover:bg-[#e6e6e6] transition-all duration-700 ${openSideBar ? "justify-center" : "justify-start"} flex gap-1 items-center`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="26"
                  viewBox="0 0 20 20"
                  fill="none"
                  className="kNaexcHToUCMBCwLD4WA"
                >
                  <path
                    d="M12.457 10.41a.917.917 0 101.833 0 .917.917 0 00-1.833 0zM9.083 10.41a.917.917 0 101.834 0 .917.917 0 00-1.834 0zM5.708 10.41a.917.917 0 101.834 0 .917.917 0 00-1.834 0zM12.457 13.784a.917.917 0 101.833 0 .917.917 0 00-1.833 0zM9.083 13.784a.917.917 0 101.834 0 .917.917 0 00-1.834 0zM5.708 13.784a.917.917 0 101.834 0 .917.917 0 00-1.834 0z"
                    fill="#141414"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6.625 1.64c.345 0 .625.28.625.625v1.477h5.498V2.265a.625.625 0 111.25 0v1.477h.794a2.292 2.292 0 012.291 2.292v9.167a2.292 2.292 0 01-2.291 2.291H5.208a2.292 2.292 0 01-2.291-2.291V6.034a2.292 2.292 0 012.291-2.292H6V2.265c0-.346.28-.625.625-.625zm.625 3.352v1.856a.625.625 0 11-1.25 0V4.992h-.792c-.575 0-1.041.467-1.041 1.042v9.167c0 .575.466 1.041 1.041 1.041h9.584c.575 0 1.041-.466 1.041-1.041V6.034c0-.575-.466-1.042-1.041-1.042h-.794v1.856a.625.625 0 11-1.25 0V4.992H7.25z"
                    fill="#141414"
                  ></path>
                </svg>
                <div
                  className={`text-wrap-nowrap transition-all duration-300 ${openSideBar ? "text-[0px]" : "text-[16px]"}`}
                >
                  Calender
                </div>
              </Link>
            </li>
            <li>
              <Link
                href="/notebooks"
                className={`p-3 hover:bg-[#e6e6e6] transition-all duration-700 ${openSideBar ? "justify-center" : "justify-start"} flex gap-1 items-center`}
              >
                <svg
                  width="30"
                  height="26"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g fillRule="evenodd" clipRule="evenodd" fill="#737373">
                    <path d="M3.75 2.5v15h10.208a2.292 2.292 0 002.292-2.292V4.792A2.292 2.292 0 0013.958 2.5H3.75zm3.748 1.25v12.5h6.46c.576 0 1.042-.466 1.042-1.042V4.792c0-.576-.466-1.042-1.042-1.042h-6.46zM5 16.25V3.75h1.248v12.5H5z"></path>
                    <path d="M13.505 7.697a.75.75 0 01-.75.75h-3a.75.75 0 110-1.5h3a.75.75 0 01.75.75z"></path>
                  </g>
                </svg>
                <div
                  className={`text-wrap-nowrap transition-all duration-300 ${openSideBar ? "text-[0px]" : "text-[16px]"}`}
                >
                  Notebooks
                </div>
              </Link>
            </li>
            <li>
              <Link
                href="/tags"
                className={`p-3 hover:bg-[#e6e6e6] transition-all duration-700 ${openSideBar ? "justify-center" : "justify-start"} flex gap-1 items-center`}
              >
                <svg
                  width="30"
                  height="26"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g fill="#737373">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M10.8 3.704c-.416-.5-1.183-.5-1.6 0L5.396 8.27a1.042 1.042 0 00-.242.667v6.274c0 .575.467 1.042 1.042 1.042h7.608c.575 0 1.041-.467 1.041-1.042V8.937c0-.244-.085-.48-.24-.667L10.8 3.704zm-2.56-.8a2.292 2.292 0 013.521 0l3.804 4.566c.343.412.53.93.53 1.467v6.274a2.292 2.292 0 01-2.291 2.292H6.196a2.292 2.292 0 01-2.292-2.292V8.937c0-.536.188-1.055.531-1.467L8.24 2.903z"
                    ></path>
                    <path d="M11.667 8.338a1.667 1.667 0 11-3.334 0 1.667 1.667 0 013.334 0z"></path>
                  </g>
                </svg>
                <div
                  className={`text-wrap-nowrap transition-all duration-300 ${openSideBar ? "text-[0px]" : "text-[16px]"}`}
                >
                  Tags
                </div>
              </Link>
            </li>
            <li>
              <Link
                href="/shared_with_me"
                className={`p-3 hover:bg-[#e6e6e6] transition-all duration-700 ${openSideBar ? "justify-center" : "justify-start"} flex gap-1 items-center`}
              >
                <svg
                  width="30"
                  height="26"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g fill="#737373">
                    <path d="M12.53 7.097a5.4 5.4 0 00-.185-1.329 3.318 3.318 0 011.357-.277h.007c1.148 0 2.032.516 2.579 1.271.535.739.733 1.685.588 2.56a6.845 6.845 0 01-1.087 2.66c.146.05.32.098.526.149l.18.044c.274.066.585.141.87.238.352.12.744.298 1.05.605.326.33.514.765.514 1.303v1.133c0 .713-.607 1.217-1.26 1.217h-3.07c.221-.356.359-.777.375-1.25h2.694a.06.06 0 00.01 0v-1.1c0-.221-.065-.336-.15-.421-.106-.107-.285-.208-.566-.304a8.53 8.53 0 00-.735-.2h-.002a34.527 34.527 0 01-.21-.052c-.331-.082-.714-.184-1.041-.352a1.008 1.008 0 01-.53-.758c-.05-.342.071-.65.246-.87.34-.426.803-1.34.953-2.246a2.2 2.2 0 00-.368-1.623c-.316-.437-.827-.754-1.566-.754h-.006c-.487 0-.875.138-1.173.356z"></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M5.475 5.55a2.817 2.817 0 00-.473 2.08c.187 1.127.761 2.26 1.189 2.798.193.243.325.58.274.952a1.103 1.103 0 01-.542.82c-.38.215-.832.355-1.241.47-.119.034-.234.066-.346.096-.299.082-.576.158-.842.251-.362.128-.613.26-.771.41a.654.654 0 00-.214.52v1.38c0 .013.004.031.028.054a.177.177 0 00.121.043h9.668c.055 0 .097-.02.121-.043.024-.023.028-.041.028-.053v-1.38c0-.305-.093-.48-.223-.61-.151-.152-.392-.283-.743-.403a10.518 10.518 0 00-.91-.248l-.256-.063c-.403-.1-.855-.221-1.238-.417a1.092 1.092 0 01-.572-.823 1.248 1.248 0 01.27-.955c.428-.536 1.003-1.671 1.19-2.799a2.817 2.817 0 00-.472-2.08c-.41-.567-1.074-.975-2.02-.975h-.007c-.946 0-1.609.408-2.02.975zm-1.013-.733c.641-.886 1.678-1.492 3.032-1.492h.008c1.354 0 2.39.606 3.031 1.492.63.869.865 1.985.693 3.018-.217 1.313-.858 2.615-1.407 3.326.219.09.493.168.825.25l.224.055c.332.08.704.17 1.044.286.422.143.875.351 1.226.704.372.374.587.87.587 1.491v1.38c0 .785-.669 1.347-1.4 1.347H2.659c-.73 0-1.4-.562-1.4-1.346v-1.38a1.9 1.9 0 01.606-1.429c.349-.33.798-.534 1.215-.68.312-.11.654-.204.966-.29.103-.027.203-.055.297-.081.34-.096.623-.188.846-.293-.552-.708-1.2-2.019-1.419-3.34-.17-1.033.064-2.15.693-3.018z"
                    ></path>
                  </g>
                </svg>
                <div
                  className={`text-wrap-nowrap transition-all duration-300 ${openSideBar ? "text-[0px]" : "text-[16px]"}`}
                >
                  Shared with Me
                </div>
              </Link>
            </li>
            <li>
              <Link
                href="/trash"
                className={`p-3 hover:bg-[#e6e6e6] transition-all duration-700 ${openSideBar ? "justify-center" : "justify-start"} flex gap-1 items-center`}
              >
                <svg
                  width="30"
                  height="26"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g fillRule="evenodd" clipRule="evenodd" fill="#737373">
                    <path d="M5.171 7.091h9.656l-.455 8.251a2.292 2.292 0 01-2.288 2.166H7.933a2.292 2.292 0 01-2.288-2.16L5.17 7.09zm1.324 1.25l.398 6.935c.031.55.488.982 1.04.982h4.151c.553 0 1.01-.432 1.04-.985l.382-6.932h-7.01zM9.167 2.086a2.292 2.292 0 00-2.292 2.292v.205H3.75a.625.625 0 100 1.25h12.5a.625.625 0 100-1.25h-3.125v-.205a2.292 2.292 0 00-2.292-2.292H9.167zm2.708 2.497v-.205c0-.575-.466-1.042-1.042-1.042H9.167c-.576 0-1.042.467-1.042 1.042v.205h3.75z"></path>
                  </g>
                </svg>
                <div
                  className={`text-wrap-nowrap transition-all duration-300 ${openSideBar ? "text-[0px]" : "text-[16px]"}`}
                >
                  Trash
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="">
        <button className="bg-[#fcb100] py-[12px] font-bold w-full rounded flex justify-center items-center">
          <div
            className={`transition-all duration-300 flex gap-1 items-center`}
          >
            <svg
              width="35"
              height="35"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="12" cy="12" r="7.083" fill="transparent"></circle>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M19.5 12a7.5 7.5 0 10-15 0 7.5 7.5 0 0015 0zm-8.81 1.286v2.573c0 .194.135.336.322.4a.472.472 0 00.519-.145l3.26-3.933c.09-.11.123-.255.09-.392a.459.459 0 00-.26-.311l-1.406-.766V8.14c0-.195-.146-.335-.333-.399a.473.473 0 00-.52.146l-3.259 3.933a.45.45 0 00-.09.392.458.458 0 00.26.31l1.416.765z"
                fill="currentColor"
              ></path>
            </svg>
            <div
              className={`text-wrap-nowrap transition-all duration-300 ${openSideBar ? "text-[0px]" : "text-[16px]"}`}
            >
              Upgrade
            </div>
          </div>
        </button>
        <button
          className={`w-full my-4 flex gap-1 transition-all duration-700 ${openSideBar ? "justify-center" : "justify-start"} items-center`}
        >
          <svg
            width="35"
            height="30"
            opacity="1"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="BEQrrBbCZXbrmiN8XKSP"
          >
            <path
              d="M14.025 12.3l.105-.078c.864-.603 1.414-1.573 1.414-2.674A3.277 3.277 0 0012.27 6.27a3.271 3.271 0 00-3.264 3.203.175.175 0 01-.007.032v.001a.137.137 0 00-.008.04.818.818 0 001.636 0h.02c.002-.917.734-1.65 1.623-1.65.89 0 1.65.734 1.65 1.652 0 .524-.262.996-.681 1.31l-.131.08c-1.376.926-1.626 1.992-1.645 2.612l-.008.035v.001c-.005.016-.01.033-.01.05a.818.818 0 001.637 0c0-.497.341-.942.942-1.336zM13.265 16.656a1 1 0 11-2 0 1 1 0 012 0z"
              fill="#141414"
            ></path>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.265 19.5a7.5 7.5 0 100-15 7.5 7.5 0 000 15zm0 1.5a9 9 0 100-18 9 9 0 000 18z"
              fill="#141414"
            ></path>
          </svg>
          <div
            className={`text-wrap-nowrap transition-all duration-300 ${openSideBar ? "text-[0px]" : "text-[16px]"}`}
          >
            Need a little help?
          </div>
        </button>
      </div>
      <div
        onClick={() => setOpenSideBar(!openSideBar)}
        className="absolute bottom-4 -right-4 cursor-pointer group-hover:opacity-100 group-hover:visible opacity-0 invisible transitiona-all duration-300 bg-gray-300 rounded-lg p-2 text-xl"
      >
        <div className={`${openSideBar ? "rotate-180" : ""}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            id="left-arrow"
            height={20}
            width={20}
          >
            <g>
              <g>
                <rect
                  width="24"
                  height="24"
                  opacity="0"
                  transform="rotate(90 12 12)"
                ></rect>
                <path d="M11.64 5.23a1 1 0 0 0-1.41.13l-5 6a1 1 0 0 0 0 1.27l4.83 6a1 1 0 0 0 .78.37 1 1 0 0 0 .78-1.63L7.29 12l4.48-5.37a1 1 0 0 0-.13-1.4z"></path>
                <path d="M14.29 12l4.48-5.37a1 1 0 0 0-1.54-1.28l-5 6a1 1 0 0 0 0 1.27l4.83 6a1 1 0 0 0 .78.37 1 1 0 0 0 .78-1.63z"></path>
              </g>
            </g>
          </svg>
        </div>
      </div>
    </nav>
  );
}
