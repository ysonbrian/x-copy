import Sidebar from "@/app/components/Sidebar"

export default function HomeLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
    <section className="flex h-screen">
      <Sidebar />
      {children}
    </section>
  )
}
