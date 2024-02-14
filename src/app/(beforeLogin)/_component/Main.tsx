import Footer from "@/app/components/Footer"
import Image from "next/image"
import Link from "next/link"
import React from "react"

export default function Main() {
  return (
    <main className="flex flex-col md:flex-row  w-dvh  h-dvh relative p-[20px]">
      <div className="md:flex-1  my-auto p-[20px]">
        <Image
          src={"/logo/logo-black.png"}
          alt={"logo"}
          width={300}
          height={300}
          className={`hidden md:block mx-auto`}
        />
        <Image
          src={"/logo/logo-black.png"}
          alt={"logo"}
          width={45}
          height={57}
          className={`block md:hidden`}
        />
      </div>
      <div className="flex flex-col gap-8 md:flex-1 my-auto p-[20px]">
        <div className="text-[40px] md:text-[64px] font-bold ">
          지금 일어나고 있는 일
        </div>
        <div className="text-[23px] md:text-[31px] font-bold">
          지금 가입하세요.
        </div>

        <Link
          href="/i/flow/signup"
          className="bg-[#188CD8] text-center text-white text-[15px] font-bold rounded-full w-full max-w-[300px] py-2 md:py-3 hover:bg-sky-700 hover:text-white "
        >
          계정 만들기
        </Link>

        <div className="flex flex-col gap-3">
          <div className="text-[17px] font-bold">
            이미 트위터에 가입하셨나요?
          </div>

          <Link
            className="bg-zinc-100 text-center text-[#188CD8] text-[15px] font-bold rounded-full w-full max-w-[300px] py-2 md:py-3 hover:text-white hover:bg-[#9fd7f9]"
            href="/login"
          >
            로그인
          </Link>
        </div>
      </div>
      <Footer />
    </main>
  )
}
