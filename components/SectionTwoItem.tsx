//Types
import { SectionTwoItemProps } from "@/types/types";

export default function SectionTwoItem({ name, value }: SectionTwoItemProps) {
    return(
        <div className="flex flex-col gap-3 bg-[#161619] py-2 px-3 rounded-[10px]">
            <h3 className="text-[#707072]">{name}</h3>
            <h3>{value.toFixed(4)}</h3>
        </div>
    );
}