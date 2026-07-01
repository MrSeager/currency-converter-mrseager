//Components
import HeaderNav from "@/components/HeaderNav";
import MainPart from "@/components/MainPart";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 gap-3 items-center justify-center bg-[#0a0a0a] text-[#f8f8f9]">
      <HeaderNav />
      <MainPart />
    </div>
  );
}

// #0a0a0a #f8f8f9 #cef737 #161619 #48484a #e13a41 #171719 #202022 #2e2e2e #707072