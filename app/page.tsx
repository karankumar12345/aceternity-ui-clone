import FAQ from "./(components)/FAQ";
import HeroSection from "./(components)/HeroSection";

export default function Home() {
  return (
    <div className="min-h-screen  relative overflow-hidden">
    {/* Grid Background Pattern */}
    <div className="absolute inset-0 pointer-events-none">
      <svg className="w-full h-full">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" className="text-gray-200" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

 
    </div>

<HeroSection/>
<FAQ/>
   
  </div>
  
  );
}
