import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Shape from "@/components/ui/shape"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <Shape />
      <main className="container flex-1 pt-28 md:pt-32">{children}</main>
      <Footer />
    </div>
  )
}