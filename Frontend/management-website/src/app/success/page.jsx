"use client";

import dynamic from "next/dynamic";
import { CheckCircle } from "react-feather";

// const Fade = dynamic(() => import("react-reveal/Fade"), { ssr: false });=

export default function SuccessPage() {
  return (
    // <Fade bottom duration={700} distance="60px">
      <div className="mt-36 flex flex-col items-center justify-center">
        <CheckCircle className="text-[rgb(8,8,63)] w-12 h-12" />
        <h2 className="text-2xl text-[rgb(8,8,63)] text-center md:text-lg">
          MESSAGE SENT SUCCESSFULLY
        </h2>
      </div>
    // </Fade>
  );
}