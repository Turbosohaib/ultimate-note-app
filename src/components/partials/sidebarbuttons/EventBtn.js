import { useState } from "react";
import { CreateEvent } from "./CreateEvent";

export function EventBtn({ openSideBar }) {
  const [newEventPopUp, setNewEventPopUp] = useState(false);
  return (
    <>
      <button
        onClick={() => setNewEventPopUp(!newEventPopUp)}
        id="eventButton"
        className={`tranistion-all duration-500 ${openSideBar ? "h-0 text-[0px]" : "text-xl h-14 w-full px-7"}  bg-[#ee6631] hover:bg-orange-700 text-white font-bold rounded flex gap-1 items-center`}
      >
        <svg
          className={`${openSideBar ? "w-0 h-0" : "w-[30px] h-[26px]"}`}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.75 4.265a.625.625 0 111.25 0v1.477h.792a2.292 2.292 0 012.291 2.292v5.53a4.598 4.598 0 00-1.25-.123V8.034c0-.575-.466-1.042-1.041-1.042H16v1.856a.625.625 0 11-1.25 0V6.992H9.252v1.856a.625.625 0 11-1.25 0V6.992h-.794c-.575 0-1.041.467-1.041 1.042v9.167c0 .575.466 1.041 1.041 1.041h6.225c.02.436.102.855.236 1.25h-6.46a2.292 2.292 0 01-2.292-2.291V8.034a2.292 2.292 0 012.291-2.292h.794V4.265a.625.625 0 111.25 0v1.477h5.498V4.265z"
            fill="currentColor"
          ></path>
          <path
            d="M9.543 12.41a.917.917 0 11-1.833 0 .917.917 0 011.833 0zM12.917 12.41a.917.917 0 11-1.834 0 .917.917 0 011.834 0zM15.375 13.326a.917.917 0 100-1.833.917.917 0 000 1.833zM9.543 15.784a.917.917 0 11-1.833 0 .917.917 0 011.833 0zM12 16.701a.917.917 0 100-1.833.917.917 0 000 1.833zM18.635 15.527a.625.625 0 10-1.25 0v1.904H15.54a.625.625 0 000 1.25h1.846v1.846a.625.625 0 001.25 0v-1.846h1.904a.625.625 0 000-1.25h-1.904v-1.904z"
            fill="currentColor"
          ></path>
        </svg>
        <div>Event</div>
      </button>
      <CreateEvent
        newEventPopUp={newEventPopUp}
        setNewEventPopUp={setNewEventPopUp}
      />
    </>
  );
}
