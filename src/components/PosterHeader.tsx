
import { cn } from "@/lib/utils";

const PosterHeader = () => {
  return (
    <div className="w-full flex flex-col items-center mb-8">
      <div className="flex justify-between items-start w-full">
        <div className="flex-1">
          {/* Empty space for balance */}
        </div>
        
        <div className="flex flex-col items-center flex-grow-2">
          <h1 className="text-8xl md:text-[80pt] header-bold tracking-tighter teal-blue-gradient mb-2">
            I.R.I.S.
          </h1>
          
          <h2 className="text-2xl md:text-[36pt] text-light text-poster-white mb-4">
            Intelligent, Responsive IoT Security System
          </h2>
          
          <p className="text-lg md:text-[28pt] text-poster-spacegray">
            Modular. Adaptive. Secure.
          </p>
        </div>
        
        <div className="flex-1 flex justify-end">
          <div className="bg-poster-teal px-4 py-1 rounded-full">
            <span className="text-poster-white text-sm font-medium">
              IoT Smart Security
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PosterHeader;
