import Link from "next/link";

export function Files() {
  return (
    <div className="py-2 px-2 h-full">
      <div className="grid grid-cols-12 gap-4 h-full">
        <div className="col-span-5 p-4 h-full">
          <div className="text-4xl font-semibold">Files</div>
          <div className="flex justify-between items-center py-6 ">
            <div className="opacity-50">0 elements</div>
            <div className="flex space-x-4 ">
              <svg
                id="attachement"
                className="cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                width="30px"
                height="26px"
                viewBox="0 0 24 24"
              >
                <path d="M13 18.999a.974.974 0 0 0 .196.563l-1.79 1.81a5.5 5.5 0 1 1-7.778-7.78L15.185 2.159a4 4 0 0 1 5.63 5.685L10.259 18.276a2.5 2.5 0 0 1-3.526-3.545l8-7.999.706.707-8 8a1.5 1.5 0 0 0 2.116 2.126L20.111 7.132a3 3 0 1 0-4.223-4.263L4.332 14.304a4.5 4.5 0 1 0 6.364 6.364L13 18.338zM19 14h-1v4h-4v.999h4V23h1v-4.001h4V18h-4z" />
                <path fill="none" d="M0 0h24v24H0z" />
              </svg>
              <svg
                className="cursor-pointer"
                width="35"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.183 4.625a.625.625 0 00-1.25 0V17.87L5.067 16a.625.625 0 00-.884 0 .62.62 0 000 .88l2.933 2.94c.244.244.64.244.884 0l2.933-2.94a.62.62 0 000-.88.625.625 0 00-.884 0l-1.866 1.87V4.625zM11.625 5a.625.625 0 100 1.25h8.75a.625.625 0 100-1.25h-8.75zM11 9.375c0-.345.28-.625.625-.625h6.25a.625.625 0 110 1.25h-6.25A.625.625 0 0111 9.375zM11.625 12.5a.625.625 0 100 1.25h3.75a.625.625 0 100-1.25h-3.75z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
          </div>
          <div className="relative w-full">
            <input
              type="text"
              className="text-xl bg-[#f8f2f7] outline-0 focus:ring-1 focus:ring-blue-500 pl-4 pr-10 w-full py-3 border border-gray-300 rounded-md "
              placeholder="Search file"
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
          <div className="py-28">
            <div className="flex items-center justify-center">
              <svg
                width="200"
                height="200"
                viewBox="0 0 150 150"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_2450_59022)">
                  <path
                    fill="#F5BFF0"
                    d="M48.945 16.652l77.274 20.706-25.882 96.592-77.274-20.705z"
                  ></path>
                </g>
                <g clipPath="url(#clip1_2450_59022)">
                  <path
                    d="M92.815 31.682c1.105-1.137 2.762-2.721 4.468-4.256 2.573-2.314 5.207-4.547 8.159-6.349 1.819-1.11 3.725-1.843 5.805-1.78 2.412.074 4.608.738 6.488 2.101 2.829 2.052 3.576 5.033 2.951 8.552-.537 3.02-1.873 5.788-3.446 8.468-1.481 2.524-3.211 4.893-4.992 7.227a165.245 165.245 0 01-4.59 5.765 145.07 145.07 0 01-4.687 5.339 76.616 76.616 0 01-3.458 3.522c-1.788 1.707-3.646 3.335-5.815 4.533-1.11.614-2.294.918-3.51 1.025-1.899.166-3.734-.002-5.448-.694-2.04-.823-3.7-2.071-4.524-4.187-.622-1.594-.54-3.277-.094-4.992.568-2.184 1.986-3.989 2.963-5.52 1.222-1.914 2.891-3.902 4.342-5.657 4.161-5.037 8.582-9.9 13.186-14.547.467-.407.966-.776 1.319-1.302.165-.245.411-.23.58-.09.328.27.574.591.601 1.081.019.347.264.63.435.926.156.27.249.552.066.863-.108.184-.241.378-.408.502-.631.464-1.137 1.065-1.726 1.563-.551.466-.989 1-1.418 1.553-.16.207-.377.19-.571.268.182.205-.038.376-.143.484-.136.142-.365.188-.523.335-.047.044-.11.072-.148.12-2.631 3.263-12.082 13.23-15.051 19.908-.335 1.219-.392 2.41.214 3.485.509.904 1.323 1.486 2.252 1.903 1.63.731 3.378.91 5.222.523 1.055-.22 1.947-.822 2.802-1.475 2.137-1.63 4.01-3.543 5.844-5.503a97.33 97.33 0 003.028-3.382c1.057-1.239 2.107-2.483 3.103-3.77 1.091-1.408 2.217-2.79 3.28-4.218 2.059-2.762 4.18-5.487 5.815-8.519 1.042-1.932 1.935-3.911 2.305-6.044.274-1.578.194-3.074-.772-4.335-.67-.874-1.589-1.41-2.609-1.8-1.339-.513-2.728-.824-4.239-.565-1.183.203-2.218.807-3.229 1.459-1.332.86-2.581 1.843-3.806 2.858-2.986 2.474-5.75 5.186-8.445 7.968-1.567 1.618-3.116 3.255-4.594 4.956-.898 1.035-1.853 2.024-2.732 3.075-1.243 1.487-2.517 2.95-3.715 4.475-1.2 1.528-2.344 3.089-3.32 4.76-1.02 1.747-1.817 3.566-2.115 5.537-.32 2.116.087 4.042 1.113 5.773 1.503 2.535 3.678 4.267 6.613 4.982 2.822.688 5.51.083 8.031-1.716.93-.663 2.024-1.168 2.771-2.04.437-.511 1.777-1.65 2.25-2.132 1.892-2.01 5.393-5.486 8.095-8.944.223-.234.667-.003.845.203.325.375.635.764.936 1.158.112.148.009.298-.099.435-1.742 2.632-4.556 5.717-7.386 8.547-1.464 1.464-2.808 3.011-4.362 4.394-3.693 3.288-7.816 4.539-12.373 3.493-2.72-.624-4.99-1.994-6.825-3.988-2.222-2.415-3.512-5.296-3.49-8.777.01-1.82.443-3.595 1.117-5.331 1.112-2.861 2.804-5.41 4.708-7.848 1.408-1.804 2.905-3.535 4.402-5.265a150.321 150.321 0 014.552-4.997 239.723 239.723 0 014.001-4.095h.001z"
                    fill="#262626"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_2450_59022">
                    <path
                      fill="#fff"
                      transform="rotate(15 -38.77 194.212)"
                      d="M0 0h80v100H0z"
                    ></path>
                  </clipPath>
                  <clipPath id="clip1_2450_59022">
                    <path
                      fill="#fff"
                      transform="rotate(-135 59.821 20.84)"
                      d="M0 0h28.83v61.503H0z"
                    ></path>
                  </clipPath>
                </defs>
              </svg>{" "}
            </div>
            <div className="text-center text-xl opacity-80">
              <div className="font-bold">
                Manage your important files in Evernote
              </div>
              <div>
                Click the add file button above to upload your first <br></br>{" "}
                attachment
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-7 bg-white shadow-lg h-full rounded-md"></div>
      </div>
    </div>
  );
}
