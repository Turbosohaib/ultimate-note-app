import React from 'react'

export function FirstNoteBook() {
    return (
        <div class="container mx-auto p-4">
            <div class="grid grid-cols-12 gap-4">
                <div class="col-span-5 p-4">
                    <div className='text-3xl font-semibold opacity-80'>First NoteBook</div>
                    <div className='flex justify-between items-center py-6'>
                        <div className='py-8'>
                            0 notes
                        </div>
                        <div className='flex gap-2'>
                            <div>
                                <button>
                                    <svg className='hover:bg-gray-200 rounded-[5px] p-[3px]' width="35" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.183 4.625a.625.625 0 00-1.25 0V17.87L5.067 16a.625.625 0 00-.884 0 .62.62 0 000 .88l2.933 2.94c.244.244.64.244.884 0l2.933-2.94a.62.62 0 000-.88.625.625 0 00-.884 0l-1.866 1.87V4.625zM11.625 5a.625.625 0 100 1.25h8.75a.625.625 0 100-1.25h-8.75zM11 9.375c0-.345.28-.625.625-.625h6.25a.625.625 0 110 1.25h-6.25A.625.625 0 0111 9.375zM11.625 12.5a.625.625 0 100 1.25h3.75a.625.625 0 100-1.25h-3.75z" fill="currentColor"></path></svg>

                                </button>
                            </div>
                            <div>
                                <button>
                                    <svg className='hover:bg-gray-200 rounded-[5px] p-[3px]' width="35" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="zQrLdeeT5zERyVoANWWh"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.898 6.933C3.958 5.747 4.803 4 6.316 4h11.368c1.513 0 2.358 1.747 1.417 2.933l-4.442 5.6v3.434c0 .688-.312 1.34-.847 1.774l-2.444 1.979c-.816.66-2.034.08-2.034-.97v-6.216L4.898 6.933zm1.418-1.688a.564.564 0 00-.442.915l4.705 5.94V18.751l.002.001.002.001.002-.001 2.444-1.979c.243-.197.385-.493.385-.806V12.1l4.712-5.94a.564.564 0 00-.442-.915H6.316z" fill="currentColor"></path></svg>
                                </button>
                            </div>
                            <div>
                                <button>
                                    <svg className='hover:bg-gray-200 rounded-[5px] p-[3px]' width="35" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.375 8.925V5.25H6a.75.75 0 00-.75.75v2.925h7.125zm0 1.25H5.25v3.65h7.125v-3.65zm0 4.9H5.25V18c0 .414.336.75.75.75h6.375v-3.675zM6 20a2 2 0 01-2-2V6a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H6zm7.625-14.75H18a.75.75 0 01.75.75v12a.75.75 0 01-.75.75h-4.375V5.25z" fill="currentColor"></path></svg>

                                </button>
                            </div>
                            <div>
                                <button type="button" className="hover:bg-gray-200 p-[3px] rounded-[5px]">
                                    <svg width="30" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clipRule="evenodd" d="M16 12c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2-2 .9-2 2zm-2 0c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2zm-6 0c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2z" fill="currentColor"></path></svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className=''>
                        <div className='flex items-center justify-center py-28'>
                            <svg width="180" height="180" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg" class="yNQS4hUZGTOUuh_KELfV"><path fill="#96D347" d="M25 26h99v98H25z"></path><path d="M42.83 49.8c-.295 0-.586.022-.876 0-.748-.064-2.103.626-1.94-.744.114-.972-.533-2.616 1.663-2.852a365.725 365.725 0 0119.47-1.55c9.862-.53 19.723-1.049 29.579-1.584.418-.021.814-.261 1.105.291.695 1.31-.876 4.17-2.39 4.23-11.014.446-22.027.844-33.037 1.32-4.532.196-9.055.551-13.583.834v.06l.009-.004zM79.624 70.75c-11.695 1.028-23.453 1.293-35.1 2.87-2.786.376-2.93.153-2.504-2.429.19-1.139.986-1.104 1.73-1.224 12.104-2.017 24.258-3.55 36.565-3.67.145 0 .317-.08.431-.03 1.11.484 3.028-1.335 3.406.78.436 2.415-1.157 3.725-3.877 3.708h-.655l.004-.005zM77.257 58.5c-11.458.844-22.468 1.658-33.477 2.467-.792.06-2.042.647-1.919-.788.089-1.002-.611-2.44 1.62-2.813 12.153-2.042 24.386-2.894 36.698-2.975.66 0 1.315-.065 1.97-.073.88-.009 2.082-1.053 2.518.51.405 1.455-.805 3.51-2.174 3.626-1.879.158-3.784.038-5.24.038l.004.009zM56.237 80.594c.436 0 .893-.077 1.307.021.66.154 1.91-.63 1.866.63-.04 1.1.316 2.693-1.672 2.962-3.736.506-7.455 1.13-11.19 1.623-.726.094-2.174.595-1.971-.74.189-1.242-.683-3.426 1.672-3.584 3.34-.223 6.6-1.238 9.988-.912z" fill="#262626"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M91.158 103.661c-.283.656-.568 1.316-.62 2.075l-.005-.005c.04.211.057.446.074.68.037.518.074 1.034.353 1.294.459.431.902.077 1.33-.265.16-.129.319-.256.475-.339l1.35-.717c1.941-1.029 3.886-2.059 5.74-3.23.77-.487 1.586-.914 2.401-1.341 1.672-.875 3.342-1.75 4.619-3.137 1.184-1.286 2.213-2.71 3.243-4.135.605-.837 1.21-1.674 1.847-2.484 9.792-12.429 15.449-18.699 25.663-30.78 1.395-1.653 1.058-2.655-.084-3.936-.886-.993-1.879-1.879-2.872-2.765-1.349-1.204-2.699-2.408-3.781-3.88-.638-.86-1.135-.297-1.637.271l-.01.012c-.519.585-1.058 1.155-1.596 1.725-.718.76-1.436 1.52-2.11 2.317-7.165 8.478-9.421 11.453-16.52 19.987-7.1 8.535-13.564 17.5-17.58 27.978-.086.227-.183.451-.28.675zm4.987-4.139c-.258.862-.516 1.723-.838 2.508.79-.504 1.595-.959 2.393-1.411 2.533-1.432 4.992-2.823 6.633-5.602 4.383-7.424 10.476-13.837 15.95-20.47 7.904-9.577 3.647-5.096 12.413-13.93.071-.072.161-.144.254-.219.338-.27.719-.575.351-1a103.26 103.26 0 00-.231-.267c-.773-.898-1.591-1.85-2.6-2.336-.654-.316-1.079.365-1.462.981a5.166 5.166 0 01-.37.546c-9.299 11.325-13.945 16.92-23 28.444l-.149.19c-2.092 2.667-4.189 5.339-6.893 7.615-1.291 1.09-1.871 3.021-2.45 4.951z" fill="#262626"></path></svg>
                        </div>
                    </div>
                </div>
                {/* <div class="col-span-7 bg-white p-4">
                    Column 2 (7 units)
                </div> */}
            </div>
        </div>
    )
}




