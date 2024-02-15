import { BsArrowLeftShort } from "react-icons/bs"
import { IoIosSearch } from "react-icons/io"
export default function HomePage() {
  return (
    <div className="  w-full max-w-[1317px]  overflow-scroll ">
      <div className="flex gap-10 h-screen">
        <div className="w-[600px] grow-1 relative">
          <div className="fixed top-0 flex items-center gap-8 p-2 z-30 h-[53px] bg-[#fefbfbfd5] backdrop-blur-xl">
            <BsArrowLeftShort size={30} />
            <p className="text-lg font-bold ">Post</p>
          </div>
          <div className="pt-[53px]  z-10">Contents</div>
        </div>
        <div className="flex flex-col gap-5 w-[350px] grow-1 bg-slate-600 relative">
          <div className="fixed flex items-center rounded-full w-[350px]  py-[10px] px-[10px] bg-[#EFF3F4] backdrop-blur-xl">
            <IoIosSearch
              size={20}
              className="absolute left-[10px] text-[#666] text-[16px]s"
            />
            <input
              type="text"
              placeholder="Search"
              className="w-full h-full border-none outline-none text-[14px] pl-[30px] focus:border-[#ddd] bg-[#EFF3F4]"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
