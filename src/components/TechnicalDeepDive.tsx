
import { cn } from "@/lib/utils";
import { RefreshCcw, Lock, Database, Wifi, Cpu, Layers, ArrowRight } from "lucide-react";

const TechnicalDeepDive = ({ className }: { className?: string }) => {
  return (
    <div className={cn("space-y-4", className)}>
      <h3 className="text-2xl md:text-[28pt] font-bold inline-block border-b-4 border-poster-teal text-poster-white tracking-tight mb-4">
        Architecture & Data Flow
      </h3>
      
      <div className="bg-poster-darkgray/70 backdrop-blur-sm rounded-lg p-4 border border-white/10 space-y-4">
        {/* Architecture Diagram with Data Flow */}
        <div className="flex items-center justify-between relative">
          {/* Connecting lines for data flow */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-poster-teal via-poster-blue to-poster-teal opacity-20 transform -translate-y-1/2 z-0"></div>
          <div className="absolute top-1/4 left-0 right-0 h-0.5 bg-poster-teal/10 z-0 dotted-line"></div>
          <div className="absolute bottom-1/4 left-0 right-0 h-0.5 bg-poster-blue/10 z-0 dotted-line"></div>
          
          {/* Edge Layer */}
          <div className="flex flex-col items-center z-10">
            <div className="bg-poster-darkgray p-3 rounded-lg border border-white/10 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-poster-teal text-poster-background text-xs px-2 py-0.5 rounded-full">
                Edge Node
              </div>
              <div className="space-y-1 text-xs">
                <p className="text-poster-teal font-medium">Sensor Node</p>
                <ul className="text-poster-white/80 text-[9px] space-y-0.5">
                  <li>• Hardware: Arduino</li>
                  <li>• Sensors: BLE v1, Buzzer, PIR, Loudness, Temp</li>
                  <li>• Protocol: BLE [GAP, GATT, ATT, L2CAP]</li>
                  <li>• Security: AES-128</li>
                </ul>
                
                <div className="border-t border-white/10 pt-1 mt-1">
                  <p className="text-poster-teal text-[9px]">Smart Lock</p>
                  <ul className="text-poster-white/80 text-[8px] space-y-0.5">
                    <li>• Hardware: Arduino [BLE, Servo Motor]</li>
                    <li>• Security: AES-256, HMAC</li>
                  </ul>
                </div>
                
                <div className="border-t border-white/10 pt-1 mt-1">
                  <p className="text-poster-teal text-[9px]">Door Bell</p>
                  <ul className="text-poster-white/80 text-[8px] space-y-0.5">
                    <li>• Hardware: RaspberryPi 4B+</li>
                    <li>• Sensors: Camera v2, Ultrasonic, Buzzer, LED</li>
                    <li>• Processing: YOLO (Ultralytics)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          {/* Arrow from Edge to Fog with animation and label */}
          <div className="z-20 flex flex-col items-center">
            <div className="w-12 flex flex-col items-center justify-center">
              <ArrowRight className="w-6 h-6 text-poster-teal animate-pulse" />
              <span className="text-[8px] text-poster-teal mt-1">Raw Data</span>
            </div>
          </div>
          
          {/* Fog Layer */}
          <div className="flex flex-col items-center z-10">
            <div className="bg-poster-darkgray p-3 rounded-lg border border-white/10 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-poster-teal text-poster-background text-xs px-2 py-0.5 rounded-full">
                Fog Node
              </div>
              <div className="space-y-1 text-xs">
                <p className="text-poster-teal font-medium">Base Station</p>
                <ul className="text-poster-white/80 text-[9px] space-y-0.5">
                  <li>• Hardware: RaspberryPi 4B+</li>
                  <li>• Protocol: WSS, HTTPS, BLE</li>
                  <li>• Security: TLS, JWT, AES-256</li>
                  <li>• Processing: Local image analysis</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Arrow from Fog to Cloud with animation and label */}
          <div className="z-20 flex flex-col items-center">
            <div className="w-12 flex flex-col items-center justify-center">
              <ArrowRight className="w-6 h-6 text-poster-teal animate-pulse" />
              <span className="text-[8px] text-poster-teal mt-1">Processed Data</span>
            </div>
          </div>
          
          {/* Cloud Layer */}
          <div className="flex flex-col items-center z-10">
            <div className="bg-poster-darkgray p-3 rounded-lg border border-white/10 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-poster-teal text-poster-background text-xs px-2 py-0.5 rounded-full">
                Cloud Layer
              </div>
              <div className="space-y-1 text-xs">
                <p className="text-poster-teal font-medium">Platform: OpenShift</p>
                <ul className="text-poster-white/80 text-[9px] space-y-0.5">
                  <li>• Protocol: WSS, HTTPS</li>
                  <li>• Security: TLS, AES-256, JWT</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Arrow from Cloud to App with animation and label */}
          <div className="z-20 flex flex-col items-center">
            <div className="w-12 flex flex-col items-center justify-center">
              <ArrowRight className="w-6 h-6 text-poster-teal animate-pulse" />
              <span className="text-[8px] text-poster-teal mt-1">Insights</span>
            </div>
          </div>
          
          {/* App Layer */}
          <div className="flex flex-col items-center z-10">
            <div className="bg-poster-darkgray p-3 rounded-lg border border-white/10 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-poster-teal text-poster-background text-xs px-2 py-0.5 rounded-full">
                Application Layer
              </div>
              <div className="space-y-1 text-xs">
                <p className="text-poster-teal font-medium">Kivy Mobile → Android</p>
                <ul className="text-poster-white/80 text-[9px] space-y-0.5">
                  <li>• UI: Kivymd, Kivyuix</li>
                  <li>• Protocol: WSS, HTTPS, BLE, WebRTC</li>
                  <li>• Security: TLS, OAuth, JWT, MFA, HMAC, DTLS</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* Data Flow Indicators */}
        <div className="relative h-8 w-full">
          <div className="absolute top-0 left-0 right-0 h-full flex justify-around">
            {/* Data Flow Indicators */}
            <div className="data-flow-indicator flex items-center">
              <RefreshCcw className="w-4 h-4 text-poster-teal mr-1" />
              <span className="text-[10px] text-poster-teal">Real-time data flow</span>
            </div>
            <div className="data-flow-indicator flex items-center">
              <Lock className="w-4 h-4 text-poster-teal mr-1" />
              <span className="text-[10px] text-poster-teal">End-to-end encryption</span>
            </div>
            <div className="data-flow-indicator flex items-center">
              <Database className="w-4 h-4 text-poster-teal mr-1" />
              <span className="text-[10px] text-poster-teal">Secure storage</span>
            </div>
            <div className="data-flow-indicator flex items-center">
              <Wifi className="w-4 h-4 text-poster-teal mr-1" />
              <span className="text-[10px] text-poster-teal">Multi-protocol comms</span>
            </div>
          </div>
        </div>
        
        {/* Security & Communication Overview */}
        <div className="grid grid-cols-2 gap-4 mt-2">
          <div className="bg-poster-darkgray/60 p-2 rounded-lg border border-white/5">
            <div className="flex items-center mb-1">
              <Lock className="w-4 h-4 text-poster-teal mr-2" />
              <h5 className="text-sm text-poster-white font-medium">Security</h5>
            </div>
            <ul className="text-[9px] text-poster-white/70 space-y-0.5 pl-2">
              <li>• End-to-end encryption (AES-256)</li>
              <li>• TLS, JWT, OAuth, MFA</li>
              <li>• DTLS for WebRTC</li>
            </ul>
          </div>
          
          <div className="bg-poster-darkgray/60 p-2 rounded-lg border border-white/5">
            <div className="flex items-center mb-1">
              <Wifi className="w-4 h-4 text-poster-teal mr-2" />
              <h5 className="text-sm text-poster-white font-medium">Communication</h5>
            </div>
            <ul className="text-[9px] text-poster-white/70 space-y-0.5 pl-2">
              <li>• BLE [GAP, GATT, ATT, L2CAP]</li>
              <li>• WSS, HTTPS</li>
              <li>• WebRTC [UDP + RTP]</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnicalDeepDive;
