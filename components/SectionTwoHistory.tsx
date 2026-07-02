//Components
import SectionTwoItem from "./SectionTwoItem";
import SectionTwoBtnPer from "./SectionTwoBtnPer";
//Types
import { SectionTwoHistoryProps } from "@/types/types";

export default function SectionTwoHistory({ currPage, period, setPeriod, history, receiveValue }: SectionTwoHistoryProps) {
    // Calculate from history
    const openValue = history.length > 0 ? history[0].rate : receiveValue;
    const lastValue = history.length > 0 ? history[history.length - 1].rate : receiveValue;
    const changeValue = lastValue - openValue;
    const percentChange = openValue !== 0 ? (changeValue / openValue) * 100 : 0;

    return( 
        <div 
            className={`grid grid-cols-7 gap-5 py-3 overflow-hidden duration-300
                        ${currPage === 'history' ? 'w-full' : 'w-0'}`}
        >
            <div className="grid grid-cols-4 gap-3 uppercase col-span-4">
                <SectionTwoItem 
                    name="Open"
                    value={openValue}
                />
                <SectionTwoItem 
                    name="Last"
                    value={lastValue}
                />
                <SectionTwoItem 
                    name="Change"
                    value={changeValue}
                />
                <SectionTwoItem 
                    name="% Change"
                    value={percentChange}
                />
            </div>
            <div className="col-span-2 col-start-6 py-auto flex items-center">
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
            <div className="col-span-7">
                Graph here
            </div>
        </div>
    );
}