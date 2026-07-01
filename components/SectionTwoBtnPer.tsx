//Types
import { SectionTwoBtnPerProps } from "@/types/types";

export default function SectionTwoBtnPer({ name, period, setPeriod }: SectionTwoBtnPerProps) {
    return(
        <button
            type="button"
            onClick={() => setPeriod(name)}
            className={`
                uppercase rounded-[10px] px-4 aspect-3/2 duration-300 cursor-pointer
                ${period === name ? 'bg-[#48484a] text-[#f8f8f9]' : 'text-[#707072]'}`}
        >
            {name}
        </button>
    );
}