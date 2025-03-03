'use client';
import { useState, useEffect } from "react";
import FloorPlan from "@/components/FloorPlan";
import Gallery from "@/components/Gallery";

export default function Home() {
  const [videoAvailable, setVideoAvailable] = useState(true); 
  useEffect(() => {

    fetch("/your-video.mp4", { method: "HEAD" })
      .then((res) => {
        if (!res.ok) setVideoAvailable(false);
      })
      .catch(() => setVideoAvailable(false));
  }, []);

  return (
    <>

      {videoAvailable ? (
        <div className="relative w-screen h-screen overflow-hidden">
          <video 
            className="absolute top-0 left-0 w-full h-full object-cover" 
            autoPlay 
            loop 
            muted 
            playsInline
          >
            <source src="/your-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      ) : (
        <div className="relative w-screen h-screen flex justify-center items-center bg-gray-800 text-white text-2xl">
          Image / Video Goes Here
        </div>
      )}

      
      <Gallery/>

      
    </>
  );
}
