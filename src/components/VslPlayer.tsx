"use client";

import { useEffect } from "react";

const VslPlayer = () => {
  return (
    <div className="bg-card p-1 md:p-2 rounded-lg shadow-lg">
      <div className="relative aspect-video w-full">
        <div className="absolute inset-0 bg-gray-900 flex items-center justify-center rounded-md overflow-hidden">
           <vturb-smartplayer id="vid-6931a8e03700e0235194e3d0" style={{display: 'block', margin: '0 auto', width: '100%' }}></vturb-smartplayer>
        </div>
      </div>
    </div>
  );
};

export default VslPlayer;
