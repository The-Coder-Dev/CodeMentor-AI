"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { ClerkProvider, Show, SignIn, SignInButton } from "@clerk/nextjs";

const links = [
  { title: "Home", url: "/", id: 1 },
  { title: "About", url: "/", id: 2 },
  { title: "Features", url: "/", id: 3 },
  { title: "Contact", url: "/", id: 4 },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ClerkProvider>
      <header className="w-full absolute top-0 z-999 px-5">
        <nav className="py-7 w-full mx-auto max-w-380 flex items-center justify-between">
          <Link href="/" className="text-accent font-[Sora]">
            CodeMentor AI
          </Link>

          {/* Mobile HamBurger Menu */}
          <div
            className=" md:hidden text-accent bg-white/10 p-1 rounded-sm"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </div>

          {/* Desktop Menu Links */}
          <div className="hidden md:flex gap-2">
            {links.map((item) => {
              return (
                <div
                  key={item.id}
                  className="text-accent hover:text-gray-400 duration-300"
                >
                  <Link href={item.url}>{item.title}</Link>
                </div>
              );
            })}
          </div>

          <Show when={"signed-in"}>
            <Button asChild className="bg-green/40 text-accent border border-green/20">
                <Link href="/dashboard">Go to Dashboard</Link>
            </Button>
          </Show>

          <Show when={"signed-out"}>
            <div className="flex gap-2 items-center">
              <Button>
                Get Started
              </Button>

             <SignInButton >
                <Link href="/" className="text-accent text-sm">
                  Sign In
                </Link>
             </SignInButton>

            </div>
          </Show>
        </nav>
      </header>
    </ClerkProvider>
  );
}

export default Navbar;
