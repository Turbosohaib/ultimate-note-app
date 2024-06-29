"use client"
import Link from "next/link";
import { useState } from "react";



export function Notes() {
    const [sortoption, setSortOption] = useState(false);


    const toggleSort = () => {
        setSortOption(!sortoption);
    };






    return (
        <div className="py-2 px-2">
            <div className="grid grid-cols-12 gap-4">
                <div className="col-span-5 p-4">
                    <div className="text-3xl font-semibold">
                        Notes
                    </div>
                    <div className="flex justify-between items-center py-6 ">
                        <div className="opacity-50">
                            0 notes
                        </div>
                        <div className="flex space-x-2 ">
                            <div>
                                <button
                                    onClick={toggleSort}
                                    type="button"
                                    className="transition-all duration-300 hover:bg-gray-200 p-0.5 rounded-[5px]">
                                    <svg className="cursor-pointer" width="35" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.183 4.625a.625.625 0 00-1.25 0V17.87L5.067 16a.625.625 0 00-.884 0 .62.62 0 000 .88l2.933 2.94c.244.244.64.244.884 0l2.933-2.94a.62.62 0 000-.88.625.625 0 00-.884 0l-1.866 1.87V4.625zM11.625 5a.625.625 0 100 1.25h8.75a.625.625 0 100-1.25h-8.75zM11 9.375c0-.345.28-.625.625-.625h6.25a.625.625 0 110 1.25h-6.25A.625.625 0 0111 9.375zM11.625 12.5a.625.625 0 100 1.25h3.75a.625.625 0 100-1.25h-3.75z" fill="currentColor"></path>
                                    </svg>
                                </button>
                                {sortoption && (
                                    <div className='absolute'>
                                        <div onClick={toggleSort} className=''></div>
                                        <div className='p-4 w-[250px]  font-semibold shadow-lg bg-white absolute top-0 left-0 right-0 '>
                                            <div className="text-xs py-1">
                                                SORT BY
                                            </div>
                                            <div className='hover:bg-slate-200 rounded-md cursor-pointer px-2 p-1 text-xl'>
                                                <button>Title</button>
                                            </div>
                                            <div className='hover:bg-slate-200 rounded-md cursor-pointer px-2 p-1 text-xl text-[#6377ff] '>
                                                <button className="flex gap-10">
                                                    Date updated
                                                    <svg className="hover:rotate-180 my-1" xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 8.706 15.698" id="Down"><path d="m8 10.646-3.147 3.14V0h-1v13.786l-3.147-3.14-.706.708 4.353 4.344 4.353-4.344z" fill="#6377ff" class="color000000 svgShape"></path></svg>
                                                </button>
                                            </div>
                                            <div className='hover:bg-slate-200  rounded-md cursor-pointer px-2 p-1 text-xl'>
                                                <button>Date created</button>
                                            </div>
                                            <hr className="my-2" />
                                            <div className='hover:bg-slate-200 rounded-md cursor-pointer px-2 p-1 text-xl'>
                                                <button>Show notes in groups</button>
                                            </div>



                                        </div>

                                    </div>
                                )}

                            </div>
                            <div>
                                <button>
                                    <svg className="cursor-pointer" width="35" height="35" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="zQrLdeeT5zERyVoANWWh"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.898 6.933C3.958 5.747 4.803 4 6.316 4h11.368c1.513 0 2.358 1.747 1.417 2.933l-4.442 5.6v3.434c0 .688-.312 1.34-.847 1.774l-2.444 1.979c-.816.66-2.034.08-2.034-.97v-6.216L4.898 6.933zm1.418-1.688a.564.564 0 00-.442.915l4.705 5.94V18.751l.002.001.002.001.002-.001 2.444-1.979c.243-.197.385-.493.385-.806V12.1l4.712-5.94a.564.564 0 00-.442-.915H6.316z" fill="currentColor"></path></svg>

                                </button>
                            </div>
                            <div>
                                <button>
                                    <svg className="cursor-pointer" width="35" height="35" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.375 8.925V5.25H6a.75.75 0 00-.75.75v2.925h7.125zm0 1.25H5.25v3.65h7.125v-3.65zm0 4.9H5.25V18c0 .414.336.75.75.75h6.375v-3.675zM6 20a2 2 0 01-2-2V6a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H6zm7.625-14.75H18a.75.75 0 01.75.75v12a.75.75 0 01-.75.75h-4.375V5.25z" fill="currentColor"></path></svg>

                                </button>
                            </div>

                        </div>
                    </div>
                    <div className='py-28'>
                        <div className='flex items-center justify-center'>
                            <svg width="180" height="180" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_4424_79722)"><path d="M24.5 25h35c27.614 0 50 22.386 50 50v50h-35c-27.614 0-50-22.386-50-50V25z" fill="#96D347"></path><path d="M37.34 45.694c-.244 0-.484.017-.724 0-.619-.054-1.74.523-1.605-.624.095-.814-.44-2.19 1.375-2.388a298.823 298.823 0 0116.101-1.297c8.155-.445 16.309-.878 24.46-1.326.345-.018.673-.219.913.243.575 1.097-.724 3.492-1.976 3.542-9.108.373-18.215.706-27.319 1.104-3.748.165-7.488.462-11.232.699v.05l.007-.003zM67.766 63.233c-9.671.86-19.394 1.083-29.025 2.402-2.303.315-2.424.129-2.07-2.033.156-.953.814-.925 1.43-1.025 10.01-1.688 20.06-2.971 30.237-3.072.12 0 .262-.068.356-.025.917.405 2.504-1.118 2.816.652.36 2.022-.957 3.119-3.205 3.105h-.542l.003-.004zM65.808 52.978c-9.475.706-18.578 1.387-27.682 2.064-.655.05-1.689.542-1.587-.66.073-.838-.506-2.042 1.34-2.354 10.05-1.71 20.165-2.423 30.346-2.492.545 0 1.088-.053 1.63-.06.727-.008 1.72-.882 2.081.426.335 1.219-.666 2.94-1.798 3.036-1.553.133-3.129.032-4.333.032l.003.008zM48.427 71.474c.36 0 .739-.065 1.08.018.546.129 1.58-.527 1.543.527-.032.92.262 2.254-1.382 2.48-3.09.423-6.164.947-9.253 1.359-.6.078-1.798.498-1.63-.62.156-1.04-.565-2.868 1.382-3 2.762-.187 5.458-1.037 8.26-.764z" fill="#262626"></path><g clip-path="url(#clip1_4424_79722)"><path fill-rule="evenodd" clip-rule="evenodd" d="M73.536 102.386c-.245.558-.492 1.12-.536 1.765l-.004-.004c.034.18.048.379.063.578.032.44.064.88.305 1.101.397.367.78.065 1.15-.226.138-.109.275-.217.41-.288.388-.204.777-.407 1.167-.61 1.678-.875 3.358-1.751 4.96-2.747.666-.414 1.371-.778 2.075-1.141 1.446-.744 2.89-1.488 3.993-2.668 1.023-1.094 1.913-2.305 2.803-3.518.523-.711 1.045-1.423 1.596-2.112 7.091-8.86 14.576-17.396 22.061-25.934 3.557-4.057 7.115-8.114 10.63-12.206 1.205-1.406.914-2.259-.073-3.348-.766-.845-1.624-1.598-2.482-2.352-1.166-1.024-2.332-2.049-3.268-3.301-.551-.732-.981-.252-1.414.23l-.009.011c-.449.498-.914.982-1.38 1.467-.62.646-1.241 1.293-1.823 1.971-1.812 2.11-3.625 4.22-5.439 6.328-6.472 7.526-12.945 15.053-19.35 22.632-6.137 7.26-11.722 14.886-15.193 23.798-.075.193-.159.383-.242.574zm4.31-3.52c-.224.732-.447 1.465-.725 2.133.682-.429 1.378-.816 2.068-1.2 2.19-1.219 4.315-2.402 5.733-4.765 2.31-3.85 5.285-7.353 8.22-10.808l.109-.127c1.828-2.151 3.642-4.314 5.456-6.478 6.831-8.145 13.663-16.293 21.239-23.807.061-.061.139-.122.22-.186.292-.23.621-.49.304-.85l-.2-.228c-.668-.764-1.375-1.573-2.248-1.987-.565-.269-.932.31-1.263.835a4.433 4.433 0 01-.32.464c-3.788 4.54-7.632 9.035-11.477 13.53-6.39 7.471-12.78 14.943-18.912 22.623l-.129.162c-1.808 2.268-3.62 4.541-5.957 6.477-1.117.927-1.618 2.57-2.118 4.212z" fill="#262626"></path></g></g><defs><clipPath id="clip0_4424_79722"><path fill="#fff" transform="translate(25 25)" d="M0 0h100v100H0z"></path></clipPath><clipPath id="clip1_4424_79722"><path fill="#fff" transform="translate(73 45)" d="M0 0h52v61H0z"></path></clipPath></defs></svg>                        </div>
                        <div className='text-center text-xl opacity-80 py-12'>
                            <div className='font-bold'>
                                Create your first note
                            </div>
                            <div>
                                Click the
                                <Link className="text-[#00a82d]" href="">
                                    {" "}
                                    + New Note
                                </Link>{" "}
                                button in the sidebar to get <br></br> started.
                            </div>

                        </div>
                    </div>


                </div>

                <div className='col-span-7 bg-white shadow-lg h-[748px] rounded-md'>

                </div>



            </div>


        </div>
    );
}

