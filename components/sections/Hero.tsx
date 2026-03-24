import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { TextFlip } from "../TextFlip";
import Image from "next/image";


function Hero() {
  return (
    <section className=" bg-radial-[at_50%_100%] from-green/20 to-dark to-60% w-full h-screen ">
      <div className="mx-auto max-w-380 flex items-center flex-col gap-10 w-full h-full pt-60 relative">
        <div className="flex items-center flex-col gap-8 text-accent" >
          <TextFlip 
            words={["Python", "JavaScript", "Rust", "C", "C++", "GoLang", "PHP"]} duration={2000}/>
          <h1 className="text-7xl text-foreground font-bold font-[poppins]">
            Debug Smarter, Learn Faster
          </h1>
          <p className="w-3xl text-foreground text-center">
            AI-powered debugging and learning for the modern developer. Resolve
            complex bugs and master new languages in seconds with our advanced
            neural engine.
          </p>
          <div className="flex items-center gap-3 font-[inter]">
            <Button variant="default" asChild className="bg-green/20 text-foreground hover:bg-green/30">
              <Link href="/">Try now</Link>
            </Button>
          </div>
        </div>

        <Image 
          src="/hero.webp"
          width={1000}
          height={1000}
          alt="Dashboard Image"
          className="rounded-3xl absolute -bottom-85"
        />
      </div>
    </section>
  );
}

export default Hero;
