"use client"
import Footer from "@/app/components/Footer"
import Image from "next/image"
import Link from "next/link"
import { redirect, useRouter } from "next/navigation"
import React from "react"
import Main from "../_component/Main"

export default function Login() {
  const router = useRouter()
  router.replace("i/flow/login")
  return <Main />
}
