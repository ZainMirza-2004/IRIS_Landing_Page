
const TechnicalDeepDive = () => {
  return (
    <div className="mb-8">
      <h3 className="text-2xl md:text-[32pt] font-bold mb-6 inline-block border-b-4 border-poster-teal text-poster-white tracking-tight">
        System Architecture & Data Flow
      </h3>
      
      <div className="bg-poster-darkgray/70 backdrop-blur-sm rounded-lg p-6 border border-white/10">
        <div className="flex items-center justify-between mb-8 relative">
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
                  <span>Arduino (PIR, Camera)</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-poster-spacegray mr-3">Protocol:</span>
                  <span>BLE 5.0</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-poster-spacegray mr-3">Data Format:</span>
                  <span>Binary, JSON</span>
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
                  <span>Raspberry Pi 4B</span>
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
                  <span>iOS/Android</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-poster-spacegray mr-3">UI:</span>
                  <span>SwiftUI, Material You</span>
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
        
        <div className="mt-8">
          <h4 className="text-lg text-poster-white font-medium mb-4">Application of Course Concepts</h4>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-poster-darkgray/50 backdrop-blur-sm p-3 rounded-lg border border-white/5">
              <h5 className="text-poster-teal text-sm font-medium mb-2">CSE3015 (IoT Systems)</h5>
              <p className="text-xs text-poster-white/80">Applied concepts include sensor fusion, edge computing, power efficiency protocols, and embedded systems programming for real-time processing.</p>
            </div>
            <div className="bg-poster-darkgray/50 backdrop-blur-sm p-3 rounded-lg border border-white/5">
              <h5 className="text-poster-teal text-sm font-medium mb-2">CSE3050 (Security)</h5>
              <p className="text-xs text-poster-white/80">Implemented multi-layer security using AES encryption, secure boot, certificate-based authentication, and MFA for user access control.</p>
            </div>
            <div className="bg-poster-darkgray/50 backdrop-blur-sm p-3 rounded-lg border border-white/5">
              <h5 className="text-poster-teal text-sm font-medium mb-2">CSE2010 (Networks)</h5>
              <p className="text-xs text-poster-white/80">Utilized BLE for low-power edge communications, Wi-Fi for fog layer, and MQTT protocol for efficient cloud messaging with QoS guarantees.</p>
            </div>
          </div>
        </div>
        
        <div className="mt-6 p-4 rounded-lg bg-gradient-to-r from-poster-teal/10 to-poster-blue/10 border border-poster-teal/20">
          <h4 className="text-sm text-poster-teal font-medium mb-2">Critical Design Decisions</h4>
          <ul className="text-xs text-poster-white/80 space-y-1">
            <li>• Edge processing for sensitive data minimizes cloud exposure and reduces latency</li>
            <li>• Multi-layered security approach with different encryption levels based on data sensitivity</li>
            <li>• Modular architecture allows for component upgrades without total system replacement</li>
            <li>• Human-centered design prioritizes intuitive controls and meaningful alerts</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TechnicalDeepDive;
