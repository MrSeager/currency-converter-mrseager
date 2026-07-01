//Types
import { SectionTwoBtnTopProps } from "@/types/types";


export default function SectionTwoBtnTop({ name, currPage, setCurrPage }: SectionTwoBtnTopProps) {
    return(
        <button
            type="button"
            onClick={() => setCurrPage(name)}
            className={`
                uppercase p-3 border-b-2 duration-300 cursor-pointer
                ${currPage === name ? 'border-[#cef737]' : 'border-transparent'}`
            }
        >
            {name}
        </button>
    );
}