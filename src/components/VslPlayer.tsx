"use client";

const VslPlayer = () => {

  return (
    <div className="bg-card p-1 md:p-2 rounded-lg shadow-lg">
      <div className="relative aspect-video w-full">
        <div className="absolute inset-0 bg-gray-900 flex items-center justify-center rounded-md overflow-hidden">
           <iframe src="https://scripts.converteai.net/09499118-fcc4-429f-a4f3-67334e481c3f/players/68c3442b0534235ff010ce3c/embed.html" style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none'}}></iframe>
        </div>
      </div>
    </div>
  );
};

export default VslPlayer;
