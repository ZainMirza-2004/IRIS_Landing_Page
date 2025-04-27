const VisualAssets = () => {
  return (
    <div className="space-y-8">
      <h3 className="text-2xl md:text-[28pt] font-bold inline-block border-b-4 border-poster-teal text-poster-white tracking-tight">
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
            <p className="text-xs text-poster-spacegray">Raspberry Pi 4B + Arduino Nano 33 BLE</p>
          </div>
          
          <div className="mt-3 p-2 bg-poster-teal/5 rounded border border-poster-teal/20">
            <p className="text-[10px] text-poster-white/70 text-center">
              <span className="text-poster-teal">Testing Results:</span> 95% detection rate in variable lighting conditions
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
            <p className="text-xs text-poster-spacegray">SwiftUI for iOS, Material You for Android</p>
          </div>
          
          <div className="mt-3 p-2 bg-poster-teal/5 rounded border border-poster-teal/20">
            <p className="text-[10px] text-poster-white/70 text-center">
              <span className="text-poster-teal">Usability Score:</span> 92/100 in peer testing
            </p>
          </div>
        </div>
        
        {/* Performance Data */}
        <div className="bg-poster-darkgray/70 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:border-poster-teal/30 transition-all duration-300">
          <h4 className="text-poster-white text-lg font-medium mb-3 flex items-center">
            <div className="w-2 h-2 bg-poster-teal rounded-full mr-2"></div>
            Performance Metrics
          </h4>
          
          <div className="h-40 flex items-center p-3">
            <div className="w-full h-32 flex flex-col">
              {/* Chart title */}
              <div className="text-center mb-4">
                <p className="text-xs text-poster-teal font-medium">Alert Latency Comparison (seconds)</p>
              </div>
              
              {/* Bar chart */}
              <div className="flex items-end space-x-4 justify-center h-24">
                <div className="flex flex-col items-center">
                  <div className="bg-gradient-to-t from-poster-teal to-poster-teal/70 h-8 w-8 rounded-t"></div>
                  <p className="text-[10px] text-poster-white mt-1">I.R.I.S</p>
                  <p className="text-[8px] text-poster-teal">2.5s</p>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="bg-poster-spacegray h-16 w-8 rounded-t"></div>
                  <p className="text-[10px] text-poster-white mt-1">Competitors</p>
                  <p className="text-[8px] text-poster-spacegray">7.2s</p>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="bg-gradient-to-t from-poster-blue/60 to-poster-blue/30 h-20 w-8 rounded-t"></div>
                  <p className="text-[10px] text-poster-white mt-1">Cloud-Only</p>
                  <p className="text-[8px] text-poster-blue">10.4s</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-2 mt-2">
            <div className="bg-poster-teal/5 rounded p-1.5 text-center">
              <p className="text-[10px] text-poster-white/80 font-medium">Battery Life</p>
              <p className="text-[8px] text-poster-teal">72 hours</p>
            </div>
            <div className="bg-poster-teal/5 rounded p-1.5 text-center">
              <p className="text-[10px] text-poster-white/80 font-medium">Accuracy</p>
              <p className="text-[8px] text-poster-teal">99.3%</p>
            </div>
            <div className="bg-poster-teal/5 rounded p-1.5 text-center">
              <p className="text-[10px] text-poster-white/80 font-medium">Processing</p>
              <p className="text-[8px] text-poster-teal">Edge ML</p>
            </div>
          </div>
          
          <div className="mt-3 p-2 bg-poster-teal/5 rounded border border-poster-teal/20">
            <p className="text-[10px] text-poster-white/70 text-center">
              <span className="text-poster-teal">60%</span> faster response time than market alternatives
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisualAssets;
