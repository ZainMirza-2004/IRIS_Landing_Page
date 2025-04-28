
import { cn } from "@/lib/utils";
import { RefreshCcw, Lock, Database, Wifi, Cpu, Layers, ArrowRight } from "lucide-react";

const TechnicalDeepDive = ({ className }: { className?: string }) => {
  return (
    <div className={cn("space-y-6", className)}>
      <h3 className="text-2xl md:text-[32pt] font-bold inline-block border-b-4 border-poster-teal text-poster-white tracking-tight mb-6">
        System Architecture & Data Flow
      </h3>
      
      <div className="bg-poster-darkgray/70 backdrop-blur-sm rounded-lg p-6 border border-white/10 space-y-6">
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
                Edge Layer
              </div>
              <p className="text-poster-teal font-medium text-center mb-1">Sensing & Actuation</p>
              <ul className="text-poster-white text-xs space-y-1">
                <li className="flex justify-between">
                  <span className="text-poster-spacegray mr-3">Hardware:</span>
                  <span>Raspberry Pi 4</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-poster-spacegray mr-3">Protocol:</span>
                  <span>BLE 5.0</span>
                </li>
              </ul>
              
              {/* Data types collected */}
              <div className="mt-2 pt-1 border-t border-white/10">
                <p className="text-[10px] text-poster-teal mb-1">Data:</p>
                <p className="text-[9px] text-poster-white/70">Motion, Sound, Light, Distance</p>
              </div>
            </div>
          </div>
          
          {/* Arrow from Edge to Fog */}
          <div className="z-20 flex items-center">
            <div className="w-8 relative">
              <div className="absolute top-1/2 left-0 w-8 flex flex-col items-center -translate-y-1/2">
                <ArrowRight className="w-6 h-6 text-poster-teal animate-pulse" />
                <div className="text-[8px] text-poster-teal mt-1">Raw Data</div>
              </div>
            </div>
          </div>
          
          {/* Fog Layer */}
          <div className="flex flex-col items-center z-10">
            <div className="bg-poster-darkgray p-3 rounded-lg border border-white/10 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-poster-teal text-poster-background text-xs px-2 py-0.5 rounded-full">
                Fog Layer
              </div>
              <p className="text-poster-teal font-medium text-center mb-1">Processing & AI</p>
              <ul className="text-poster-white text-xs space-y-1">
                <li className="flex justify-between">
                  <span className="text-poster-spacegray mr-3">Processing:</span>
                  <span>TensorFlow Lite</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-poster-spacegray mr-3">Protocol:</span>
                  <span>Wi-Fi 6</span>
                </li>
              </ul>
              
              {/* Data Analytics */}
              <div className="mt-2 pt-1 border-t border-white/10">
                <p className="text-[10px] text-poster-teal mb-1">Analytics:</p>
                <p className="text-[9px] text-poster-white/70">Classification, Anomaly detection</p>
              </div>
            </div>
          </div>
          
          {/* Arrow from Fog to Cloud */}
          <div className="z-20 flex items-center">
            <div className="w-8 relative">
              <div className="absolute top-1/2 left-0 w-8 flex flex-col items-center -translate-y-1/2">
                <ArrowRight className="w-6 h-6 text-poster-teal animate-pulse" />
                <div className="text-[8px] text-poster-teal mt-1">Processed Data</div>
              </div>
            </div>
          </div>
          
          {/* Cloud Layer */}
          <div className="flex flex-col items-center z-10">
            <div className="bg-poster-darkgray p-3 rounded-lg border border-white/10 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-poster-teal text-poster-background text-xs px-2 py-0.5 rounded-full">
                Cloud Layer
              </div>
              <p className="text-poster-teal font-medium text-center mb-1">Data Analytics</p>
              <ul className="text-poster-white text-xs space-y-1">
                <li className="flex justify-between">
                  <span className="text-poster-spacegray mr-3">Platform:</span>
                  <span>AWS IoT Core</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-poster-spacegray mr-3">Protocol:</span>
                  <span>MQTT</span>
                </li>
              </ul>
              
              {/* Data Storage */}
              <div className="mt-2 pt-1 border-t border-white/10">
                <p className="text-[10px] text-poster-teal mb-1">Processing:</p>
                <p className="text-[9px] text-poster-white/70">Pattern analysis, ML training</p>
              </div>
            </div>
          </div>
          
          {/* Arrow from Cloud to App */}
          <div className="z-20 flex items-center">
            <div className="w-8 relative">
              <div className="absolute top-1/2 left-0 w-8 flex flex-col items-center -translate-y-1/2">
                <ArrowRight className="w-6 h-6 text-poster-teal animate-pulse" />
                <div className="text-[8px] text-poster-teal mt-1">Insights</div>
              </div>
            </div>
          </div>
          
          {/* App Layer */}
          <div className="flex flex-col items-center z-10">
            <div className="bg-poster-darkgray p-3 rounded-lg border border-white/10 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-poster-teal text-poster-background text-xs px-2 py-0.5 rounded-full">
                Application Layer
              </div>
              <p className="text-poster-teal font-medium text-center mb-1">Human Interaction</p>
              <ul className="text-poster-white text-xs space-y-1">
                <li className="flex justify-between">
                  <span className="text-poster-spacegray mr-3">Platform:</span>
                  <span>Python-Kivy</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-poster-spacegray mr-3">Security:</span>
                  <span>Biometric</span>
                </li>
              </ul>
              
              {/* User Interaction */}
              <div className="mt-2 pt-1 border-t border-white/10">
                <p className="text-[10px] text-poster-teal mb-1">Features:</p>
                <p className="text-[9px] text-poster-white/70">Monitoring, Alerts, Controls</p>
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
        
        <div className="space-y-4 mt-2">
          <div className="mt-4 space-y-2">
            <h4 className="text-lg text-poster-white font-medium">Critical Design Decisions</h4>
            <ul className="text-xs text-poster-white/80 grid grid-cols-2 gap-x-4 gap-y-2">
              <li>• Edge processing minimizes cloud exposure</li>
              <li>• Multi-layered security approach</li>
              <li>• Modular architecture for component upgrades</li>
              <li>• Human-centered design for intuitive controls</li>
            </ul>
          </div>
          
          {/* Security & Privacy Techniques */}
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="bg-poster-darkgray/60 p-3 rounded-lg border border-white/5">
              <div className="flex items-center mb-1">
                <Lock className="w-4 h-4 text-poster-teal mr-2" />
                <h5 className="text-sm text-poster-white font-medium">Security</h5>
              </div>
              <ul className="text-[10px] text-poster-white/70 space-y-0.5 pl-2">
                <li>• Hardware security modules</li>
                <li>• End-to-end encryption (AES-256)</li>
                <li>• Certificate authentication</li>
              </ul>
            </div>
            
            <div className="bg-poster-darkgray/60 p-3 rounded-lg border border-white/5">
              <div className="flex items-center mb-1">
                <Cpu className="w-4 h-4 text-poster-teal mr-2" />
                <h5 className="text-sm text-poster-white font-medium">Data Processing</h5>
              </div>
              <ul className="text-[10px] text-poster-white/70 space-y-0.5 pl-2">
                <li>• On-device filtering</li>
                <li>• Hybrid ML model architecture</li>
                <li>• Privacy-preserving analytics</li>
              </ul>
            </div>
          </div>
          
          {/* Network & Communication */}
          <div className="mt-4">
            <div className="flex items-center mb-1">
              <Layers className="w-4 h-4 text-poster-teal mr-2" />
              <h5 className="text-sm text-poster-white font-medium">Network Protocols</h5>
            </div>
            <div className="grid grid-cols-4 gap-2">
              <div className="bg-poster-darkgray/40 p-1.5 rounded-lg text-center">
                <p className="text-[10px] text-poster-teal font-medium">BLE 5.0</p>
                <p className="text-[8px] text-poster-white/70">Edge sensors</p>
              </div>
              <div className="bg-poster-darkgray/40 p-1.5 rounded-lg text-center">
                <p className="text-[10px] text-poster-teal font-medium">Wi-Fi 6</p>
                <p className="text-[8px] text-poster-white/70">Local network</p>
              </div>
              <div className="bg-poster-darkgray/40 p-1.5 rounded-lg text-center">
                <p className="text-[10px] text-poster-teal font-medium">MQTT</p>
                <p className="text-[8px] text-poster-white/70">Cloud messaging</p>
              </div>
              <div className="bg-poster-darkgray/40 p-1.5 rounded-lg text-center">
                <p className="text-[10px] text-poster-teal font-medium">REST API</p>
                <p className="text-[8px] text-poster-white/70">App integration</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnicalDeepDive;
