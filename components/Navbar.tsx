"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  RegisterLink,
  LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/components";

function Header() {
  return (
    <header className="bg-black relative z-10 shadow-md">
      <div className="mx-auto flex h-16 max-w-screen-xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/logo-white.png"
              alt="logo"
              width={25}
              height={25}
              className="pt-1.5 hover:scale-110 transition-transform duration-300"
            />
            <span className="text-white text-2xl font-bold tracking-wide hover:text-sky-300 transition-colors duration-300">
              canvas
            </span>
          </Link>
        </div>

        

        {/* Auth Buttons */}
        <div className="flex items-center gap-4">
          <LoginLink postLoginRedirectURL="/dashboard">
            <span className="cursor-pointer rounded-md px-5 py-2.5 text-sm font-medium text-white border border-white hover:bg-white hover:text-black transition">
              Login
            </span>
          </LoginLink>

          <RegisterLink>
            <span className="hidden sm:inline cursor-pointer rounded-md bg-white px-5 py-2.5 text-sm font-medium text-black hover:bg-gray-300 transition">
              Register
            </span>
          </RegisterLink>

          
        </div>
      </div>
    </header>
  );
}

export default Header;
