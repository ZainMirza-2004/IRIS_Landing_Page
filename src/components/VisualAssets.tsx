
import { cn } from "@/lib/utils";

const VisualAssets = ({ className }: { className?: string }) => {
  return (
    <div className={cn("space-y-8", className)}>
      <h3 className="text-2xl md:text-[28pt] font-bold inline-block border-b-4 border-poster-teal text-poster-white tracking-tight mb-6">
        Implementation Results
      </h3>
      
      <div className="grid grid-cols-3 gap-10">
        {/* Prototype Showcase */}
        <div className="bg-poster-darkgray/70 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:border-poster-teal/30 transition-all duration-300">
          <h4 className="text-poster-white text-lg font-medium mb-3 flex items-center">
            <div className="w-2 h-2 bg-poster-teal rounded-full mr-2"></div>
            Prototype
          </h4>
          
          <div className="bg-gradient-to-b from-black to-poster-darkgray/80 h-32 rounded-lg flex items-center justify-center p-3 mb-3">
            <div className="relative">
              <div className="bg-poster-darkgray w-20 h-12 rounded relative flex items-center justify-center">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-poster-teal rounded-full animate-pulse"></div>
                
                {/* Raspberry Pi components */}
                <div className="absolute -top-1 right-2 w-3 h-1 bg-poster-darkgray/80 rounded-sm"></div>
                <div className="absolute -bottom-1 left-2 w-4 h-2 bg-poster-darkgray/80 rounded-sm"></div>
              </div>
              
              {/* Arduino component */}
              <div className="absolute -bottom-6 -right-8 bg-black w-14 h-6 rounded flex items-center justify-center">
                <div className="w-1 h-1 bg-poster-teal rounded-full"></div>
                <div className="absolute -top-2 left-2 w-2 h-4 bg-poster-spacegray/30 rounded-t-sm"></div>
              </div>
              
              {/* Connection lines */}
              <div className="absolute -bottom-3 -right-3 w-3 h-3 border-r border-b border-poster-teal/40"></div>
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-sm text-poster-white/80 mb-1">Hardware Implementation</p>
            <p className="text-xs text-poster-spacegray">Raspberry Pi 4 (4GB RAM)</p>
          </div>
          
          <div className="mt-3 p-2 bg-poster-teal/5 rounded border border-poster-teal/20">
            <p className="text-[10px] text-poster-white/70 text-center">
              <span className="text-poster-teal">Components:</span> GrovePi Plus, Sensors, Actuators
            </p>
          </div>
        </div>
        
        {/* App Screenshot */}
        <div className="bg-poster-darkgray/70 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:border-poster-teal/30 transition-all duration-300">
          <h4 className="text-poster-white text-lg font-medium mb-3 flex items-center">
            <div className="w-2 h-2 bg-poster-teal rounded-full mr-2"></div>
            Companion App
          </h4>
          
          <div className="flex justify-center">
            <div className="bg-black w-20 h-40 rounded-2xl border-4 border-poster-darkgray/80 relative">
              {/* Phone notch */}
              <div className="absolute top-0 w-8 h-1.5 bg-black rounded-b-lg left-1/2 transform -translate-x-1/2 z-10"></div>
              
              {/* Screen content */}
              <div className="p-1 flex flex-col h-full">
                {/* Status bar */}
                <div className="h-1.5 flex justify-between items-center mb-1">
                  <div className="w-4 h-0.5 bg-poster-white/30 rounded-full"></div>
                  <div className="w-1 h-0.5 bg-poster-teal rounded-full"></div>
                </div>
                
                {/* App header */}
                <div className="bg-poster-teal h-3 rounded mb-1 flex justify-center items-center">
                  <div className="w-3 h-1 bg-white/20 rounded-full"></div>
                </div>
                
                {/* Camera feed */}
                <div className="bg-gradient-to-b from-poster-darkgray to-black h-16 rounded mb-1 relative flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-poster-teal/50 rounded-full animate-ping absolute opacity-75"></div>
                  <div className="w-6 h-4 border border-poster-teal/30 rounded"></div>
                </div>
                
                {/* Controls */}
                <div className="space-y-1 flex-grow">
                  <div className="bg-poster-darkgray/60 h-1.5 rounded"></div>
                  <div className="bg-poster-darkgray/60 h-1.5 rounded"></div>
                  <div className="bg-poster-darkgray/60 h-1.5 rounded"></div>
                  <div className="flex justify-between mt-2">
                    <div className="w-3.5 h-3.5 bg-poster-teal/20 rounded-full flex items-center justify-center">
                      <div className="w-1.5 h-1.5 bg-poster-teal rounded-full"></div>
                    </div>
                    <div className="w-3.5 h-3.5 bg-poster-teal/20 rounded-full flex items-center justify-center">
                      <div className="w-1.5 h-1.5 bg-poster-teal rounded-full"></div>
                    </div>
                    <div className="w-3.5 h-3.5 bg-poster-teal/20 rounded-full flex items-center justify-center">
                      <div className="w-1.5 h-1.5 bg-poster-teal rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-3">
            <p className="text-sm text-poster-white/80 mb-1">User Interface</p>
            <p className="text-xs text-poster-spacegray">Python-Kivy with Material Design</p>
          </div>
          
          <div className="mt-3 p-2 bg-poster-teal/5 rounded border border-poster-teal/20">
            <p className="text-[10px] text-poster-white/70 text-center">
              <span className="text-poster-teal">Usability Score:</span> 92/100 in peer testing
            </p>
          </div>
        </div>
        
        {/* System Components */}
        <div className="bg-poster-darkgray/70 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:border-poster-teal/30 transition-all duration-300">
          <h4 className="text-poster-white text-lg font-medium mb-3 flex items-center">
            <div className="w-2 h-2 bg-poster-teal rounded-full mr-2"></div>
            System Components
          </h4>
          
          <div className="h-40 overflow-auto p-2 text-xs">
            <div className="space-y-3">
              <div>
                <p className="text-poster-teal font-medium mb-0.5">Interface and Connectivity:</p>
                <ul className="text-poster-white/80 space-y-1 pl-3">
                  <li>• GrovePi Plus [Interfaces Grove sensors with Pi]</li>
                  <li>• Arduino Expansion Shield for Pi B+ (V2.0)</li>
                  <li>• Base Shield for Arduino Uno</li>
                  <li>• Serial Bluetooth v3.0 {CSR-4 + CMOS + AFH}</li>
                </ul>
              </div>
              
              <div>
                <p className="text-poster-teal font-medium mb-0.5">Sensors:</p>
                <ul className="text-poster-white/80 space-y-1 pl-3">
                  <li>• Loudness Sensor (LM386)</li>
                  <li>• Light Sensor (LM358)</li>
                  <li>• PIR Motion Sensor</li>
                  <li>• Ultrasonic Ranger</li>
                </ul>
              </div>
              
              <div>
                <p className="text-poster-teal font-medium mb-0.5">Actuators:</p>
                <ul className="text-poster-white/80 space-y-1 pl-3">
                  <li>• Servo Motor</li>
                  <li>• Buzzer</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="mt-3 p-2 bg-poster-teal/5 rounded border border-poster-teal/20">
            <p className="text-[10px] text-poster-white/70 text-center">
              <span className="text-poster-teal">Module:</span> CM2211 - IoT Systems
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisualAssets;
