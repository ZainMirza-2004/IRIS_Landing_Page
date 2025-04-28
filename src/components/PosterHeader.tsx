
import { cn } from "@/lib/utils";
import { ShieldCheck } from "lucide-react";

const PosterHeader = ({ className }: { className?: string }) => {
  return (
    <div className={cn("w-full flex flex-col items-center space-y-6", className)}>
      <div className="flex justify-between items-start w-full">
        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-3">
            <div className="w-3 h-3 bg-poster-teal rounded-full animate-pulse"></div>
            <div className="w-3 h-3 bg-poster-blue rounded-full animate-pulse" style={{ animationDelay: "0.3s" }}></div>
            <div className="w-3 h-3 bg-white/50 rounded-full animate-pulse" style={{ animationDelay: "0.6s" }}></div>
          </div>
          <div className="bg-gradient-to-r from-poster-teal/20 to-transparent px-4 py-1.5 rounded-lg backdrop-blur-sm border border-poster-teal/10 inline-flex items-center">
            <ShieldCheck className="w-4 h-4 text-poster-teal mr-2" />
            <span className="text-poster-white text-sm font-medium">Project: CM2211-Final</span>
          </div>
        </div>
        
        <div className="flex flex-col items-center flex-grow-2">
          <h1 className="text-8xl md:text-[80pt] header-bold tracking-tighter teal-blue-gradient mb-1">
            I.R.I.S.
          </h1>
          
          <h2 className="text-2xl md:text-[36pt] text-light text-poster-white mb-2 tracking-wide">
            Intelligent, Responsive IoT Security System
          </h2>
          
          <p className="text-lg md:text-[28pt] text-poster-spacegray font-light tracking-widest">
            Modular. Adaptive. Secure.
          </p>
        </div>
        
        <div className="flex-1 flex justify-end">
          <div className="bg-gradient-to-r from-poster-teal to-poster-blue px-4 py-2 rounded-full shadow-lg shadow-poster-teal/20 backdrop-blur-sm border border-white/10">
            <span className="text-poster-white text-sm font-semibold tracking-wide">
              IoT Smart Security
            </span>
          </div>
        </div>
      </div>
      
      <div className="mt-4 w-full max-w-2xl">
        <div className="p-3 bg-poster-darkgray/40 rounded-lg backdrop-blur-md border border-white/5">
          <p className="text-sm text-poster-white/80 leading-relaxed text-center">
            I.R.I.S. integrates edge computing, machine learning, and encrypted communications 
            with a distributed architecture for minimal latency, enhanced privacy, and reduced cloud dependency.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PosterHeader;
