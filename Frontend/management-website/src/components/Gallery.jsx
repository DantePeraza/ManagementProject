import React from "react";

export default function Gallery() {
  return (
    <>
    <div className="bg-gray-100">
      <h2 className="text-3xl font-bold mb-6">Gallery</h2>
        <div id="gallery" className="w-screen h-screen py-20  flex flex-col items-center"> 
          <div className="grid grid-cols-3 gap-4">
            <div className="w-64 h-40 bg-gray-300 flex items-center justify-center">Image 1</div>
            <div className="w-64 h-40 bg-gray-300 flex items-center justify-center">Image 2</div>
            <div className="w-64 h-40 bg-gray-300 flex items-center justify-center">Image 3</div>
          </div>
        </div>
      </div>
    </>
  );
}
