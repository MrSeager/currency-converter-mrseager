'use client';
//Components
import Image from "next/image";
import { useState } from "react";

export default function MainPart() {
    const [sendCurr, setSendCurr] = useState<string>('USD');
    const [sendValue, setSendValue] = useState<number>(1000);

    const [receiveCurr, setReceiveCurr] = useState<string>('EUR');
    const [receiveValue, setReceiveValue] = useState<number>(1000);

    return(
        <main className="w-full max-w-[120rem] px-15 py-10">
            <h1 className="uppercase">Check the rate</h1>
            <div className="w-full rounded-[10px] px-4 py-3 flex items-center justify-between bg-[#171719]">
                <div className="grid grid-cols-7 w-full items-center justify-between">
                    <div className="col-span-3 flex flex-col gap-5 border border-white/25 bg-[#202022] rounded-[10px] px-4 py-3 duration-300 hover:border-white">
                        <h2 className="w-full uppercase">Send</h2>
                        <div className="w-full flex items-center justify-between gap-3">
                            <input 
                                type="number"
                                placeholder="1000"
                                value={sendValue}
                                min={0}
                                className="text-[35px] font-semibold max-w-[350px]"
                                onChange={(e) => setSendValue(Number(e.target.value))}
                            />
                            <button 
                                type="button"
                                className="cursor-pointer flex items-center gap-2 px-3 py-2 bg-[#2e2e2e] rounded-[10px] border border-white/25 text-[15px] duration-300
                                            hover:border-white"
                            >
                                <Image 
                                    src={'/images/flags/us.webp'}
                                    alt="flag"
                                    width={25}
                                    height={25}
                                    className="rounded-full"
                                />
                                USD <span className="pb-2">&#128899;</span>
                            </button>
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        <button 
                            type="button"
                            className="cursor-pointer text-[25px] aspect-square px-3 rounded-[10px] border border-white/25 bg-[#202022] duration-300
                                        hover:border-white"
                        >
                            &#x21C4;
                        </button>
                    </div>
                    <div className="col-span-3 flex flex-col gap-5 border border-white/25 bg-[#202022] rounded-[10px] px-4 py-3 duration-300 hover:border-white">
                        <h2 className="w-full uppercase">Receive</h2>
                        <div className="flex items-center justify-between gap-3">
                            <h2 className="text-[#cef737] text-[35px] font-semibold">{receiveValue}</h2>
                            <button 
                                type="button"
                                className="cursor-pointer flex items-center gap-2 px-3 py-2 bg-[#2e2e2e] rounded-[10px] border border-white/25 text-[15px] duration-300
                                            hover:border-white"
                            >
                                <Image 
                                    src={'/images/flags/eu.webp'}
                                    alt="flag"
                                    width={25}
                                    height={25}
                                    className="rounded-full"
                                />
                                EUR <span className="pb-2">&#128899;</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}