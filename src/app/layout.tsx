import Navbar from "@/components/navbar/Navbar"
import "./globals.css"
import type { Metadata } from "next"
import { Nunito } from "next/font/google"
// import Modal from "@/components/modals/Modal"
import RegisterModal from "@/components/modals/RegisterModal"
import ToasterProvider from "@/providers/ToasterProvider"

const nunito = Nunito({
  weight: ["200", "300", "400", "500", "600", "700", "800", "900", "1000"],
  style: ["italic", "normal"],
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "AirBnb Clone",
  description: "By David Mejia in typescript",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={nunito.className}>
        <ToasterProvider />
        <RegisterModal />
        <Navbar />
        {children}
      </body>
    </html>
  )
}
