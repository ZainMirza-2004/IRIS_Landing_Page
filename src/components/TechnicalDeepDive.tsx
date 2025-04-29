
import { cn } from "@/lib/utils";
import { RefreshCcw, Lock, Database, Wifi, ArrowRight } from "lucide-react";

const TechnicalDeepDive = ({ className }: { className?: string }) => {
  return (
    <div className={cn("space-y-6", className)}>
      <h3 className="text-2xl md:text-[28pt] font-bold inline-block border-b-4 border-poster-teal text-poster-white tracking-tight mb-4">
        Arch & Data Flow
      </h3>
      
      <div className="bg-poster-darkgray/70 backdrop-blur-sm rounded-lg p-6 border border-white/10">
        {/* Architecture Diagram with Data Flow */}
        <div className="grid grid-cols-2 gap-6 mb-6">
          {/* Edge Layer */}
          <div className="relative bg-poster-darkgray p-5 rounded-lg border border-white/10">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-poster-teal text-poster-background text-xs px-4 py-0.5 rounded-full font-medium">
              Edge Node
            </div>
            
            {/* Sensor Node */}
            <div className="mb-4">
              <h4 className="text-sm font-medium text-poster-teal mb-2">1. Sensor Node</h4>
              <ul className="text-xs text-poster-white/80 space-y-1.5">
                <li>• Hardware: Arduino</li>
                <li>• Sensors: BLE v1, Buzzer, PIR, Loudness, Temp</li>
                <li>• Protocol: BLE [GAP, GATT, ATT, L2CAP]</li>
                <li>• Data Format: Binary</li>
                <li>• Security: AES-128</li>
              </ul>
            </div>
            
            {/* Smart Lock */}
            <div className="mb-4 pl-4">
              <h4 className="text-xs font-medium text-poster-teal mb-1">1.1 Smart Lock</h4>
              <ul className="text-[10px] text-poster-white/80 space-y-1">
                <li>• Hardware: Arduino [BLE, Servo Motor]</li>
                <li>• Protocol: BLE [GAP, GATT, ATT, L2CAP]</li>
                <li>• Security: AES-256, HMAC</li>
              </ul>
            </div>
            
            {/* Door Bell */}
            <div className="pl-4">
              <h4 className="text-xs font-medium text-poster-teal mb-1">1.2 Door Bell</h4>
              <ul className="text-[10px] text-poster-white/80 space-y-1">
                <li>• Hardware: RaspberryPi 4B+</li>
                <li>• Sensors: Pi Camera v2, Ultrasonic, Buzzer, LED</li>
                <li>• Processing: YOLO (Ultralytics)</li>
                <li>• Protocol: WSS, HTTPS, WebRTC [UDP + RTP]</li>
                <li>• Security: TLS, JWT, AES-256, DTLS</li>
              </ul>
            </div>
          </div>
          
          {/* Fog Layer */}
          <div className="relative bg-poster-darkgray p-5 rounded-lg border border-white/10">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-poster-teal text-poster-background text-xs px-4 py-0.5 rounded-full font-medium">
              Fog Node
            </div>
            
            <div className="mb-4 text-xs italic text-poster-teal/70">
              Note: AI Service is not here,<br />
              Image will be processed<br />
              locally [Door Bell]
            </div>
            
            <h4 className="text-sm font-medium text-poster-teal mb-2">Base Station</h4>
            <ul className="text-xs text-poster-white/80 space-y-1.5">
              <li>• Hardware: RaspberryPi 4B+</li>
              <li>• Protocol: WSS, HTTPS, BLE [GAP, GATT, ATT, L2CAP]</li>
              <li>• Security: TLS, JWT, AES-256</li>
            </ul>
          </div>
        </div>
        
        {/* Data Flow indicators */}
        <div className="grid grid-cols-2 gap-6 relative mb-6">
          {/* Left arrow */}
          <div className="flex justify-center">
            <div className="flex items-center">
              <ArrowRight className="w-6 h-6 text-poster-teal" />
              <span className="text-xs text-poster-teal ml-1">Data Flow</span>
            </div>
          </div>
          
          {/* Right arrow */}
          <div className="flex justify-center">
            <div className="flex items-center">
              <ArrowRight className="w-6 h-6 text-poster-teal" />
              <span className="text-xs text-poster-teal ml-1">Data Flow</span>
            </div>
          </div>
        </div>
        
        {/* Second Row - Cloud and Application Layers */}
        <div className="grid grid-cols-2 gap-6">
          {/* Cloud Layer */}
          <div className="relative bg-poster-darkgray p-5 rounded-lg border border-white/10">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-poster-teal text-poster-background text-xs px-4 py-0.5 rounded-full font-medium">
              Cloud Layer
            </div>
            
            <h4 className="text-sm font-medium text-poster-teal mb-2">Platform: OpenShift</h4>
            <ul className="text-xs text-poster-white/80 space-y-1.5">
              <li>• Protocol: WSS, HTTPS</li>
              <li>• Storage: [have to ask David]</li>
              <li>• Security: TLS, AES-256, JWT</li>
            </ul>
          </div>
          
          {/* Application Layer */}
          <div className="relative bg-poster-darkgray p-5 rounded-lg border border-white/10">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-poster-teal text-poster-background text-xs px-4 py-0.5 rounded-full font-medium">
              Application Layer
            </div>
            
            <h4 className="text-sm font-medium text-poster-teal mb-2">Kivy Mobile → Android</h4>
            <ul className="text-xs text-poster-white/80 space-y-1.5">
              <li>• UI: Kivymd, Kivyuix</li>
              <li>• Notification → Push</li>
              <li>• Protocol: WSS, HTTPS, BLE, WebRTC [UDP + RTP]</li>
              <li>• Security: TLS, OAuth, JWT, MFA, HMAC, DTLS</li>
            </ul>
          </div>
        </div>
        
        {/* Data Flow Indicators */}
        <div className="flex justify-around mt-6 px-2">
          <div className="data-flow-indicator flex items-center space-x-1">
            <RefreshCcw className="w-4 h-4 text-poster-teal" />
            <span className="text-xs text-poster-teal">Real-time data</span>
          </div>
          <div className="data-flow-indicator flex items-center space-x-1">
            <Lock className="w-4 h-4 text-poster-teal" />
            <span className="text-xs text-poster-teal">End-to-end encryption</span>
          </div>
          <div className="data-flow-indicator flex items-center space-x-1">
            <Database className="w-4 h-4 text-poster-teal" />
            <span className="text-xs text-poster-teal">Secure storage</span>
          </div>
          <div className="data-flow-indicator flex items-center space-x-1">
            <Wifi className="w-4 h-4 text-poster-teal" />
            <span className="text-xs text-poster-teal">Multi-protocol</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnicalDeepDive;
