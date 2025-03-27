import Image from "next/image";
import { Search, Download } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="flex flex-wrap justify-between  items-center  bg-transparent px-4 py-2 mt-28 ml-3 mr-5">
      
      <div className="flex items-center border border-[#d9d9dd] rounded-full px-4 py-1 w-full md:w-2/3 lg:w-1/2">
        <Search className="text-white w-6 h-5" />
        <input
          type="text"
          placeholder="Find using ticket ID or email"
          className="bg-transparent outline-none px-2 w-full text-white text-[15px] "
        />
        <button className="bg-[#4300D4] hover:bg-[#4300d4b6] text-white px-8 py-1 rounded-full">
          Search
        </button>
      </div>

      <div className="flex items-center gap-4 mt-2 md:mt-0 ml-[-50px] ">
        <button className="flex items-center gap-2 text-white hover:text-gray-300">
          <Download className="w-5 h-5" />
          Download CSV
        </button>
        <button className="text-white hover:text-gray-300 flex">
          <Image src="/svg/filter.svg" alt="Filter Icon" width={13} height={13} />
          <p className="ml-2">All</p>
        </button>
      </div>
    </div>
  );
}
