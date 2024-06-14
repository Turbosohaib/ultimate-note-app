import Link from "next/link"

export function Notebooks() {
    return (
        <div className="py-8 px-6">
            <div className="text-3xl font-semibold opacity-80">
                <h1>Notebooks</h1>
            </div>
            <div className="py-4 w-full flex justify-between items-center">
                <h1 className="text-xl opacity-50">1 notebook</h1>
                <div className="flex gap-2 items-center">
                    <div className="w-[250px]">
                        <button className="flex gap-1 font-bold text-[#00a82d]">
                            <svg width="30" height="26" viewBox="0 0 21 20" xmlns="http://www.w3.org/2000/svg" className="G4KnwaCtyo2d1CNOQcEP"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.25 17.502v-15h10.208a2.292 2.292 0 012.292 2.291v6.67a4.571 4.571 0 00-1.25.107V4.793c0-.575-.466-1.041-1.042-1.041h-6.46v12.5h3.936c.02.435.1.854.233 1.25H4.25zM5.5 3.752v12.5h1.248v-12.5H5.5z" fill="#00a82d"></path><path d="M13.255 8.449a.75.75 0 000-1.5h-3a.75.75 0 000 1.5h3zM17.137 13.547a.625.625 0 10-1.25 0v1.904h-1.846a.625.625 0 100 1.25h1.846v1.846a.625.625 0 101.25 0V16.7h1.904a.625.625 0 000-1.25h-1.904v-1.904z" fill="#00a82d"></path></svg>
                            New Notebook
                        </button>
                    </div>
                    <div className="cursor-pointer">
                        <svg width="35" height="30" opacity={1} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="mkStI0pYs1UYA2Z1eJ1_"><path d="M8.183 4.625a.625.625 0 00-1.25 0V17.87L5.067 16a.625.625 0 00-.884 0 .62.62 0 000 .88l2.933 2.94c.244.244.64.244.884 0l2.933-2.94a.62.62 0 000-.88.625.625 0 00-.884 0l-1.866 1.87V4.625zM11.625 5a.625.625 0 100 1.25h8.75a.625.625 0 100-1.25h-8.75zM11 9.375c0-.345.28-.625.625-.625h6.25a.625.625 0 110 1.25h-6.25A.625.625 0 0111 9.375zM11.625 12.5a.625.625 0 100 1.25h3.75a.625.625 0 100-1.25h-3.75z" fill="currentColor"></path></svg>
                    </div>
                    <div className="relative w-full">
                        <input type="text" className=" bg-[#f8f2f7] outline-0 focus:ring-1 focus:ring-blue-500 pl-4 pr-10 w-full py-3 border border-gray-300 rounded-md " placeholder="Find Notebooks..." />
                        <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" opacity={0.5} viewBox="0 0 24 24" id="search"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M15.5 14h-.79l-.28-.27c1.2-1.4 1.82-3.31 1.48-5.34-.47-2.78-2.79-5-5.59-5.34-4.23-.52-7.79 3.04-7.27 7.27.34 2.8 2.56 5.12 5.34 5.59 2.03.34 3.94-.28 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></svg>
                        </div>
                    </div>

                </div>

            </div >
            <div className="">
                <div className="grid font-semibold grid-cols-12 px-3 py-2 text-[18px] border-b border-solid border-gray-300">
                    <div className="col-span-4 flex items-center space-x-2 font-semibold">
                        Title
                        <svg className="hover:rotate-180" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" id="down-arrow"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M11 5v11.17l-4.88-4.88c-.39-.39-1.03-.39-1.42 0-.39.39-.39 1.02 0 1.41l6.59 6.59c.39.39 1.02.39 1.41 0l6.59-6.59c.39-.39.39-1.02 0-1.41-.39-.39-1.02-.39-1.41 0L13 16.17V5c0-.55-.45-1-1-1s-1 .45-1 1z"></path></svg>
                    </div>
                    <div className="col-span-2 text-end">Created by</div>
                    <div className="col-span-2 text-end">Updated</div>
                    <div className="col-span-2 text-end">Shared with</div>
                    <div className="col-span-2 text-end">Actions</div>
                </div>
            </div>


        </div >
    )
}