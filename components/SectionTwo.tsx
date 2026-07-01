'use client';
//Components
import { useState } from "react";
import SectionTwoBtnTop from "./SectionTwoBtnTop";
import SectionTwoItem from "./SectionTwoItem";
import SectionTwoBtnPer from "./SectionTwoBtnPer";
//Types
import { CurrPageProps } from "@/types/types";

export default function SectionTwo() {
    const [currPage, setCurrPage] = useState<CurrPageProps>('history');
    const [period, setPeriod] = useState<string>('1d');

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
            <div className="grid grid-cols-6 w-full gap-50 py-3">
                <div className="grid grid-cols-4 gap-3 uppercase col-span-4">
                    <SectionTwoItem 
                        name="Open"
                        value={0.8516}
                    />
                    <SectionTwoItem 
                        name="Open"
                        value={0.8516}
                    />
                    <SectionTwoItem 
                        name="Open"
                        value={0.8516}
                    />
                    <SectionTwoItem 
                        name="Open"
                        value={0.8516}
                    />
                </div>
                <div className="col-span-2 py-auto flex items-center">
                    <div className="flex w-full justify-between bg-[#161619] rounded-[10px]">
                        <SectionTwoBtnPer 
                            name="1d"
                            period={period}
                            setPeriod={setPeriod}
                        />
                        <SectionTwoBtnPer 
                            name="1w"
                            period={period}
                            setPeriod={setPeriod}
                        />
                        <SectionTwoBtnPer 
                            name="1m"
                            period={period}
                            setPeriod={setPeriod}
                        />
                        <SectionTwoBtnPer 
                            name="3m"
                            period={period}
                            setPeriod={setPeriod}
                        />
                        <SectionTwoBtnPer 
                            name="1y"
                            period={period}
                            setPeriod={setPeriod}
                        />
                        <SectionTwoBtnPer 
                            name="5y"
                            period={period}
                            setPeriod={setPeriod}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}