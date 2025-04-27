
import { Box, Cloud, Shield, Smartphone } from "lucide-react";

const CoreVisual = () => {
  return (
    <div className="w-full flex justify-center mb-16">
      <div className="relative w-4/5 h-96 flex items-center justify-center">
        {/* Background glow effects */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(46,196,182,0.1),transparent_40%)]"></div>
        
        {/* IoT Device: Raspberry Pi */}
        <div className="absolute left-1/4 top-1/2 transform -translate-y-1/2 bg-gradient-to-br from-poster-darkgray to-poster-darkgray/80 rounded-xl p-5 border border-poster-spacegray/30 shadow-lg shadow-poster-teal/5 hover:shadow-poster-teal/10 transition-all duration-500 group backdrop-blur-sm">
          <div className="text-center">
            <div className="w-36 h-20 bg-black rounded-md mb-4 flex items-center justify-center relative overflow-hidden group-hover:border group-hover:border-poster-teal/30 transition-all duration-500">
              {/* Component details */}
              <div className="absolute top-2 left-2 w-2 h-2 bg-poster-teal/30 rounded-full"></div>
              <div className="absolute top-2 right-2 w-2 h-2 bg-poster-teal/30 rounded-full"></div>
              <div className="absolute bottom-2 left-2 w-6 h-1 bg-poster-darkgray/50 rounded-sm"></div>
              <div className="absolute bottom-2 right-2 w-4 h-3 bg-poster-darkgray/50 rounded-sm"></div>
              
              {/* Status indicators */}
              <div className="w-3 h-3 bg-gradient-to-r from-poster-teal to-poster-blue rounded-full animate-pulse-glow"></div>
              
              {/* Data processing visualization */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="w-full h-full bg-gradient-to-r from-poster-teal/10 to-poster-blue/10 flex items-center justify-center">
                  <div className="text-[8px] font-mono text-poster-teal animate-pulse">Processing...</div>
                </div>
              </div>
            </div>
            <p className="text-poster-white text-sm font-medium mb-1">Raspberry Pi 4B</p>
            <p className="text-xs text-poster-spacegray">Fog Layer Processing</p>
            
            {/* Tech specs tooltip on hover */}
            <div className="mt-2 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-poster-darkgray/90 p-2 rounded-lg border border-poster-teal/20 text-left">
              <p className="text-[10px] text-poster-teal font-medium">Specifications:</p>
              <ul className="text-[9px] text-poster-white/70">
                <li>• Quad-core ARM Cortex-A72</li>
                <li>• TensorFlow Lite for ML</li>
                <li>• 5GHz Wi-Fi + BLE</li>
              </ul>
            </div>
          </div>
        </div>

        {/* IoT Device: Arduino */}
        <div className="absolute right-1/4 top-1/2 transform -translate-y-1/2 bg-gradient-to-br from-poster-darkgray to-poster-darkgray/80 rounded-xl p-5 border border-poster-spacegray/30 shadow-lg shadow-poster-teal/5 hover:shadow-poster-teal/10 transition-all duration-500 group backdrop-blur-sm">
          <div className="text-center">
            <div className="w-28 h-14 bg-black rounded-md mb-4 flex items-center justify-center relative overflow-hidden group-hover:border group-hover:border-poster-teal/30 transition-all duration-500">
              {/* Component details */}
              <div className="absolute top-1 left-1 w-1 h-1 bg-poster-teal/30 rounded-full"></div>
              <div className="absolute top-1 right-1 w-1 h-1 bg-poster-teal/30 rounded-full"></div>
              <div className="absolute bottom-1 left-1 w-3 h-1 bg-poster-darkgray/50 rounded-sm"></div>
              
              {/* Arduino sensor */}
              <div className="w-4 h-4 bg-poster-darkgray rounded-full flex items-center justify-center relative">
                <div className="w-2 h-2 bg-poster-teal rounded-full animate-ping absolute opacity-30"></div>
                <div className="w-2 h-2 bg-poster-teal rounded-full"></div>
              </div>
              
              {/* Sensor visualization */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="w-full h-full bg-gradient-to-r from-poster-teal/10 to-poster-blue/10 flex items-center justify-center">
                  <div className="text-[8px] font-mono text-poster-teal animate-pulse">Sensing...</div>
                </div>
              </div>
            </div>
            <p className="text-poster-white text-sm font-medium mb-1">Arduino Nano 33</p>
            <p className="text-xs text-poster-spacegray">Edge Layer Sensing</p>
            
            {/* Tech specs tooltip on hover */}
            <div className="mt-2 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-poster-darkgray/90 p-2 rounded-lg border border-poster-teal/20 text-left">
              <p className="text-[10px] text-poster-teal font-medium">Sensors:</p>
              <ul className="text-[9px] text-poster-white/70">
                <li>• PIR Motion Detection</li>
                <li>• Temperature/Humidity</li>
                <li>• Low-power BLE</li>
              </ul>
            </div>
          </div>
        </div>

        {/* IoT Device: Smart Door Controller */}
        <div className="absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-br from-poster-darkgray to-poster-darkgray/80 rounded-xl p-5 border border-poster-spacegray/30 shadow-lg shadow-poster-teal/5 hover:shadow-poster-teal/10 transition-all duration-500 group backdrop-blur-sm">
          <div className="text-center">
            <div className="w-40 h-24 bg-black rounded-md mb-4 flex items-center justify-center relative overflow-hidden group-hover:border group-hover:border-poster-teal/30 transition-all duration-500">
              {/* Component details */}
              <div className="absolute top-2 left-2 w-2 h-2 bg-poster-teal/30 rounded-full"></div>
              <div className="absolute top-2 right-2 w-2 h-2 bg-poster-teal/30 rounded-full"></div>
              
              {/* Door lock */}
              <div className="w-8 h-8 rounded-full border-2 border-poster-teal flex items-center justify-center relative">
                <div className="w-3 h-4 bg-poster-teal"></div>
                
                {/* Lock animation on hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="w-full h-full rounded-full bg-poster-teal/20 flex items-center justify-center animate-pulse">
                    <div className="w-3 h-4 bg-poster-teal"></div>
                  </div>
                </div>
              </div>
              
              {/* Camera lens */}
              <div className="absolute top-3 right-3 w-4 h-4 rounded-full border border-poster-spacegray/50 flex items-center justify-center">
                <div className="w-2 h-2 bg-black rounded-full"></div>
              </div>
            </div>
            <p className="text-poster-white text-sm font-medium mb-1">Smart Door Controller</p>
            <p className="text-xs text-poster-spacegray">Access & Surveillance</p>
            
            {/* Tech specs tooltip on hover */}
            <div className="mt-2 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-poster-darkgray/90 p-2 rounded-lg border border-poster-teal/20 text-left">
              <p className="text-[10px] text-poster-teal font-medium">Features:</p>
              <ul className="text-[9px] text-poster-white/70">
                <li>• 4K IR Camera</li>
                <li>• Biometric Authentication</li>
                <li>• AES-256 Encryption</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Cloud with Shield */}
        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group animate-float">
          <div className="relative">
            <Cloud size={68} className="text-poster-blue/70" />
            <Shield size={28} className="text-poster-teal absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-poster-darkgray/80 px-2 py-1 rounded text-[10px] text-poster-white opacity-0 group-hover:opacity-100 transition-all duration-300">
              AWS IoT Core
            </div>
            
            <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-poster-darkgray/80 px-2 py-1 rounded text-[10px] opacity-0 group-hover:opacity-100 transition-all duration-300">
              <p className="text-poster-teal">AES-256 Encryption</p>
              <p className="text-[8px] text-poster-white/70">MQTT Protocol</p>
            </div>
          </div>
        </div>
        
        {/* Mobile Device */}
        <div className="absolute top-1/4 right-1/5 transform -translate-x-1/2 -translate-y-1/2 group animate-float" style={{ animationDelay: "0.5s" }}>
          <Smartphone size={40} className="text-poster-white/70" />
          
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-poster-darkgray/80 px-2 py-1 rounded text-[10px] text-poster-white opacity-0 group-hover:opacity-100 transition-all duration-300">
            User Interface
          </div>
        </div>

        {/* Connection Lines */}
        <svg className="absolute inset-0 w-full h-full z-0" viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg">
          {/* Edge to Fog */}
          <path 
            className="data-flow-line" 
            d="M300,200 C350,150 450,150 500,200" 
          />
          
          {/* Fog to Edge */}
          <path 
            className="data-flow-line" 
            d="M300,210 C350,260 450,260 500,210"
          />
          
          {/* Door to Fog */}
          <path 
            className="data-flow-line" 
            d="M400,300 C400,250 400,250 400,200"
          />
          
          {/* Fog to Cloud */}
          <path 
            className="data-flow-line" 
            d="M400,150 C400,120 400,120 400,100"
          />
          
          {/* Cloud to App */}
          <path 
            className="data-flow-line" 
            d="M420,100 C480,100 520,100 580,100"
          />
        </svg>

        {/* Architecture Diagram - Bottom Right */}
        <div className="absolute bottom-0 right-0 bg-poster-darkgray/80 backdrop-blur-sm p-3 rounded-lg border border-white/10 hover:border-poster-teal/20 transition-all duration-300">
          <p className="text-[10px] text-poster-teal mb-2">Architecture Overview</p>
          <div className="flex items-center space-x-2 text-xs">
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-poster-darkgray flex items-center justify-center border border-poster-spacegray/30">
                <span className="text-poster-teal text-[8px]">Edge</span>
              </div>
              <span className="text-[8px] text-poster-white/70 mt-1">Sensing</span>
            </div>
            <div className="text-poster-teal">→</div>
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-poster-darkgray flex items-center justify-center border border-poster-spacegray/30">
                <span className="text-poster-teal text-[8px]">Fog</span>
              </div>
              <span className="text-[8px] text-poster-white/70 mt-1">Process</span>
            </div>
            <div className="text-poster-teal">→</div>
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-poster-darkgray flex items-center justify-center border border-poster-spacegray/30">
                <span className="text-poster-teal text-[8px]">Cloud</span>
              </div>
              <span className="text-[8px] text-poster-white/70 mt-1">Analyze</span>
            </div>
            <div className="text-poster-teal">→</div>
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-poster-darkgray flex items-center justify-center border border-poster-spacegray/30">
                <span className="text-poster-teal text-[8px]">App</span>
              </div>
              <span className="text-[8px] text-poster-white/70 mt-1">Control</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoreVisual;
