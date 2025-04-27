
import { Box, Cloud, Shield } from "lucide-react";
import { cn } from "@/lib/utils";

const CoreVisual = () => {
  return (
    <div className="w-full flex justify-center mb-12">
      <div className="relative w-4/5 h-80 flex items-center justify-center">
        {/* Main IoT Devices */}
        <div className="absolute left-1/4 top-1/2 transform -translate-y-1/2 bg-poster-darkgray rounded-xl p-4 border border-poster-spacegray">
          <div className="text-center">
            <div className="w-32 h-16 bg-black rounded-md mb-2 flex items-center justify-center">
              <div className="w-2 h-2 bg-poster-teal rounded-full animate-pulse-glow"></div>
            </div>
            <p className="text-poster-white text-sm">Raspberry Pi 4B</p>
          </div>
        </div>

        <div className="absolute right-1/4 top-1/2 transform -translate-y-1/2 bg-poster-darkgray rounded-xl p-4 border border-poster-spacegray">
          <div className="text-center">
            <div className="w-24 h-12 bg-black rounded-md mb-2 flex items-center justify-center">
              <div className="w-4 h-4 bg-poster-darkgray rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-poster-teal rounded-full"></div>
              </div>
            </div>
            <p className="text-poster-white text-sm">Arduino Nano</p>
          </div>
        </div>

        <div className="absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-poster-darkgray rounded-xl p-4 border border-poster-spacegray">
          <div className="text-center">
            <div className="w-36 h-20 bg-black rounded-md mb-2 flex items-center justify-center">
              <div className="w-6 h-6 rounded-full border-2 border-poster-teal flex items-center justify-center">
                <div className="w-2 h-3 bg-poster-teal"></div>
              </div>
            </div>
            <p className="text-poster-white text-sm">Smart Door Controller</p>
          </div>
        </div>

        {/* Cloud with Shield */}
        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2">
          <div className="relative">
            <Cloud size={64} className="text-poster-blue opacity-80" />
            <Shield size={24} className="text-poster-teal absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          </div>
        </div>

        {/* Connection Lines */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg">
          <path 
            className="data-flow-line" 
            d="M300,200 C350,150 450,150 500,200" 
            strokeDasharray="5,5"
          />
          <path 
            className="data-flow-line" 
            d="M300,210 C350,260 450,260 500,210" 
            strokeDasharray="5,5"
          />
          <path 
            className="data-flow-line" 
            d="M400,300 C400,250 400,250 400,200" 
            strokeDasharray="5,5"
          />
        </svg>

        {/* Architecture Diagram - Bottom Right */}
        <div className="absolute bottom-0 right-0 bg-poster-darkgray bg-opacity-70 p-2 rounded">
          <div className="flex items-center space-x-2 text-xs">
            <div className="flex flex-col items-center">
              <div className="w-6 h-6 rounded-full bg-poster-darkgray flex items-center justify-center">
                <span className="text-poster-teal text-[8px]">Edge</span>
              </div>
            </div>
            <div className="text-poster-teal">→</div>
            <div className="flex flex-col items-center">
              <div className="w-6 h-6 rounded-full bg-poster-darkgray flex items-center justify-center">
                <span className="text-poster-teal text-[8px]">Fog</span>
              </div>
            </div>
            <div className="text-poster-teal">→</div>
            <div className="flex flex-col items-center">
              <div className="w-6 h-6 rounded-full bg-poster-darkgray flex items-center justify-center">
                <span className="text-poster-teal text-[8px]">Cloud</span>
              </div>
            </div>
            <div className="text-poster-teal">→</div>
            <div className="flex flex-col items-center">
              <div className="w-6 h-6 rounded-full bg-poster-darkgray flex items-center justify-center">
                <span className="text-poster-teal text-[8px]">App</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoreVisual;
