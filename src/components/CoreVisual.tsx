
import { cn } from "@/lib/utils";

const CoreVisual = ({ className }: { className?: string }) => {
  return (
    <div className={cn("space-y-8", className)}>
      {/* Core Visual content */}
      <div className="flex items-center justify-center">
        <div className="bg-poster-darkgray/70 backdrop-blur-sm rounded-lg p-8 border border-white/10 w-full">
          <div className="flex items-center justify-center h-64">
            <div className="relative w-full h-full">
              {/* Central device */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-br from-poster-darkgray to-black w-32 h-32 rounded-xl flex items-center justify-center shadow-lg shadow-poster-teal/20 border border-poster-teal/30">
                <div className="text-poster-teal text-xs font-mono text-center">
                  <p className="font-bold mb-2">I.R.I.S.</p>
                  <p>RPi 4 (4GB)</p>
                </div>
                <div className="absolute top-0 right-0 w-2 h-2 bg-poster-teal rounded-full animate-pulse"></div>
                <div className="absolute bottom-0 left-0 w-2 h-2 bg-poster-blue rounded-full animate-pulse" style={{ animationDelay: "0.5s" }}></div>
              </div>
              
              {/* Connected devices */}
              <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-poster-darkgray/80 rounded-lg flex items-center justify-center border border-white/10">
                <p className="text-poster-white text-xs">Sensors</p>
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-0.5 h-8 bg-gradient-to-t from-poster-teal to-transparent"></div>
              </div>
              
              <div className="absolute bottom-1/4 left-1/4 w-16 h-16 bg-poster-darkgray/80 rounded-lg flex items-center justify-center border border-white/10">
                <p className="text-poster-white text-xs">Edge ML</p>
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-0.5 h-8 bg-gradient-to-b from-poster-teal to-transparent"></div>
              </div>
              
              <div className="absolute top-1/4 right-1/4 w-16 h-16 bg-poster-darkgray/80 rounded-lg flex items-center justify-center border border-white/10">
                <p className="text-poster-white text-xs">Network</p>
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-0.5 h-8 bg-gradient-to-t from-poster-blue to-transparent"></div>
              </div>
              
              <div className="absolute bottom-1/4 right-1/4 w-16 h-16 bg-poster-darkgray/80 rounded-lg flex items-center justify-center border border-white/10">
                <p className="text-poster-white text-xs">Cloud</p>
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-0.5 h-8 bg-gradient-to-b from-poster-blue to-transparent"></div>
              </div>
              
              {/* Connection lines */}
              <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-poster-teal to-transparent"></div>
              <div className="absolute top-0 left-1/2 w-0.5 h-full bg-gradient-to-b from-transparent via-poster-blue to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoreVisual;
