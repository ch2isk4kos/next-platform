"use client";
import * as React from "react";
import NavbarMain from "../components/nav/NavbarMain";
import { NextUIProvider } from "@nextui-org/react";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <NextUIProvider>
          <NavbarMain>{children}</NavbarMain>
        </NextUIProvider>
      </body>
    </html>
  );
}
