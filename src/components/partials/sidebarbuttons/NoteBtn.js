import axios from "axios";

export function NoteBtn({ openSideBar }) {
  async function CreateNote() {
    try {
      const result = await axios.post("/api/notesApi");
      console.log("RESULT: ", result);
    } catch (err) {
      console.log("ERROR CREATING NOTE: ", err);
    }
  }

  return (
    <>
      <button
        onClick={() => CreateNote()}
        type="button"
        className={`w-full transition-all duration-500 font-bold bg-[#00a82d] ${openSideBar ? "justify-center text-[0px]" : "text-xl px-[75px]"}  py-[14px] text-white rounded-[5px] flex gap-1 items-center`}
      >
        <svg
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.045 4.502a2.292 2.292 0 00-2.292 2.292V17.21a2.292 2.292 0 002.292 2.292h5.623a4.573 4.573 0 01-.237-1.352l-.099.102H8.045a1.042 1.042 0 01-1.042-1.042V6.794c0-.576.467-1.042 1.042-1.042h7.917c.575 0 1.041.466 1.041 1.042v6.775a4.595 4.595 0 011.25-.105v-6.67a2.292 2.292 0 00-2.291-2.292H8.045z"
            fill="currentColor"
          ></path>
          <path
            d="M15.33 8.803c0 .345-.28.625-.624.625H9.3a.625.625 0 110-1.25h5.405c.345 0 .625.28.625.625zM14.706 12.552a.625.625 0 100-1.25H9.3a.625.625 0 000 1.25h5.405zM10.968 15.677a.625.625 0 100-1.25H9.3a.625.625 0 100 1.25h1.667zM18.637 15.547a.625.625 0 00-1.25 0v1.904h-1.846a.625.625 0 000 1.25h1.846v1.846a.625.625 0 001.25 0v-1.846h1.904a.625.625 0 000-1.25h-1.904v-1.904z"
            fill="currentColor"
          ></path>
        </svg>
        <div>Note</div>
      </button>
    </>
  );
}
