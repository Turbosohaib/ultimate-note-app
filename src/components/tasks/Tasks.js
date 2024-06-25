export function Tasks() {
  return (
    <div>
      <div className="mt-6 ml-4">
        <h1 className="text-2xl font-bold opacity-70">Tasks</h1>
      </div>
      <div className="flex text-center">
        <h1 className="mt-8 ml-4">0 Tasks</h1>
        <div className="fixed top-20 right-[20px] flex gap-2">
          <h1 className="font-bold text-[#a158eb] mt-2">
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
                stroke-width=".25"
              ></path>
              <path
                d="M16.638 12.708a.625.625 0 10-1.25 0v1.904h-1.846a.625.625 0 100 1.25h1.846v1.846a.625.625 0 101.25 0v-1.846h1.904a.625.625 0 100-1.25h-1.904v-1.904z"
                fill="currentColor"
              ></path>
            </svg>
            New Task
          </h1>
          <div className="mt-3">
            <svg
              className="opacity-60"
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
              width="24px"
              height="20px"
              viewBox="0 0 32 32"
            >
              <path d="M12,25.29l-3.29,3.3V1a1,1,0,0,0-2,0V28.59l-3.3-3.3a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42l5,5a1,1,0,0,0,.32.21,1.09,1.09,0,0,0,.39.08,1,1,0,0,0,.7-.29l5-5a1,1,0,0,0,0-1.42A1,1,0,0,0,12,25.29Z" />
              <path d="M16,2h3.33a1,1,0,0,0,0-2H16a1,1,0,0,0,0,2Z" />
              <path d="M16,7h6.67a1,1,0,0,0,0-2H16a1,1,0,0,0,0,2Z" />
              <path d="M16,12H26a1,1,0,0,0,0-2H16a1,1,0,0,0,0,2Z" />
              <path d="M29.33,15H16a1,1,0,0,0,0,2H29.33a1,1,0,0,0,0-2Z" />
            </svg>
          </div>
          <div className="mt-3">
            <svg
              className="opacity-60"
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
              width="24px"
              height="20px"
              viewBox="0 0 35 35"
              data-name="Layer 2"
              id="Layer_2"
            >
              <path d="M20.33,34.32a3.25,3.25,0,0,1-1.11-.2l-.13,0-5.6-2.75a3.27,3.27,0,0,1-2.09-3V20.34a.73.73,0,0,0-.26-.57L2,12.59A3.29,3.29,0,0,1,.8,10.09V3.94A3.26,3.26,0,0,1,4.06.68H30.94A3.26,3.26,0,0,1,34.2,3.94v6.15a3.26,3.26,0,0,1-1.11,2.46L23.8,19.81a.76.76,0,0,0-.21.53V31.05a3.26,3.26,0,0,1-3.26,3.27Zm-.21-2.53a.76.76,0,0,0,1-.74V20.34a3.25,3.25,0,0,1,1.12-2.45l9.29-7.27a.76.76,0,0,0,.2-.53V3.94a.76.76,0,0,0-.76-.76H4.06a.76.76,0,0,0-.76.76v6.15a.77.77,0,0,0,.26.58l9.18,7.17a3.3,3.3,0,0,1,1.16,2.5v7.94a.78.78,0,0,0,.51.72l.12.05Z" />
            </svg>
          </div>
          <div className="relative ">
            <input
              placeholder="Find Tasks..."
              className="h-[45px] w-[250px] border border-gray-500 rounded pl-4 "
            ></input>
            <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M14.9536 14.9458L21 21M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                  stroke="#000000"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>

          <button
            type="button"
            className="transition-all duration-300 hover:bg-gray-200  rounded-[5px]"
          >
            <svg
              className="opacity-60"
              class=""
              width="22px"
              height="22px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clipRule="evenodd"
                d="M16 12c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2-2 .9-2 2zm-2 0c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2zm-6 0c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2z"
                fill="currentColor"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <div className="flex gap-8 mt-6 ml-8 border-b border-solid  border-gray-300 h-[40px]">
        <h1>My Tasks</h1>
        <h1>Notebooks</h1>
        <h1>Notes</h1>
        <h1>Today</h1>
        <h1>Assigned</h1>
      </div>
      <div className="flex mt-8 ml-6 border-b border-solid  border-gray-300 h-[40px]">
        <h1 className="font-bold opacity-70">Title</h1>
        <div className="fixed top-55 right-12 flex gap-16">
          <h1 className="font-bold opacity-70">Due date</h1>
          <h1 className="font-bold opacity-70">Assigned note</h1>
          <h1 className="font-bold opacity-70">Assigned to</h1>
        </div>
      </div>
      <div className="">
        <div className="flex items-center justify-center h-64 mt-[110px]">
          <svg
            width="180"
            height="180"
            viewBox="0 0 150 150"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="yC7OCHkC_Xb4Us_cqs0a"
          >
            <g clip-path="url(#clip0_927_75395)">
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
        <div className="ml-[420px] font-semibold font-sans text-medium">
          Manage and organize tasks all in one place
        </div>
        <div className="ml-[300px] mt-2 tex-medium font-sans">
          Easily sort by due date, note, or assigned status using this view and
          more
        </div>
      </div>
    </div>
  );
}
