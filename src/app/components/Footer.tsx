import Link from "next/link"
import React from "react"

const LINK_LIST = [
  { src: "/", name: "소개" },
  { src: "/", name: "X 앱 다운로드하기" },
  { src: "/", name: "고객센터" },
  { src: "/", name: "이용약관" },
  { src: "/", name: "개인정보 처리방침" },
  { src: "/", name: "쿠키 정책" },
  { src: "/", name: "접근성" },
  { src: "/", name: "광고 정보" },
  { src: "/", name: "블로그" },
  { src: "/", name: "상태" },
  { src: "/", name: "채용" },
  { src: "/", name: "브랜드 리소스" },
  { src: "/", name: "광고" },
  { src: "/", name: "마케팅" },
  { src: "/", name: "비즈니스용 X" },
  { src: "/", name: "개발자" },
  { src: "/", name: "디렉터리" },
  { src: "/", name: "설정" },
  { src: "/", name: "@ 2024 X Corp." },
]

export default function Footer() {
  return (
    <ul className="flex flex-wrap md:absolute md:bottom-5 text-zinc-500 md:flex justify-center px-[16px]">
      {LINK_LIST.map((list) => (
        <li key={list.name} className="px-[4px]">
          <Link href={list.src} className="text-[13px] break-all">
            {list.name}
          </Link>
        </li>
      ))}
    </ul>
  )
}
