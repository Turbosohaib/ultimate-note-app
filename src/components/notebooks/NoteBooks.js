import Link from "next/link"

export function Notebooks() {
    return (
        <div>
            <div className="text-3xl font-semibold m-[25px] opacity-80">
                <h1>Notebooks</h1>
            </div>
            <div className="m-[25px] max-w-[100%] flex items-center grid grid-cols-2">
                <h1 className="text-xl opacity-50">1 notebook</h1>
                <div className="flex space-x-8 ml-[50px] items-center">
                    <div>
                        <button className="flex  font-bold text-[#00a82d]">
                            <svg width="30" height="26" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="G4KnwaCtyo2d1CNOQcEP"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.25 17.502v-15h10.208a2.292 2.292 0 012.292 2.291v6.67a4.571 4.571 0 00-1.25.107V4.793c0-.575-.466-1.041-1.042-1.041h-6.46v12.5h3.936c.02.435.1.854.233 1.25H4.25zM5.5 3.752v12.5h1.248v-12.5H5.5z" fill="#737373"></path><path d="M13.255 8.449a.75.75 0 000-1.5h-3a.75.75 0 000 1.5h3zM17.137 13.547a.625.625 0 10-1.25 0v1.904h-1.846a.625.625 0 100 1.25h1.846v1.846a.625.625 0 101.25 0V16.7h1.904a.625.625 0 000-1.25h-1.904v-1.904z" fill="#737373"></path></svg>
                            New Notebook
                        </button>
                    </div>
                    <div className="cursor-pointer">
                        <svg width="35" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="mkStI0pYs1UYA2Z1eJ1_"><path d="M8.183 4.625a.625.625 0 00-1.25 0V17.87L5.067 16a.625.625 0 00-.884 0 .62.62 0 000 .88l2.933 2.94c.244.244.64.244.884 0l2.933-2.94a.62.62 0 000-.88.625.625 0 00-.884 0l-1.866 1.87V4.625zM11.625 5a.625.625 0 100 1.25h8.75a.625.625 0 100-1.25h-8.75zM11 9.375c0-.345.28-.625.625-.625h6.25a.625.625 0 110 1.25h-6.25A.625.625 0 0111 9.375zM11.625 12.5a.625.625 0 100 1.25h3.75a.625.625 0 100-1.25h-3.75z" fill="currentColor"></path></svg>
                    </div>
                    <div>
                        <input type="text" className=" bg-[#f8f2f7] pl-[100px] pr-[40px] pt-[12px] pb-[12px] border border-gray-300 rounded-md " placeholder="Find Notebooks..." />
                    </div>

                </div>

            </div>


        </div>
    )
}