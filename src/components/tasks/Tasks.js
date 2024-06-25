export function Tasks() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold opacity-70">Tasks</h1>
      <div className="mt-8 w-full flex justify-between items-center">
        <h1>0 Tasks</h1>
        <div className="flex gap-2 items-center">
          <div className="w-[220px]">
            <button className="flex gap-1 font-bold text-[#a158eb]">
              <svg
                width="28"
                height="21"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="inline-block"
              >
                <path
                  d="M13.627 7.02h0c.287.227.332.64.1.922l-.1-.922zm0 0a.673.673 0 00-.934.097l-3.631 4.4L7.24 9.874a.673.673 0 00-.939.037l.091.086-.091-.086a.647.647 0 00.039.927l2.342 2.115s0 0 0 0a.673.673 0 00.966-.07s0 0 0 0l4.077-4.94-.1-.923zm3.76 4.155l.142.048.02-.149a7.625 7.625 0 10-5.374 6.236l.145-.043-.068-.133a4.222 4.222 0 01-.324-.855l-.033-.124-.123.035a6.438 6.438 0 114.61-5.349l-.016.128.128.013c.308.033.607.098.893.194z"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth=".25"
                ></path>
                <path
                  d="M16.638 12.708a.625.625 0 10-1.25 0v1.904h-1.846a.625.625 0 100 1.25h1.846v1.846a.625.625 0 101.25 0v-1.846h1.904a.625.625 0 100-1.25h-1.904v-1.904z"
                  fill="currentColor"
                ></path>
              </svg>
              New Task
            </button>
          </div>
          <div className="cursor-pointer">
            <svg
              width="35"
              height="30"
              opacity={1}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mkStI0pYs1UYA2Z1eJ1_"
            >
              <path
                d="M8.183 4.625a.625.625 0 00-1.25 0V17.87L5.067 16a.625.625 0 00-.884 0 .62.62 0 000 .88l2.933 2.94c.244.244.64.244.884 0l2.933-2.94a.62.62 0 000-.88.625.625 0 00-.884 0l-1.866 1.87V4.625zM11.625 5a.625.625 0 100 1.25h8.75a.625.625 0 100-1.25h-8.75zM11 9.375c0-.345.28-.625.625-.625h6.25a.625.625 0 110 1.25h-6.25A.625.625 0 0111 9.375zM11.625 12.5a.625.625 0 100 1.25h3.75a.625.625 0 100-1.25h-3.75z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
          <div>
            <svg
              className="opacity-60"
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
              width="24"
              height="24"
              viewBox="0 0 35 35"
              data-name="Layer 2"
              id="Layer_2"
            >
              <path d="M20.33,34.32a3.25,3.25,0,0,1-1.11-.2l-.13,0-5.6-2.75a3.27,3.27,0,0,1-2.09-3V20.34a.73.73,0,0,0-.26-.57L2,12.59A3.29,3.29,0,0,1,.8,10.09V3.94A3.26,3.26,0,0,1,4.06.68H30.94A3.26,3.26,0,0,1,34.2,3.94v6.15a3.26,3.26,0,0,1-1.11,2.46L23.8,19.81a.76.76,0,0,0-.21.53V31.05a3.26,3.26,0,0,1-3.26,3.27Zm-.21-2.53a.76.76,0,0,0,1-.74V20.34a3.25,3.25,0,0,1,1.12-2.45l9.29-7.27a.76.76,0,0,0,.2-.53V3.94a.76.76,0,0,0-.76-.76H4.06a.76.76,0,0,0-.76.76v6.15a.77.77,0,0,0,.26.58l9.18,7.17a3.3,3.3,0,0,1,1.16,2.5v7.94a.78.78,0,0,0,.51.72l.12.05Z" />
            </svg>
          </div>
          <div className="relative w-full">
            <input
              type="text"
              className=" bg-[#f8f2f7] outline-0 focus:ring-1 focus:ring-blue-500 pl-4 pr-10 w-full py-3 border border-gray-300 rounded-md "
              placeholder="Find Notebooks..."
            />
            <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
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
      </div>
      <div className="flex gap-8 mt-6 text-[20px] font-normal text-[#6c6c6c] border-gray-300 pt-3">
        <h1 className="cursor-pointer w-[120px] text-center hover:font-semibold group">
          My tasks
          <div className="group-hover:opacity-100 opacity-0 border-b-2 border-solid border-gray-400 h-2"></div>
        </h1>
        <h1 className="">Notebooks</h1>
        <h1 className="">Notes</h1>
        <h1 className="">Today</h1>
        <h1 className="">Assigned</h1>
      </div>
      <div className="flex items-center justify-between  border-y border-solid border-gray-300 py-3 pl-5 pr-4">
        <h1 className="font-bold opacity-70">Title</h1>
        <div className="flex gap-16">
          <h1 className="font-bold opacity-70">Due date</h1>
          <h1 className="font-bold opacity-70">Assigned note</h1>
          <h1 className="font-bold opacity-70">Assigned to</h1>
        </div>
      </div>
      <div>
        <div className="flex items-center justify-center mt-[110px]">
          <svg
            width="180"
            height="180"
            viewBox="0 0 150 150"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="yC7OCHkC_Xb4Us_cqs0a"
          >
            <g clipPath="url(#clip0_927_75395)">
              <path fill="#D9B6FD" d="M26 26h98v98H26z"></path>
            </g>
            <path
              d="M89.543 71.479c2.402-4.021 17.398-25.678 19.642-29.517 1.596-2.738 3.1-5.515 4.633-8.283.288-.516.591-1.067 1.292-1.139.827-.084.904.627 1.259 1.067 1.308 1.638 1.471 3.302.361 5.07-3.945 6.287-19.84 30.77-24.54 36.683-1.898 2.387-3.772 2.434-5.627.076-3.037-3.864-13.552-22.382-15.576-26.724-.24-.52-.557-1.092-.139-1.583.409-.479 1.033-.043 1.567-.051 2.326-.038 3.498 1.139 4.363 2.895 1.201 2.442 10.814 19.102 12.765 21.497v.009z"
              fill="#262626"
            ></path>
            <defs>
              <clipPath id="clip0_927_75395">
                <rect
                  x="26"
                  y="26"
                  width="98"
                  height="98"
                  rx="49"
                  fill="#fff"
                ></rect>
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className="text-center">
          <div className="font-semibold font-sans text-medium">
            Manage and organize tasks all in one place
          </div>
          <div className="mt-2 tex-medium font-sans">
            Easily sort by due date, note, or assigned status using this view
            and more
          </div>
        </div>
      </div>
    </div>
  );
}
