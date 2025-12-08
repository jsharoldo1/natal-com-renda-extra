"use client";

const VslPlayer = () => {
  return (
    <div className="bg-card p-1 md:p-2 rounded-lg shadow-lg">
      <div className="relative aspect-video w-full">
        <div className="absolute inset-0 bg-gray-900 flex items-center justify-center rounded-md overflow-hidden">
           <vturb-smartplayer id="vid-6931f267c5a3364c781260da" style={{display: 'block', margin: '0 auto', width: '100%' }}></vturb-smartplayer>
        </div>
      </div>
    </div>
  );
};

export default VslPlayer;
