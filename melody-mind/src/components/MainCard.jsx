"use client";
import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";
import { IconAppWindow } from "@tabler/icons-react";


const MainCard = () => {
  return (
    <>
        {/* center div on the y-axis */}
        <div className="flex justify-center items-center h-full">
            <BackgroundGradient className="rounded-[22px] min-w-full p-4 sm:p-10 bg-white dark:bg-zinc-900 items-center flex flex-col">
            <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                Create Midi/Audio Files Powered by AI
            </p>

            <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Insert Buttons Here
            </p>
            <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                    Generate
                </span>
            </button>
            </BackgroundGradient>
        </div>
    </>
  )
}

export default MainCard