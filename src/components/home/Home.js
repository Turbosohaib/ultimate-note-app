"use client"
import { useEffect, useState } from 'react';


export function Home() {
    const [text, setText] = useState('');
    const [notes, setNotes] = useState('');

    const toggleNotes = () => {
        setNotes(!notes)
    }

    useEffect(() => {
        const storedText = localStorage.getItem("scratchPadText");
        if (storedText) {
            setText(storedText);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("scratchPadText", text);
    }, [text]);

    const handleChange = (e) => {
        setText(e.target.value);
    };

    return (
        <div className="pt-[50px] pl-[30px]">
            <h1>Ready to start taking notes?</h1>
            <h1 className="font-bold text-2xl">YOUR HOME</h1>

            <div>
                <button className="fixed top-0 right-0 m-16 text-xl text-[#6376fe] py-2 px-4 rounded flex items-center space-x-2">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clipRule="evenodd" d="M12.344 3.285l-8.292 8.301c-.43.431-.816 1.225-1.092 2.004-.277.782-.46 1.6-.46 2.102v.007c0 .138-.001.595.326.924l.014.014.232.158.009.004c.273.152.567.152.671.152h.005c.502 0 1.32-.182 2.102-.458.778-.275 1.573-.66 2.004-1.096l7.707-7.706V7.69l.591-.582.002-.002a2.714 2.714 0 000-3.82h-.001a2.712 2.712 0 00-3.818 0zM3.757 15.7h-.008v-.008c0-.29.13-.95.39-1.684.265-.75.575-1.316.797-1.538l8.289-8.297v-.001a1.462 1.462 0 012.054-.002c.56.568.56 1.484 0 2.052l-.587.579-.005.005-7.708 7.708-.004.004c-.22.222-.784.532-1.532.796-.732.258-1.393.386-1.686.386z" fill="#4D64FF"></path><path d="M14.687 6.806l-2.06-2.035-.961.963 2.054 2.038.967-.966z" fill="#4D64FF"></path></svg>
                    Customize
                </button>
            </div>

            <div class="grid grid-cols-3 gap-4">


                <div class="col-span-1">
                    <div className="mt-12 w-full max-w-[380px] flex justify-between items-center">
                        <button className="text-[22px] text-xl font-semibold opacity-80 hover:bg-gray-200 p-1 rounded-md ">Notes</button>
                        <div className='mt-3'>
                            <button>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="_2_2wI_Bog90SEWGHd_5"><path d="M8.045 4.502a2.292 2.292 0 00-2.292 2.292V17.21a2.292 2.292 0 002.292 2.292h5.623a4.573 4.573 0 01-.237-1.352l-.099.102H8.045a1.042 1.042 0 01-1.042-1.042V6.794c0-.576.467-1.042 1.042-1.042h7.917c.575 0 1.041.466 1.041 1.042v6.775a4.595 4.595 0 011.25-.105v-6.67a2.292 2.292 0 00-2.291-2.292H8.045z" fill="currentColor"></path><path d="M15.33 8.803c0 .345-.28.625-.624.625H9.3a.625.625 0 110-1.25h5.405c.345 0 .625.28.625.625zM14.706 12.552a.625.625 0 100-1.25H9.3a.625.625 0 000 1.25h5.405zM10.968 15.677a.625.625 0 100-1.25H9.3a.625.625 0 100 1.25h1.667zM18.637 15.547a.625.625 0 00-1.25 0v1.904h-1.846a.625.625 0 000 1.25h1.846v1.846a.625.625 0 001.25 0v-1.846h1.904a.625.625 0 000-1.25h-1.904v-1.904z" fill="currentColor"></path></svg>
                            </button>
                            <button
                                onClick={toggleNotes}
                                type="button" className="transition-all duration-300 hover:bg-gray-200 p-0.5 rounded-[5px]">
                                <svg class="" width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clipRule="evenodd" d="M16 12c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2-2 .9-2 2zm-2 0c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2zm-6 0c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2z" fill="currentColor"></path>
                                </svg>
                            </button>
                            {notes && (
                                <div className='popup'>
                                    <div onClick={toggleNotes} className=''></div>
                                    <div className='text-xxl font-semibold shadow-lg bg-white w-full h-full top-0 left-0 right-0 bottom-0 rounded-sm p-6 '>
                                        <div className='hover:bg-slate-200 p-1 rounded-md w-full'>
                                            <button>Go to notes</button>
                                        </div>
                                        <div className='hover:bg-slate-200 p-1 rounded-md w-full'>
                                            <button>Create new notes</button>
                                        </div>
                                        <div className='border-t border-gray-200 hover:bg-slate-200 p-1 rounded-md w-full'>
                                            <button>Remove widget</button>
                                        </div>



                                    </div>

                                </div>
                            )}


                        </div>

                    </div>
                    <div className='flex gap-3 opacity-50'>
                        <ul className='border hover:border-gray-500 p-1 rounded-lg cursor-pointer font-bold'>
                            Recent
                        </ul>
                        <ul className='border hover:border-gray-500 p-1 rounded-lg cursor-pointer font-bold'>
                            Suggested
                        </ul>
                    </div>
                    <div className=' bg-[#f5f5f6] hover:bg-gray-200 cursor-pointer mt-4 shadow-lg w-[200px] h-[300px] rounded-md'>
                        <div className='py-[80px]'>
                            <div className='flex justify-center cursor-pointer'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="65" height="65" fill-rule="evenodd" clip-rule="evenodd" image-rendering="optimizeQuality" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" viewBox="0 0 6.827 6.827" id="notes"><defs><clipPath id="a"><path d="M3.413 0a3.413 3.413 0 1 1 0 6.827 3.413 3.413 0 0 1 0-6.827z"></path></clipPath></defs><path fill="#ffa000" d="M3.413 0a3.413 3.413 0 1 1 0 6.827 3.413 3.413 0 0 1 0-6.827z"></path><g fill="#c07a06" clip-path="url(#a)"><path d="m4.381 1.69 3.786 3.786.004.005.004.005.004.004.003.005.004.005.003.006.003.005.004.005.003.006.002.005.003.006.003.005.002.006.003.006.002.006.002.005.002.006.002.006.001.007.002.006.001.006.001.006.002.006v.007l.001.006.001.007V5.643L4.443 1.857V1.844l-.001-.007v-.006l-.001-.006-.001-.007-.001-.006-.001-.006-.001-.007-.002-.006-.001-.006-.002-.006-.002-.006-.002-.006-.003-.006-.002-.005-.002-.006-.003-.006-.003-.005-.003-.006-.003-.005-.003-.005-.003-.006-.004-.005-.003-.005-.004-.005-.003-.005-.004-.004zM4.443 1.857l3.786 3.786v.176L4.443 2.033z"></path><path d="m4.443 2.033 3.786 3.786-.951 1.648-3.786-3.786z"></path><path d="m3.492 3.681 3.786 3.786v.001L3.492 3.682z"></path><path d="m3.492 3.682 3.786 3.786-3.787-3.786zM3.491 3.682l3.787 3.786-.031.053-3.786-3.786zM3.461 3.735l3.786 3.786-.001.001v.001h-.001v.002L3.458 3.739l.001-.001v-.001h.001v-.001l.001-.001z"></path><path d="m3.458 3.739 3.787 3.786-.001.001L3.458 3.74z"></path><path d="m3.458 3.74 3.786 3.786-.001.001v.001l-.001.002-.001.001v.001l-.001.002v.001l-.001.002L3.453 3.75v-.001l.001-.001v-.002l.001-.001.001-.001v-.002l.001-.001z"></path><path d="m3.453 3.75 3.786 3.787v.001l-.001.002v.001l-.001.002v.004l-.001.001v.002L3.45 3.764V3.76l.001-.001v-.004l.001-.001v-.002z"></path><path d="M3.45 3.764 7.236 7.55v.003L3.449 3.767z"></path><path d="m3.449 3.767 3.787 3.786-.101.881-3.786-3.786z"></path><path d="m3.349 4.648 3.786 3.786v.003L3.349 4.651v-.003z"></path><path d="m3.349 4.651 3.786 3.786v.001L3.348 4.652v-.001h.001zM3.348 4.652l3.787 3.786-.001.003v.006l.001.003v.006l.001.003.001.003-3.786-3.787-.001-.002-.001-.003v-.003l-.001-.003V4.655z"></path><path d="m3.351 4.675 3.786 3.787.001.002v.003l.001.002.002.003.001.002.001.002.002.003.001.002L3.36 4.695l-.002-.003-.001-.002-.001-.002-.002-.003-.001-.002-.001-.003-.001-.002z"></path><path d="m3.36 4.695 3.786 3.786.001.001-3.786-3.786-.001-.001z"></path><path d="m3.361 4.696 3.786 3.786v.001h.001L3.361 4.697v-.001z"></path><path d="m3.361 4.697 3.787 3.786v.001h.001v.001L3.363 4.698h-.001v-.001z"></path><path d="m3.363 4.698 3.786 3.787.002.002.001.001.002.002-3.786-3.786-.002-.002-.002-.002zM4.129 3.977l3.786 3.787-.059.101L4.07 4.079zM5.075 2.339l3.786 3.786-.748 1.296-3.786-3.787zM4.064 4.084 7.85 7.87l-.575.437L3.489 4.52z"></path><path d="m4.368 5.179 3.786 3.786-.004.004-.004.004-.005.004-.005.004-.004.004-.005.004-.005.004-.005.003L8.111 9l-.005.003-.005.003-.005.003-.006.003-.006.003-.005.002-.006.003-.006.002-.005.002-.006.002-.006.002-.006.002-.006.002-.007.001-.006.002-.006.001-.006.001-.007.001L8 9.039h-.007l-.006.001H7.974L4.188 5.254h.006l.007-.001h.006l.007-.001h.006l.006-.001.007-.001.006-.002.006-.001.006-.001.006-.002.006-.002.006-.002.006-.002.006-.002.006-.002.006-.003.005-.003.006-.002.005-.003.006-.003.005-.003.005-.004.005-.003.005-.004.005-.003.005-.004.005-.004.005-.004.004-.004.005-.004z"></path><path d="M4.188 5.254 7.974 9.04H5.455L1.669 5.254z"></path><path d="M1.669 5.254 5.455 9.04H5.442l-.006-.001h-.007l-.006-.001-.007-.001-.006-.001-.006-.001-.006-.002-.006-.001-.007-.002-.006-.002-.006-.002-.005-.002-.006-.002-.006-.002-.006-.003-.005-.002-.006-.003-.005-.003-.006-.003-.005-.003L5.318 9l-.005-.004-.006-.003-.005-.004-.004-.004-.005-.004-3.786-3.786.004.004.005.004.005.003.005.004.005.003.006.004.005.003.005.003.006.003.005.002.006.003.006.003.005.002.006.002.006.002.006.002.006.002.006.002.006.001.007.001.006.002.006.001.007.001h.006l.006.001h.007l.006.001zM5.266 2.008l3.786 3.787-.129.222-3.786-3.786z"></path><path d="m5.137 2.231 3.786 3.786-.062.108-3.786-3.786zM4.327 3.634l3.786 3.787-3.786-3.786z"></path><path d="m4.327 3.635 3.786 3.786-.198.343-3.786-3.787zM4.172 4.152l3.786 3.786-3.786-3.786zM4.07 4.079l3.786 3.786-.006.005-3.786-3.786z"></path><path d="m4.443 3.682 3.786 3.786v1.316L4.443 4.998z"></path><path d="m4.443 4.998 3.786 3.786v.02l-.001.006-.001.007v.006l-.002.006-.001.007-.001.006-.002.006-.001.006-.002.006-.002.006-.002.006-.002.006-.003.006-.002.005-.003.006-.003.006-.002.005-.003.005-.004.006-.003.005-.003.005-.004.005-.003.005-.004.005-.004.005-.004.004-.004.005-.004.005-.005.004-3.786-3.786.004-.005.005-.004.004-.005.004-.005.004-.004.003-.005.004-.005.003-.005.004-.005.003-.006.003-.005.003-.005.003-.006.003-.005.003-.006.002-.006.002-.005.003-.006.002-.006.002-.006.002-.006.001-.006.002-.006.001-.007.001-.006.001-.006.001-.006.001-.007v-.006l.001-.007v-.006z"></path><path d="M4.188 1.601a.255.255 0 0 1 .255.256v.176l-.951 1.648v.001l-.031.053a.063.063 0 0 0-.011.03v-.001.003l-.101.88a.066.066 0 0 0 .002.028.062.062 0 0 0 .053.045.062.062 0 0 0 .044-.012l.005-.004.698-.53a.063.063 0 0 0 .021-.022l.002-.004v-.001l.032-.053.112-.195.125-.217v1.316a.255.255 0 0 1-.255.256H1.669a.255.255 0 0 1-.256-.256V1.857a.255.255 0 0 1 .256-.256h2.519zm.58.12.498.287-.129.223-.062.108-.748 1.295-.198.343-.059.102-.006.005-.575.436.082-.72.001-.01.058-.1.808-1.398.139-.24.062-.109.128-.222z"></path></g><path fill="none" d="M3.413 0a3.413 3.413 0 1 1 0 6.827 3.413 3.413 0 0 1 0-6.827z"></path><path fill="#fffffe" fill-rule="nonzero" d="M2.297 2.89a.063.063 0 0 0 0 .125H3.56a.062.062 0 1 0 0-.125H2.297zm0-.483a.063.063 0 0 0 0 .125H3.56a.063.063 0 0 0 0-.125H2.297zm2.483-.823.602.347a.063.063 0 0 1 .02.09l-1.23 2.131a.062.062 0 0 1-.021.022l-.703.534a.063.063 0 0 1-.099-.06l.1-.884a.062.062 0 0 1 .012-.03l1.23-2.13.054.031-.054-.03a.063.063 0 0 1 .089-.021zm.486.424-.499-.287-1.195 2.07-.083.73.581-.442 1.196-2.07z"></path><path fill="#fffffe" fill-rule="nonzero" d="M4.585 1.912a.062.062 0 0 0-.062.108l.606.35a.062.062 0 0 0 .062-.108l-.606-.35zM3.576 3.66a.062.062 0 0 0-.062.108l.607.35a.062.062 0 0 0 .062-.108l-.607-.35z"></path><path fill="#fffffe" fill-rule="nonzero" d="M1.669 1.601h2.519a.255.255 0 0 1 .255.256v.409a.062.062 0 0 1-.01.035l-.86 1.49-.084.73.581-.442.025-.042a.063.063 0 0 0-.006.028c.019-.01.041-.009.06.001l.003-.003-.054-.031-.003.005a.062.062 0 0 1 .005-.01l.227-.392a.063.063 0 0 1 .116.032v1.331a.255.255 0 0 1-.255.256H1.669a.255.255 0 0 1-.256-.256V1.857a.255.255 0 0 1 .256-.256zm2.519.125H1.669a.13.13 0 0 0-.13.131v3.141a.13.13 0 0 0 .13.13h2.519a.13.13 0 0 0 .13-.13v-1.1l-.11.192-.002.004-.054-.031-.004.003a.062.062 0 0 1 .032.052.062.062 0 0 0 .023-.02l-.028.049a.062.062 0 0 1-.02.024l-.037-.05.038.05-.703.533a.062.062 0 0 1-.104-.053l.062.007-.062-.007.1-.884c.001-.01.004-.019.009-.027l.054.03-.054-.03.86-1.49v-.393a.13.13 0 0 0-.13-.13zm.017 2.368-.002.005a.062.062 0 0 0 .005-.01v.001a.064.064 0 0 1-.002.004zm-.053-.031-.055-.032.003-.003v-.002.002l-.002.003.054.032zm-.03-.055zm.052-.004zm.032.029zm.007.02a.062.062 0 0 1-.001.027"></path></svg>
                            </div>
                            <div className='flex justify-center cursor-pointer py-2 font-semibold text-xl opacity-60'>
                                <button>Create new note</button>
                            </div>

                        </div>

                    </div>


                </div>
                <div class="col-span-1">
                    <div className="mt-12 w-full max-w-[380px] flex justify-between items-center">
                        <h1 className="text-[22px] font-semibold opacity-80">Scratch Pad</h1>
                        <button type="button" className="transition-all duration-300 hover:bg-gray-200 p-0.5 rounded-[5px]">
                            <svg class="" width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clipRule="evenodd" d="M16 12c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2-2 .9-2 2zm-2 0c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2zm-6 0c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2z" fill="currentColor"></path>
                            </svg>
                        </button>
                    </div>
                    <div className="relative mt-4 group w-full max-w-[380px]">
                        <textarea
                            placeholder="Start Writing..."
                            className="resize-none rounded-md shadow-lg p-3 w-full max-w-[380px] outline-0 text-start h-[340px] bg-[#f7efc7]"
                            value={text}
                            onChange={handleChange}
                        ></textarea>
                    </div>
                </div>


            </div>

        </div>
    );
}
