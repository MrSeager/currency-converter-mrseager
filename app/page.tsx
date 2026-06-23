import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-[#0a0a0a] text-[#f8f8f9]">
      <header className="w-full max-w-[120rem] flex flex-col">
        <div className="p-3 flex justify-between items-center w-full">
          <Image 
            src={'/images/logo.svg'}
            alt="logo"
            width={150}
            height={50}
          />
          <h1 className="uppercase">55 Currencies &bull; EOD &bull; ECB Data</h1>
        </div>
        <div className="flex">
          <div className="bg-[#cef737] p-3 w-[10rem]">
            <h1 className="uppercase text-[#0a0a0a] font-semibold">&bull; Live market</h1>
          </div>
          <div className="w-full bg-[#161619] overflow-hidden">
            <div className="w-[150%] h-full"></div>
          </div>
        </div>
      </header>
      <main className="w-full max-w-[120rem]">
        
      </main>
    </div>
  );
}

// #0a0a0a #f8f8f9 #cef737 #161619