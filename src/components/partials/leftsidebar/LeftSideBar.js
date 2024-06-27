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
import Tasks_icon from "@/assets/icons/tasks-icon.svg";
import Files_icon from "@/assets/icons/files-icon.svg";
import Calender_icon from "@/assets/icons/calender-icon.svg";
import Notebooks_icon from "@/assets/icons/notebooks-icon.svg";
import Tags_icon from "@/assets/icons/tags-icon.svg";
import sharedWithMe from "@/assets/icons/shared-with-me-icon.svg";
import Trash_icon from "@/assets/icons/trash-icon.svg";

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

            <div
              className={`ml-[10px] ${openSideBar ? "hidden" : ""} text-gray-500 text-[13px] py-[6px]`}
            >
              <div className="font-semibold text-[16px]">
                turabi1988@gmail.com
              </div>
              <div>turabi1988@gmail.com</div>
            </div>
          </div>
          <div
            className={`${openSideBar ? "hidden" : ""} cursor-pointer opacity-55`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} viewBox="0 0 1000 1000" id="notification-bell"><path d="M792.07,768.51H207.93a38.23,38.23,0,0,1-33-57.63c30.33-51.15,53.06-124.12,57.3-138.23a6,6,0,0,0,.26-1.79V449.42c0-.13,0-.27,0-.4,1.54-61.86,16.56-115,44.62-157.82,22.63-34.57,53.61-62.39,92.07-82.7,64.76-34.21,128-35.15,130.66-35.17h.28c2.66,0,65.9,1,130.66,35.17,38.46,20.31,69.44,48.13,92.07,82.7,28.06,42.86,43.08,96,44.62,157.82,0,.13,0,.27,0,.4V570.86a5.92,5.92,0,0,0,.26,1.79c4.24,14.11,27,87.09,57.3,138.23h0a38.23,38.23,0,0,1-33,57.63ZM264.5,449.63V570.86a38,38,0,0,1-1.62,11c-4.43,14.73-28.19,91-60.42,145.32a5.88,5.88,0,0,0,0,6.1,6.22,6.22,0,0,0,5.49,3.21H792.07a6.22,6.22,0,0,0,5.49-3.21,5.88,5.88,0,0,0,0-6.1h0c-31.41-53-54.19-124.63-60.43-145.33a38.3,38.3,0,0,1-1.61-11V449.63C732.93,349,692.68,277.36,615.86,236.79,559.36,207,503.33,205.39,500,205.33c-3.12.07-60.26,1.76-116.89,32C307,278,267.06,349.44,264.5,449.63Z"></path><path d="M423.25 219.25a16 16 0 01-16-16v-26.5a92.75 92.75 0 01185.5 0v26a16 16 0 11-32 0v-26a60.75 60.75 0 00-121.5 0v26.5A16 16 0 01423.25 219.25zM500 916c-72.95 0-132.31-59.35-132.31-132.31V752.51a16 16 0 0116-16H616.31a16 16 0 0116 16v31.18C632.31 856.65 573 916 500 916zM399.69 768.51v15.18a100.31 100.31 0 10200.62 0V768.51z"></path></svg>
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
              <SideBarLink
                link="/tasks"
                text="Tasks"
                svg_Icon={Tasks_icon}
                openSideBar={openSideBar}
              />
            </li>
            <li>
              <SideBarLink
                link="/files"
                text="Files"
                svg_Icon={Files_icon}
                openSideBar={openSideBar}
              />
            </li>
            <li>
              <SideBarLink
                link="/calender"
                text="Calender"
                svg_Icon={Calender_icon}
                openSideBar={openSideBar}
              />
            </li>
            <li>
              <SideBarLink
                link="/notebooks"
                text="Notebooks"
                svg_Icon={Notebooks_icon}
                openSideBar={openSideBar}
              />
            </li>
            <li>
              <SideBarLink
                link="/tags"
                text="Tags"
                svg_Icon={Tags_icon}
                openSideBar={openSideBar}
              />
            </li>
            <li>
              <SideBarLink
                link="/shared_with_me"
                text="Shared with me"
                svg_Icon={sharedWithMe}
                openSideBar={openSideBar}
              />
            </li>
            <li>
              <SideBarLink
                link="/trash"
                text="Trash"
                svg_Icon={Trash_icon}
                openSideBar={openSideBar}
              />
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
