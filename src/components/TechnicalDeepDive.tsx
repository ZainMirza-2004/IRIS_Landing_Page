
import { cn } from "@/lib/utils";

const TechnicalDeepDive = ({ className }: { className?: string }) => {
  return (
    <div className={cn("space-y-8", className)}>
      <h3 className="text-2xl md:text-[32pt] font-bold inline-block border-b-4 border-poster-teal text-poster-white tracking-tight mb-6">
        System Architecture & Data Flow
      </h3>
      
      <div className="bg-poster-darkgray/70 backdrop-blur-sm rounded-lg p-8 border border-white/10 space-y-8">
        <div className="flex items-center justify-between relative">
          {/* Connecting lines */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-poster-teal via-poster-blue to-poster-teal opacity-20 transform -translate-y-1/2 z-0"></div>
          
          {/* Edge Layer */}
          <div className="flex flex-col items-center z-10">
            <div className="bg-poster-darkgray p-4 rounded-lg border border-white/10 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-poster-teal text-poster-background text-xs px-2 py-0.5 rounded-full">
                Edge Layer
              </div>
              <p className="text-poster-teal font-medium text-center mb-2">Sensing & Actuation</p>
              <ul className="text-poster-white text-xs space-y-1.5">
                <li className="flex justify-between">
                  <span className="text-poster-spacegray mr-3">Hardware:</span>
                  <span>Raspberry Pi 4 (4GB)</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-poster-spacegray mr-3">Interface:</span>
                  <span>GrovePi Plus</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-poster-spacegray mr-3">Protocol:</span>
                  <span>BLE 5.0</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-poster-spacegray mr-3">Security:</span>
                  <span>AES-128</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Fog Layer */}
          <div className="flex flex-col items-center z-10">
            <div className="bg-poster-darkgray p-4 rounded-lg border border-white/10 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-poster-teal text-poster-background text-xs px-2 py-0.5 rounded-full">
                Fog Layer
              </div>
              <p className="text-poster-teal font-medium text-center mb-2">Processing & AI</p>
              <ul className="text-poster-white text-xs space-y-1.5">
                <li className="flex justify-between">
                  <span className="text-poster-spacegray mr-3">Hardware:</span>
                  <span>Arduino Expansion Shield</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-poster-spacegray mr-3">Protocol:</span>
                  <span>Wi-Fi 6, 802.11ax</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-poster-spacegray mr-3">Processing:</span>
                  <span>TensorFlow Lite</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-poster-spacegray mr-3">Security:</span>
                  <span>TLS 1.3, MFA</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Cloud Layer */}
          <div className="flex flex-col items-center z-10">
            <div className="bg-poster-darkgray p-4 rounded-lg border border-white/10 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-poster-teal text-poster-background text-xs px-2 py-0.5 rounded-full">
                Cloud Layer
              </div>
              <p className="text-poster-teal font-medium text-center mb-2">Data Analytics</p>
              <ul className="text-poster-white text-xs space-y-1.5">
                <li className="flex justify-between">
                  <span className="text-poster-spacegray mr-3">Platform:</span>
                  <span>AWS IoT Core</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-poster-spacegray mr-3">Protocol:</span>
                  <span>MQTT, REST API</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-poster-spacegray mr-3">Storage:</span>
                  <span>DynamoDB, S3</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-poster-spacegray mr-3">Security:</span>
                  <span>AES-256, IAM</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* App Layer */}
          <div className="flex flex-col items-center z-10">
            <div className="bg-poster-darkgray p-4 rounded-lg border border-white/10 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-poster-teal text-poster-background text-xs px-2 py-0.5 rounded-full">
                Application Layer
              </div>
              <p className="text-poster-teal font-medium text-center mb-2">Human Interaction</p>
              <ul className="text-poster-white text-xs space-y-1.5">
                <li className="flex justify-between">
                  <span className="text-poster-spacegray mr-3">Platform:</span>
                  <span>Python-Kivy</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-poster-spacegray mr-3">UI:</span>
                  <span>Material Design</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-poster-spacegray mr-3">Notifications:</span>
                  <span>Push, SMS</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-poster-spacegray mr-3">Security:</span>
                  <span>Biometric, OAuth 2.0</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="space-y-6">
          <div className="mt-8 space-y-4">
            <h4 className="text-lg text-poster-white font-medium">Critical Design Decisions</h4>
            <ul className="text-xs text-poster-white/80 space-y-2">
              <li>• Edge processing for sensitive data minimizes cloud exposure and reduces latency</li>
              <li>• Multi-layered security approach with different encryption levels based on data sensitivity</li>
              <li>• Modular architecture allows for component upgrades without total system replacement</li>
              <li>• Human-centered design prioritizes intuitive controls and meaningful alerts</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnicalDeepDive;
