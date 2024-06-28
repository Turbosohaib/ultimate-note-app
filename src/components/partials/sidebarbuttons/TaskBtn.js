export function TaskBtn({ openSideBar }) {
  return (
    <>
      <button
        id="taskButton"
        className={`tranistion-all duration-500 ${openSideBar ? "h-0 text-[0px]" : "text-xl h-14 w-full px-7"}  bg-[#a158eb] hover:bg-purple-700 text-white font-bold rounded flex gap-1 items-center`}
      >
        <svg
          className={`${openSideBar ? "w-0 h-0" : "w-[30px] h-[26px]"}`}
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
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
        <div>Task</div>
      </button>
    </>
  );
}
