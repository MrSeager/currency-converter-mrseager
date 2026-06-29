'use client';
//Components
import Image from "next/image";
import { useState } from "react";
//Types
import { SectionOneProps } from "@/types/types";

export default function SectionOne({ 
                                    sendCurr, setSendCurr,
                                    sendValue, setSendValue,
                                    receiveCurr, setReceiveCurr,
                                    receiveValue, setReceiveValue,
                                    getFlagSrc, currencies, 
                                    sendCurrencyInfo, receiveCurrencyInfo
                                }: SectionOneProps) {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    return(
        <div className="w-full rounded-[10px] flex flex-col items-center justify-between bg-[#171719]">
            <div className="grid grid-cols-7 w-full items-center justify-between p-5">
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

                        {/* Currency selector */}
                        <div className="relative">
                            <button
                                type="button"
                                onClick={() => setDropdownOpen(!dropdownOpen)}
                                className="cursor-pointer flex items-center gap-2 px-3 py-2 bg-[#2e2e2e] rounded-[10px] border border-white/25 text-[15px] duration-300 hover:border-white min-w-[120px] justify-between"
                            >
                                <div className="flex items-center gap-2">
                                <Image
                                    src={getFlagSrc(sendCurr)}
                                    alt={sendCurr}
                                    width={25}
                                    height={25}
                                    className="rounded-full"
                                />
                                <span>{sendCurr}</span>
                                </div>
                                <span className={`transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}>
                                ▼
                                </span>
                            </button>

                            {/* Dropdown */}
                            {dropdownOpen && (
                                <div className="absolute right-0 top-full mt-2 w-64 max-h-80 overflow-y-auto bg-[#2e2e2e] border border-white/25 rounded-[10px] z-50 shadow-xl">
                                    {currencies.map((currency) => (
                                        <button
                                            key={currency.iso_code}
                                            type="button"
                                            onClick={() => {
                                                setSendCurr(currency.iso_code);
                                                setDropdownOpen(false);
                                            }}
                                            className={`w-full flex items-center gap-3 px-4 py-3 text-left text-sm hover:bg-white/10 transition-colors ${
                                                sendCurr === currency.iso_code ? 'bg-white/10' : ''
                                            }`}
                                        >
                                        <Image
                                            src={getFlagSrc(currency.iso_code)}
                                            alt={currency.iso_code}
                                            width={25}
                                            height={25}
                                            className="rounded-full"
                                        />
                                        <div className="flex flex-col">
                                            <span className="font-semibold text-[#f8f8f9]">{currency.iso_code}</span>
                                            <span className="text-xs text-white/50">{currency.name}</span>
                                        </div>
                                    </button>
                                ))}
                                </div>
                            )}
                        </div>

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
            <div className="flex items-center justify-between w-full p-5 border-t border-white/25">
                <h2 className="uppercase">1 USD = 0.8530 EUR</h2>
                <div className="flex items-center gap-3">
                    <button
                        type="button"
                        className="cursor-pointer duration-300 border border-[#cef737] px-2 py-1 rounded-md bg-[#cef737]
                                    uppercase text-[#0a0a0a] font-semibold 
                                    hover:bg-transparent hover:text-[#f8f8f9]"
                    >
                        ★ Favorited
                    </button>
                    <button
                        type="button"
                        className="cursor-pointer duration-300 border border-[#cef737] px-2 py-1 rounded-md bg-transparent
                                    uppercase font-semibold
                                    hover:bg-[#cef737] hover:text-[#0a0a0a]"
                    >
                        Log conversion
                    </button>
                </div>
            </div>
        </div>
    );
}