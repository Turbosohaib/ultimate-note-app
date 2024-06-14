import Link from "next/link"
import Profile_Img from "@/assets/images/profile.png"
import Notification_Icon from "@/assets/icons/notify-icon.svg"
import Image from "next/image";
import Search_Icon from "@/assets/icons/search-icon.svg"




export function LeftSideBar() {


    return <nav className="w-[400px] bg-[#f2f2f2] shadow-lg rounded-md border border-solid border-gray-200 p-3 m-2">
        <div className="relative pt-4 flex justify-between item-center text-[17px]">
            <div className="flex item-center cursor-pointer">
                <Image src={Profile_Img} className="w-[50px] h-[50px]  " />

                <div className="ml-[10px] text-gray-700 text-[13px] py-[6px]">
                    <div className="font-semibold text-[16px]">turabi1988@gmail.com</div>
                    <div>turabi1988@gmail.com</div>

                </div>

            </div>
            <div className="cursor-pointer opacity-55">
                <Image src={Notification_Icon} className="w-[30px] h-[50px]" />
            </div>

        </div>

        <div className="w-full py-[15px] justify-center items-center">
            <div className="relative">
                <input type="text" className="px-12 bg-gray-200 w-full text-[16px] py-3 border rounded-md focus:outline-none" placeholder="Search" />
                <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" opacity={0.5} viewBox="0 0 24 24" id="search"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M15.5 14h-.79l-.28-.27c1.2-1.4 1.82-3.31 1.48-5.34-.47-2.78-2.79-5-5.59-5.34-4.23-.52-7.79 3.04-7.27 7.27.34 2.8 2.56 5.12 5.34 5.59 2.03.34 3.94-.28 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></svg>
                </div>
            </div>
        </div>
        <div>
            <div className="flex gap-2 items-center">
                <button type="button" className="w-full bg-[#00a82d] px-[70px] py-[14px] text-white rounded-[5px] flex items-center">
                    <svg
                        width="30"
                        height="26"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="JbMdW6GX7GP1497Tk7hF"
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
                    <span className="font-bold text-xl">Note</span>
                </button>
                <button type="button" className="bg-gray-300 p-[12px] rounded-[5px]">
                    <svg width="32" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clipRule="evenodd" d="M16 12c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2-2 .9-2 2zm-2 0c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2zm-6 0c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2z" fill="currentColor"></path></svg>
                </button>
            </div>
            <div className="my-3 items-center flex gap-2">
                <button id="taskButton" className="w-full bg-[#a158eb] hover:bg-purple-700 text-white font-bold py-3 px-7 rounded">
                    <svg width="30" height="26" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block">
                        <path d="M13.627 7.02h0c.287.227.332.64.1.922l-.1-.922zm0 0a.673.673 0 00-.934.097l-3.631 4.4L7.24 9.874a.673.673 0 00-.939.037l.091.086-.091-.086a.647.647 0 00.039.927l2.342 2.115s0 0 0 0a.673.673 0 00.966-.07s0 0 0 0l4.077-4.94-.1-.923zm3.76 4.155l.142.048.02-.149a7.625 7.625 0 10-5.374 6.236l.145-.043-.068-.133a4.222 4.222 0 01-.324-.855l-.033-.124-.123.035a6.438 6.438 0 114.61-5.349l-.016.128.128.013c.308.033.607.098.893.194z" fill="currentColor" stroke="currentColor" stroke-width=".25"></path>
                        <path d="M16.638 12.708a.625.625 0 10-1.25 0v1.904h-1.846a.625.625 0 100 1.25h1.846v1.846a.625.625 0 101.25 0v-1.846h1.904a.625.625 0 100-1.25h-1.904v-1.904z" fill="currentColor"></path>
                    </svg>
                    <span className="text-xl">Task</span>
                </button>

                <button id="eventButton" className="w-full bg-[#ee6631] hover:bg-orange-700 text-white font-bold py-3 px-7 rounded">
                    <svg width="30" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block">
                        <path d="M14.75 4.265a.625.625 0 111.25 0v1.477h.792a2.292 2.292 0 012.291 2.292v5.53a4.598 4.598 0 00-1.25-.123V8.034c0-.575-.466-1.042-1.041-1.042H16v1.856a.625.625 0 11-1.25 0V6.992H9.252v1.856a.625.625 0 11-1.25 0V6.992h-.794c-.575 0-1.041.467-1.041 1.042v9.167c0 .575.466 1.041 1.041 1.041h6.225c.02.436.102.855.236 1.25h-6.46a2.292 2.292 0 01-2.292-2.291V8.034a2.292 2.292 0 012.291-2.292h.794V4.265a.625.625 0 111.25 0v1.477h5.498V4.265z" fill="currentColor"></path>
                        <path d="M9.543 12.41a.917.917 0 11-1.833 0 .917.917 0 011.833 0zM12.917 12.41a.917.917 0 11-1.834 0 .917.917 0 011.834 0zM15.375 13.326a.917.917 0 100-1.833.917.917 0 000 1.833zM9.543 15.784a.917.917 0 11-1.833 0 .917.917 0 011.833 0zM12 16.701a.917.917 0 100-1.833.917.917 0 000 1.833zM18.635 15.527a.625.625 0 10-1.25 0v1.904H15.54a.625.625 0 000 1.25h1.846v1.846a.625.625 0 001.25 0v-1.846h1.904a.625.625 0 000-1.25h-1.904v-1.904z" fill="currentColor"></path>
                    </svg>
                    <span className="text-xl">Event</span>
                </button>
            </div>


        </div>
        <div className="relative text-[#797578] ">
            <div className="sticky top-0 w-full">
                <Link href="/" className="p-3 bg-[#e6e6e6] flex items-center space-x-2">
                    <svg width="30" height="26" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clipRule="evenodd" d="M3.91 9.905l-.782.876a.708.708 0 01-1.057-.944L8.181 3a2.375 2.375 0 013.543 0l6.109 6.837a.708.708 0 11-1.056.944l-.783-.876v5.303a2.292 2.292 0 01-2.292 2.292h-2.915v-4.455c0-.585-.423-.966-.835-.966s-.835.381-.835.966V17.5H6.202a2.292 2.292 0 01-2.292-2.292V9.905zm5.328-5.961a.958.958 0 011.43 0l4.076 4.562v6.702c0 .576-.467 1.042-1.042 1.042h-1.665v-3.205c0-1.172-.884-2.216-2.085-2.216-1.2 0-2.085 1.044-2.085 2.216v3.205H6.202a1.042 1.042 0 01-1.042-1.042V8.506l4.078-4.562z" fill="#737373"></path></svg>
                    Home
                </Link>
            </div>
            <ul id="navigation" className="h-full max-h-[240px] space-y-0.5 overflow-auto">
                <li>
                    <Link href="/shortcuts" className="p-3 hover:bg-[#e6e6e6] flex items-center space-x-2">
                        <svg width="30" height="26" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clipRule="evenodd" d="M8.236 7.604a.475.475 0 01-.4.303l-3.446.29c-.42.035-.59.582-.27.868l2.626 2.355c.135.12.194.31.153.49l-.803 3.52c-.097.428.348.767.706.537l2.952-1.886a.455.455 0 01.492 0l2.951 1.886c.36.23.804-.109.707-.537l-.803-3.52a.509.509 0 01.152-.49l2.627-2.355c.319-.286.15-.833-.27-.868l-3.447-.29a.475.475 0 01-.399-.303l-1.328-3.341a.465.465 0 00-.872 0L8.236 7.604zm4.516-.902l-1.153-2.9c-.58-1.458-2.619-1.458-3.198 0l-1.153 2.9-2.963.249c-1.607.135-2.064 2.091-1 3.045l2.298 2.06-.706 3.097c-.164.72.134 1.4.644 1.787a1.7 1.7 0 001.955.08L10 15.407l2.523 1.613a1.7 1.7 0 001.956-.08c.51-.388.808-1.066.644-1.787l-.706-3.097 2.298-2.06c1.064-.954.607-2.91-1-3.045l-2.963-.249z" fill="#737373"></path></svg>
                        Shortcuts
                    </Link>
                </li>
                <li>
                    <Link href="/notes" className="p-3 hover:bg-[#e6e6e6] flex items-center space-x-2">
                        <svg width="30" height="26" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><g fill="#737373"><path d="M12.702 7.426a.625.625 0 100-1.25H7.298a.625.625 0 000 1.25h5.404zM13.327 9.925c0 .345-.28.625-.625.625H7.298a.625.625 0 110-1.25h5.404c.345 0 .625.28.625.625zM8.964 13.675a.625.625 0 100-1.25H7.298a.625.625 0 100 1.25h1.666z"></path><path fill-rule="evenodd" clipRule="evenodd" d="M3.75 4.792A2.292 2.292 0 016.042 2.5h7.916a2.292 2.292 0 012.292 2.292v7.8c0 .517-.175 1.02-.497 1.425l-2.08 2.617a2.292 2.292 0 01-1.793.866H6.042a2.292 2.292 0 01-2.292-2.292V4.792zM6.042 3.75C5.466 3.75 5 4.216 5 4.792v10.416c0 .576.466 1.042 1.042 1.042h5.287v-3.195c0-.346.28-.625.625-.625H15V4.792c0-.576-.466-1.042-1.042-1.042H6.042zm6.653 12.106a1.043 1.043 0 01-.116.124v-2.3h1.845l-1.729 2.176z"></path></g></svg>
                        Notes
                    </Link>
                </li>
                <li>
                    <Link href="/tasks" className="p-3 hover:bg-[#e6e6e6] flex items-center space-x-2">
                        <svg width="30" height="26" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clipRule="evenodd" d="M13.646 7.435c.266.22.303.614.083.88l-3.915 4.73a.625.625 0 01-.899.066l-2.23-2.004a.625.625 0 01.835-.93l1.746 1.57 3.5-4.229a.625.625 0 01.88-.083z" fill="#737373"></path><path fill-rule="evenodd" clipRule="evenodd" d="M10.019 16.25a6.25 6.25 0 100-12.5 6.25 6.25 0 000 12.5zm0 1.25a7.5 7.5 0 100-15 7.5 7.5 0 000 15z" fill="#737373"></path></svg>
                        Tasks
                    </Link>
                </li>
                <li>
                    <Link href="/files" className="p-3 hover:bg-[#e6e6e6] flex items-center space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="20" viewBox="0 0 24 24"><path d="M7.44 15.44a1.5 1.5 0 0 0 2.115 2.125L20.111 7.131a3 3 0 1 0-4.223-4.262L4.332 14.304a4.5 4.5 0 1 0 6.364 6.363l8.98-9.079.712.703-8.981 9.08a5.5 5.5 0 1 1-7.779-7.777L15.185 2.159a4 4 0 1 1 5.63 5.683L10.259 18.276a2.5 2.5 0 0 1-3.527-3.544l8-8 .707.707z" /><path fill="none" d="M0 0h24v24H0z" /></svg>
                        Files
                    </Link>
                </li>
                <li>
                    <Link href="/calender" className="p-3 hover:bg-[#e6e6e6] flex items-center space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="26" viewBox="0 0 20 20" fill="none" class="kNaexcHToUCMBCwLD4WA"><path d="M12.457 10.41a.917.917 0 101.833 0 .917.917 0 00-1.833 0zM9.083 10.41a.917.917 0 101.834 0 .917.917 0 00-1.834 0zM5.708 10.41a.917.917 0 101.834 0 .917.917 0 00-1.834 0zM12.457 13.784a.917.917 0 101.833 0 .917.917 0 00-1.833 0zM9.083 13.784a.917.917 0 101.834 0 .917.917 0 00-1.834 0zM5.708 13.784a.917.917 0 101.834 0 .917.917 0 00-1.834 0z" fill="#141414"></path><path fill-rule="evenodd" clipRule="evenodd" d="M6.625 1.64c.345 0 .625.28.625.625v1.477h5.498V2.265a.625.625 0 111.25 0v1.477h.794a2.292 2.292 0 012.291 2.292v9.167a2.292 2.292 0 01-2.291 2.291H5.208a2.292 2.292 0 01-2.291-2.291V6.034a2.292 2.292 0 012.291-2.292H6V2.265c0-.346.28-.625.625-.625zm.625 3.352v1.856a.625.625 0 11-1.25 0V4.992h-.792c-.575 0-1.041.467-1.041 1.042v9.167c0 .575.466 1.041 1.041 1.041h9.584c.575 0 1.041-.466 1.041-1.041V6.034c0-.575-.466-1.042-1.041-1.042h-.794v1.856a.625.625 0 11-1.25 0V4.992H7.25z" fill="#141414"></path></svg>
                        Calender
                    </Link>
                </li>
                <li>
                    <Link href="/notebooks" className="p-3 hover:bg-[#e6e6e6] flex items-center space-x-2">
                        <svg width="30" height="26" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><g fill-rule="evenodd" clipRule="evenodd" fill="#737373"><path d="M3.75 2.5v15h10.208a2.292 2.292 0 002.292-2.292V4.792A2.292 2.292 0 0013.958 2.5H3.75zm3.748 1.25v12.5h6.46c.576 0 1.042-.466 1.042-1.042V4.792c0-.576-.466-1.042-1.042-1.042h-6.46zM5 16.25V3.75h1.248v12.5H5z"></path><path d="M13.505 7.697a.75.75 0 01-.75.75h-3a.75.75 0 110-1.5h3a.75.75 0 01.75.75z"></path></g></svg>
                        Notebooks
                    </Link>
                </li>
                <li>
                    <Link href="/tags" className="p-3 hover:bg-[#e6e6e6] flex items-center space-x-2">
                        <svg width="30" height="26" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><g fill="#737373"><path fill-rule="evenodd" clipRule="evenodd" d="M10.8 3.704c-.416-.5-1.183-.5-1.6 0L5.396 8.27a1.042 1.042 0 00-.242.667v6.274c0 .575.467 1.042 1.042 1.042h7.608c.575 0 1.041-.467 1.041-1.042V8.937c0-.244-.085-.48-.24-.667L10.8 3.704zm-2.56-.8a2.292 2.292 0 013.521 0l3.804 4.566c.343.412.53.93.53 1.467v6.274a2.292 2.292 0 01-2.291 2.292H6.196a2.292 2.292 0 01-2.292-2.292V8.937c0-.536.188-1.055.531-1.467L8.24 2.903z"></path><path d="M11.667 8.338a1.667 1.667 0 11-3.334 0 1.667 1.667 0 013.334 0z"></path></g></svg>
                        Tags
                    </Link>
                </li>
                <li>
                    <Link href="/shared_with_me" className="p-3 hover:bg-[#e6e6e6] flex items-center space-x-2">
                        <svg width="30" height="26" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><g fill="#737373"><path d="M12.53 7.097a5.4 5.4 0 00-.185-1.329 3.318 3.318 0 011.357-.277h.007c1.148 0 2.032.516 2.579 1.271.535.739.733 1.685.588 2.56a6.845 6.845 0 01-1.087 2.66c.146.05.32.098.526.149l.18.044c.274.066.585.141.87.238.352.12.744.298 1.05.605.326.33.514.765.514 1.303v1.133c0 .713-.607 1.217-1.26 1.217h-3.07c.221-.356.359-.777.375-1.25h2.694a.06.06 0 00.01 0v-1.1c0-.221-.065-.336-.15-.421-.106-.107-.285-.208-.566-.304a8.53 8.53 0 00-.735-.2h-.002a34.527 34.527 0 01-.21-.052c-.331-.082-.714-.184-1.041-.352a1.008 1.008 0 01-.53-.758c-.05-.342.071-.65.246-.87.34-.426.803-1.34.953-2.246a2.2 2.2 0 00-.368-1.623c-.316-.437-.827-.754-1.566-.754h-.006c-.487 0-.875.138-1.173.356z"></path><path fill-rule="evenodd" clipRule="evenodd" d="M5.475 5.55a2.817 2.817 0 00-.473 2.08c.187 1.127.761 2.26 1.189 2.798.193.243.325.58.274.952a1.103 1.103 0 01-.542.82c-.38.215-.832.355-1.241.47-.119.034-.234.066-.346.096-.299.082-.576.158-.842.251-.362.128-.613.26-.771.41a.654.654 0 00-.214.52v1.38c0 .013.004.031.028.054a.177.177 0 00.121.043h9.668c.055 0 .097-.02.121-.043.024-.023.028-.041.028-.053v-1.38c0-.305-.093-.48-.223-.61-.151-.152-.392-.283-.743-.403a10.518 10.518 0 00-.91-.248l-.256-.063c-.403-.1-.855-.221-1.238-.417a1.092 1.092 0 01-.572-.823 1.248 1.248 0 01.27-.955c.428-.536 1.003-1.671 1.19-2.799a2.817 2.817 0 00-.472-2.08c-.41-.567-1.074-.975-2.02-.975h-.007c-.946 0-1.609.408-2.02.975zm-1.013-.733c.641-.886 1.678-1.492 3.032-1.492h.008c1.354 0 2.39.606 3.031 1.492.63.869.865 1.985.693 3.018-.217 1.313-.858 2.615-1.407 3.326.219.09.493.168.825.25l.224.055c.332.08.704.17 1.044.286.422.143.875.351 1.226.704.372.374.587.87.587 1.491v1.38c0 .785-.669 1.347-1.4 1.347H2.659c-.73 0-1.4-.562-1.4-1.346v-1.38a1.9 1.9 0 01.606-1.429c.349-.33.798-.534 1.215-.68.312-.11.654-.204.966-.29.103-.027.203-.055.297-.081.34-.096.623-.188.846-.293-.552-.708-1.2-2.019-1.419-3.34-.17-1.033.064-2.15.693-3.018z"></path></g></svg>
                        Shared with Me
                    </Link>
                </li>
                <li>
                    <Link href="/trash" className="p-3 hover:bg-[#e6e6e6] flex items-center space-x-2">
                        <svg width="30" height="26" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><g fill-rule="evenodd" clipRule="evenodd" fill="#737373"><path d="M5.171 7.091h9.656l-.455 8.251a2.292 2.292 0 01-2.288 2.166H7.933a2.292 2.292 0 01-2.288-2.16L5.17 7.09zm1.324 1.25l.398 6.935c.031.55.488.982 1.04.982h4.151c.553 0 1.01-.432 1.04-.985l.382-6.932h-7.01zM9.167 2.086a2.292 2.292 0 00-2.292 2.292v.205H3.75a.625.625 0 100 1.25h12.5a.625.625 0 100-1.25h-3.125v-.205a2.292 2.292 0 00-2.292-2.292H9.167zm2.708 2.497v-.205c0-.575-.466-1.042-1.042-1.042H9.167c-.576 0-1.042.467-1.042 1.042v.205h3.75z"></path></g></svg>
                        Trash
                    </Link>
                </li>
            </ul>

        </div>
        <div>
            <button class="bg-[#fcb100] font-bold py-[14px] w-full mt-[40px] rounded flex justify-center items-center">
                <div className="flex gap-1 items-center"><svg width="35" height="27" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="7.083" fill="transparent"></circle><path fill-rule="evenodd" clipRule="evenodd" d="M19.5 12a7.5 7.5 0 10-15 0 7.5 7.5 0 0015 0zm-8.81 1.286v2.573c0 .194.135.336.322.4a.472.472 0 00.519-.145l3.26-3.933c.09-.11.123-.255.09-.392a.459.459 0 00-.26-.311l-1.406-.766V8.14c0-.195-.146-.335-.333-.399a.473.473 0 00-.52.146l-3.259 3.933a.45.45 0 00-.09.392.458.458 0 00.26.31l1.416.765z" fill="currentColor"></path></svg>
                    <div>Upgrade</div>
                </div>
            </button>

            <button className="flex my-4 items-center space-x-2">
                <svg width="35" height="30" opacity="1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="BEQrrBbCZXbrmiN8XKSP"><path d="M14.025 12.3l.105-.078c.864-.603 1.414-1.573 1.414-2.674A3.277 3.277 0 0012.27 6.27a3.271 3.271 0 00-3.264 3.203.175.175 0 01-.007.032v.001a.137.137 0 00-.008.04.818.818 0 001.636 0h.02c.002-.917.734-1.65 1.623-1.65.89 0 1.65.734 1.65 1.652 0 .524-.262.996-.681 1.31l-.131.08c-1.376.926-1.626 1.992-1.645 2.612l-.008.035v.001c-.005.016-.01.033-.01.05a.818.818 0 001.637 0c0-.497.341-.942.942-1.336zM13.265 16.656a1 1 0 11-2 0 1 1 0 012 0z" fill="#141414"></path><path fill-rule="evenodd" clipRule="evenodd" d="M12.265 19.5a7.5 7.5 0 100-15 7.5 7.5 0 000 15zm0 1.5a9 9 0 100-18 9 9 0 000 18z" fill="#141414"></path></svg>
                Need a little help?
            </button>

        </div>
    </nav>
}