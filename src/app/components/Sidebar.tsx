import Image from "next/image"
import { FaRegCircleUser } from "react-icons/fa6"
import { GoHome } from "react-icons/go"
import { IoSearchOutline } from "react-icons/io5"
import { RiNotification2Line } from "react-icons/ri"
import { AiOutlineMail } from "react-icons/ai"
import { CgNotes } from "react-icons/cg"
import { PiBookmarkSimple } from "react-icons/pi"
import { IoPeopleOutline } from "react-icons/io5"
import { FaXTwitter } from "react-icons/fa6"
import { BsPerson } from "react-icons/bs"
import { CiCircleMore } from "react-icons/ci"
import Link from "next/link"

const LINK_LIST = [
  { src: "/home", name: "Home", icon: <GoHome size={40} /> },
  { src: "/explore", name: "Explore", icon: <IoSearchOutline size={40} /> },
  {
    src: "/notification",
    name: "Notification",
    icon: <RiNotification2Line size={40} />,
  },
  { src: "/message", name: "Message", icon: <AiOutlineMail size={40} /> },

  { src: "/lists", name: "Lists", icon: <CgNotes size={40} /> },
  {
    src: "/bookmarks",
    name: "Bookmarks",
    icon: <PiBookmarkSimple size={40} />,
  },
  {
    src: "/communities",
    name: "Communities",
    icon: <IoPeopleOutline size={40} />,
  },
  { src: "/premium", name: "Premium", icon: <FaXTwitter size={40} /> },
  { src: "/profile", name: "Profile", icon: <BsPerson size={40} /> },
  { src: "/more", name: "More", icon: <CiCircleMore size={40} /> },
]

export default function Sidebar() {
  return (
    <div className="flex justify-end w-[603px] max-w-full h-screen bg-teal-300">
      <div className="fixed top-0 ">
        <div className="flex flex-col justify-between h-screen">
          <div className="flex flex-col  w-[275px] ">
            <div className="px-3 hover:bg-zinc-200 w-fit p-2 rounded-full cursor-pointer">
              <Image
                src={"/logo/logo-black.png"}
                alt="logo"
                width={30}
                height={30}
                className="py-[2px] "
              />
            </div>
            <div className="flex flex-col gap-5  ">
              <ul>
                {LINK_LIST.map((list) => (
                  <li key={list.name}>
                    <Link
                      href={list.src}
                      className="flex items-center gap-2 my-2 hover:bg-zinc-200 w-fit px-[8px] py-[6px] rounded-full cursor-pointer"
                    >
                      <p>{list.icon}</p>
                      <p className="font-medium">{list.name}</p>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <button className="bg-[#1C9BEF] w-[200px] rounded-full p-2 text-white font-semibold hover:bg-blue-500">
              Post
            </button>
          </div>
          <div className="flex items-center gap-2 hover:bg-zinc-200 w-fit px-[12px] py-[6px]  rounded-full">
            <FaRegCircleUser size={40} />
            <div className=" flex flex-col gap-1">
              <div>ID</div>
              <div>NickName</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
