export function MoreOptBtn() {
  return (
    <>
      <button
        type="button"
        className="w-full flex justify-center bg-gray-300 py-[12px] rounded-[5px]"
      >
        <svg
          width="32"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16 12c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2-2 .9-2 2zm-2 0c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2zm-6 0c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2z"
            fill="currentColor"
          ></path>
        </svg>
      </button>
    </>
  );
}
