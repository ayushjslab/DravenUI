"use client";
import React from "react";
import { motion } from "motion/react";
import { Sparkles } from "lucide-react";
import { RiTailwindCssFill } from "react-icons/ri";
import { BrowseComponentsButton } from "../ui/browse-button";
import { BrowseBlocksButton } from "../ui/browse-blocks";
import Features from "./Features";
import Link from "next/link";
import AIInput_04 from "../dravenui/ai-input/ai-input-04";
import Card02 from "../dravenui/card/card-02";
import Btn03 from "../dravenui/button/btn-03";
import { Btn14 } from "../dravenui/button/btn-14";
import Input09 from "../dravenui/input/input-09";
import Card08 from "../dravenui/card/card-08";

const Hero = () => {
  return (
    <div className="mx-auto w-full max-w-7xl min-h-screen flex flex-col lg:flex-row justify-between gap-8 lg:gap-12 px-4 sm:px-6 md:py-16 lg:py-20">
      {/* left side - Title and CTA */}
      <div className="w-full lg:w-[45%] flex-col items-start text-left space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-light leading-[1.1] text-zinc-900 dark:text-zinc-100">
            Craft With{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-500 via-fuchsia-500 to-purple-500 dark:from-rose-400 dark:via-fuchsia-400 dark:to-purple-400">
              Precison
            </span>
            <br />
            build with{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-500 via-fuchsia-500 to-purple-500 dark:from-rose-400 dark:via-fuchsia-400 dark:to-purple-400">
              ease
            </span>
          </h1>
          <p className="mt-6 text-base md:text-xl text-zinc-700 dark:text-zinc-300 max-w-lg">
            Accurated Collection of{" "}
            <span className="font-semibold">100+ premium UI components </span>
            created with {""}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-500 via-fuchsia-500 to-purple-500 dark:from-rose-400 dark:via-fuchsia-400 dark:to-purple-400">
              Tailwind CSS
            </span>{" "}
            and{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-500 via-fuchsia-500 to-purple-500 dark:from-rose-400 dark:via-fuchsia-400 dark:to-purple-400">
              Tailwind CSS
            </span>{" "}
            for modern React and Next.js application
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col justify-start w-full "
        >
          <span className="text-sm text-zinc-500 dark:text-zinc-300 pb-3 text-start flex items-center gap-2">
            <RiTailwindCssFill className="h-6 w-6 text-blue-400" />
            <span>Now updated for TAILWIND CSS 4.0!</span>
            <span className="inline-flex items-center rounded-md bg-purple-50 dark:bg-purple-900 px-2 py-1 text-xs font-medium text-purple-700 dark:text-purple-300">
              <Sparkles className="h-3 w-3 mr-1" />
            </span>
          </span>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-start gap-3">
            <BrowseComponentsButton />
            <BrowseBlocksButton />
          </div>
        </motion.div>
        <Features />
      </div>

      {/* right side - component layout */}
      <div className="w-full lg:w-[55%] flex flex-col justify-between gap-6 lg:pl-8">
        {/* top row: card + Action  Search bar */}
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 items-center justify-center"
        >
          {/* Card component */}
          <div className="w-full flex flex-col items-center justify-center ">
            <span className="text-sm text-zinc-500 dark:text-zinc-400 block text-center mb-2">
              Cards
            </span>
            <Card08 href="/docs/components/card" />
          </div>

          {/* Action Search Bar */}
          <div className="w-full max-w-[600px] bg-transparent">
            <span className="text-sm text-zinc-500 dark:text-zinc-400 block text-center mb-2">
              Profile
            </span>
            {/* <ActionSearchBar
                            actions={allActions}
                            defaultOpen={true}
                        /> */}
            <Card02 />
          </div>
        </motion.div>

        {/* Middle row: AI Chat */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full"
        >
          <span className="text-sm text-zinc-500 dark:text-zinc-400 block text-center mb-2">
            AI Chat
          </span>
          <AIInput_04 />
          <div className="w-full h-48 rounded-xl border border-zinc-200 dark:border-zinc-800 flex items-center justify-center">
            {/* <AIInput_04 /> */}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="w-full grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Left side - Buttons */}
          <div className="w-full">
            <span className="text-sm text-zinc-500 dark:text-zinc-400 block text-center mb-2">
              Buttons
            </span>
            <div className="w-full h-48 rounded-xl  border border-zinc-200 dark:border-zinc-800 flex flex-col items-center justify-center gap-3">
              <Link href="/docs/components/button">
                <Btn14 label="Bring me" className=" w-42 py-5" />
              </Link>
              <Link href="/docs/components/button">
                <Btn03 className=" w-42 py-5" />
              </Link>
            </div>
          </div>

          {/* Right side - Input */}
          <div className="w-full">
            <span className="text-sm text-zinc-500 dark:text-zinc-400 block text-center mb-2">
              Input
            </span>
            <Link href="/docs/components/input"><Input09 /></Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
