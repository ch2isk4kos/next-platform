"use client";
import * as React from "react";
import NavbarMain from "../components/nav/NavbarMain";
// import NavbarSecondary from "../components/nav/NavbarSecondary";
import { NextUIProvider } from "@nextui-org/react";
import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en" className="dark">
        <body className={`${inter.className} min-h-screen`}>
          <NextUIProvider>
            <NavbarMain />
            {/* <NavbarSecondary /> */}
            <div className="flex justify-center items-center">{children}</div>
          </NextUIProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
