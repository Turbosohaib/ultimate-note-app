
"use client"
import { useEffect, useState } from 'react';

export function Home() {
    const [text, setText] = useState('');


    useEffect(() => {
        const storedText = localStorage.getItem('scratchPadText');
        if (storedText) {
            setText(storedText);
        }
    }, []);


    useEffect(() => {
        localStorage.setItem('scratchPadText', text);
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
            <div>
                <div className="mt-12 w-full max-w-[380px] flex justify-between items-center">
                    <h1 className="text-[22px] font-semibold opacity-80">Scratch Pad</h1>
                    <button type="button" className="transition-all duration-300 hover:bg-gray-200 p-0.5 rounded-[5px]"><svg class="" width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clipRule="evenodd" d="M16 12c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2-2 .9-2 2zm-2 0c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2zm-6 0c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2z" fill="currentColor"></path></svg></button>
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
    );
}


