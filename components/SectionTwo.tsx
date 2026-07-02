'use client';
//Components
import { useState } from "react";
import SectionTwoBtnTop from "./SectionTwoBtnTop";
import SectionTwoHistory from "./SectionTwoHistory";
//Types
import { CurrPageProps, SectionTwoProps } from "@/types/types";

export default function SectionTwo({ history, receiveValue, period, setPeriod }: SectionTwoProps) {
    const [currPage, setCurrPage] = useState<CurrPageProps>('history');

    return(
        <div className="w-full flex flex-col">
            <div className="border-b border-[#48484a]">
                <SectionTwoBtnTop 
                    name="history"
                    currPage={currPage}
                    setCurrPage={setCurrPage}
                />
                <SectionTwoBtnTop 
                    name="compare"
                    currPage={currPage}
                    setCurrPage={setCurrPage}
                />
                <SectionTwoBtnTop 
                    name="favorites"
                    currPage={currPage}
                    setCurrPage={setCurrPage}
                />
                <SectionTwoBtnTop 
                    name="log"
                    currPage={currPage}
                    setCurrPage={setCurrPage}
                />
            </div>
            <div className="flex">
                <SectionTwoHistory 
                    currPage={currPage} 
                    period={period}
                    setPeriod={setPeriod}

                    history={history}
                    receiveValue={receiveValue}
                />
                <div 
                    className={`grid grid-cols-7 gap-5 py-3 overflow-hidden duration-300
                                ${currPage === 'compare' ? 'w-full' : 'w-0'}`}
                >
                    Compare
                </div>
                <div 
                    className={`grid grid-cols-7 gap-5 py-3 overflow-hidden duration-300
                                ${currPage === 'favorites' ? 'w-full' : 'w-0'}`}
                >
                    Favorites
                </div>
                <div 
                    className={`grid grid-cols-7 gap-5 py-3 overflow-hidden duration-300
                                ${currPage === 'log' ? 'w-full' : 'w-0'}`}
                >
                    Log
                </div>
            </div>
        </div>
    );
}