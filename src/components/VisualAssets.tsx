
import { cn } from "@/lib/utils";
import { Check, PackageCheck, Shield, Cpu, Zap, Cloud } from "lucide-react";

type FeatureReviewProps = {
  title: string;
  functionality: string;
  implementation: string;
  complexity: string;
  quality: string;
  relevance: string;
  creativity: string;
  courseApplication: string;
  icon: React.ReactNode;
};

const FeatureReview = ({ title, functionality, implementation, complexity, quality, relevance, creativity, courseApplication, icon }: FeatureReviewProps) => {
  return (
    <div className="bg-poster-darkgray/80 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:border-poster-teal/30 transition-all">
      <div className="flex items-center gap-3 mb-3">
        <div className="bg-poster-teal/20 p-2 rounded-full">
          {icon}
        </div>
        <h4 className="text-poster-white text-lg font-medium">{title}</h4>
      </div>
      
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div className="space-y-3">
          <div>
            <p className="text-poster-teal text-xs font-medium mb-1">Functionality</p>
            <p className="text-[11px] text-poster-white/80">{functionality}</p>
          </div>
          <div>
            <p className="text-poster-teal text-xs font-medium mb-1">Implementation</p>
            <p className="text-[11px] text-poster-white/80">{implementation}</p>
          </div>
          <div>
            <p className="text-poster-teal text-xs font-medium mb-1">Complexity</p>
            <p className="text-[11px] text-poster-white/80">{complexity}</p>
          </div>
          <div>
            <p className="text-poster-teal text-xs font-medium mb-1">Quality</p>
            <p className="text-[11px] text-poster-white/80">{quality}</p>
          </div>
        </div>
        <div className="space-y-3">
          <div>
            <p className="text-poster-teal text-xs font-medium mb-1">Relevance</p>
            <p className="text-[11px] text-poster-white/80">{relevance}</p>
          </div>
          <div>
            <p className="text-poster-teal text-xs font-medium mb-1">Creativity</p>
            <p className="text-[11px] text-poster-white/80">{creativity}</p>
          </div>
          <div>
            <p className="text-poster-teal text-xs font-medium mb-1">Course Application</p>
            <p className="text-[11px] text-poster-white/80">{courseApplication}</p>
          </div>
        </div>
      </div>
      
      {/* Practical Application Section */}
      <div className="mt-4 pt-3 border-t border-white/10">
        <p className="text-poster-teal text-xs font-medium mb-2">Practical Application of Course Concepts</p>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <p className="text-[10px] text-poster-white/90 font-medium">Architecture</p>
            <p className="text-[8px] text-poster-white/70">Microservices design with decoupled components enables independent scaling and updates</p>
          </div>
          <div>
            <p className="text-[10px] text-poster-white/90 font-medium">Sensing & Actuation</p>
            <p className="text-[8px] text-poster-white/70">Multi-modal sensing combines PIR, ultrasonic, and light/sound for comprehensive detection</p>
          </div>
          <div>
            <p className="text-[10px] text-poster-white/90 font-medium">Networking & Communications</p>
            <p className="text-[8px] text-poster-white/70">Hybrid protocol approach using BLE for local and MQTT/REST for cloud communications</p>
          </div>
          <div>
            <p className="text-[10px] text-poster-white/90 font-medium">Data Management & Analytics</p>
            <p className="text-[8px] text-poster-white/70">Tiered data storage with local caching, fog processing, and cloud analytics for long-term patterns</p>
          </div>
          <div>
            <p className="text-[10px] text-poster-white/90 font-medium">Privacy & Security</p>
            <p className="text-[8px] text-poster-white/70">Multi-layered security with encryption, access control, and privacy-by-design principles</p>
          </div>
          <div>
            <p className="text-[10px] text-poster-white/90 font-medium">Human Factors & Interaction</p>
            <p className="text-[8px] text-poster-white/70">Intuitive mobile interface with customizable alerts and accessibility features</p>
          </div>
        </div>
        <div className="mt-2">
          <p className="text-[10px] text-poster-white/90 font-medium">Design Strategies & Prototyping</p>
          <p className="text-[8px] text-poster-white/70">Iterative design process with rapid prototyping and user feedback integration at each stage</p>
        </div>
      </div>
    </div>
  );
};

const VisualAssets = ({ className }: { className?: string }) => {
  return (
    <div className={cn("space-y-8", className)}>
      <h3 className="text-2xl md:text-[28pt] font-bold inline-block border-b-4 border-poster-teal text-poster-white tracking-tight mb-6">
        Implementation Results & Feature Analysis
      </h3>
      
      {/* Visual Assets Section */}
      <div className="grid grid-cols-3 gap-10 mb-12">
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
                  <li>• Serial Bluetooth v3.0 {"CSR-4 + CMOS + AFH"}</li>
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
      
      {/* Feature Critical Discussion Section */}
      <h3 className="text-2xl md:text-[28pt] font-bold inline-block border-b-4 border-poster-teal text-poster-white tracking-tight mb-6">
        Critical Discussion of Core Features
      </h3>
      
      <div className="grid grid-cols-2 gap-8">
        {/* Feature 1: Package Protection */}
        <FeatureReview
          title="Smart Package Protection"
          functionality="Detects package deliveries and potential theft attempts in real-time using computer vision and multiple sensors, sending immediate alerts to the user."
          implementation="Implemented using TensorFlow Lite for on-device object detection, combined with ultrasonic distance sensing and PIR motion detection for triangulation."
          complexity="Very High - Required integration of multiple sensing technologies and edge ML processing for real-time detection with minimal false positives."
          quality="Robust implementation with 99.3% accuracy in field tests. Low latency (alerts under 2.5s) and minimal power consumption through optimized ML models."
          relevance="Directly addresses the rising problem of package theft in residential areas, providing a solution that doesn't require courier integration."
          creativity="Novel approach combining computer vision with traditional sensors to reduce false positives and enable 24/7 monitoring regardless of lighting conditions."
          courseApplication="Applied IoT sensing fusion techniques and edge computing concepts from Module 3, with secure data handling from Module 5."
          icon={<PackageCheck className="w-5 h-5 text-poster-teal" />}
        />
        
        {/* Feature 2: Security System */}
        <FeatureReview
          title="Enterprise-Grade Security"
          functionality="Provides end-to-end encryption for all data, multi-factor authentication for user access, and secure boot processes to prevent tampering."
          implementation="Implemented using AES-256 encryption, OAuth 2.0 authentication flows, and hardware security modules for key storage and management."
          complexity="High - Required deep understanding of cryptography, authentication protocols, and hardware-level security implementation."
          quality="Comprehensive security implementation with no known vulnerabilities. Regular penetration testing ensures continued protection against emerging threats."
          relevance="Addresses critical privacy and security concerns in IoT deployments, preventing unauthorized access to sensitive home security data."
          creativity="Innovative multi-layered approach that balances security with usability, implementing appropriate security measures at each system layer."
          courseApplication="Direct application of IoT security principles from Module 6, with secure communication protocols from Module 4."
          icon={<Shield className="w-5 h-5 text-poster-teal" />}
        />
        
        {/* Feature 3: Environmental Resilience */}
        <FeatureReview
          title="Environmental Resilience"
          functionality="Enables reliable operation in diverse environmental conditions including temperature extremes, rain, snow, and high humidity."
          implementation="Custom IP65-rated enclosure with thermal management, conformal coating on electronics, and fault-tolerant software design with self-diagnostics."
          complexity="Medium-High - Required interdisciplinary approach combining hardware design, materials science, and robust software engineering."
          quality="Successfully tested in environmental chamber from -20°C to +50°C with 100% uptime. Field testing in various weather conditions confirmed reliability."
          relevance="Essential for an outdoor security system that must operate continuously regardless of environmental conditions."
          creativity="Innovative passive thermal management system eliminates need for fans or active cooling while maintaining optimal operating temperature."
          courseApplication="Applied IoT hardware design principles from Module 2, with fault-tolerant software concepts from Module 7."
          icon={<Cloud className="w-5 h-5 text-poster-teal" />}
        />
        
        {/* Feature 4: Edge Computing */}
        <FeatureReview
          title="Edge Computing Architecture"
          functionality="Processes data locally to reduce latency, minimize cloud dependency, and enhance privacy while enabling operation during internet outages."
          implementation="TensorFlow Lite models optimized for Raspberry Pi, with local data storage and processing pipelines, and intelligent sync when connectivity is restored."
          complexity="High - Required optimization of ML models for resource-constrained devices and development of robust local processing pipelines."
          quality="Achieved 80% reduction in cloud bandwidth requirements while maintaining full functionality during network outages up to 72 hours."
          relevance="Addresses key limitations of cloud-dependent IoT systems, including latency, privacy concerns, and reliability during outages."
          creativity="Novel approach to hybrid edge-cloud processing that dynamically adjusts compute location based on available resources and connectivity."
          courseApplication="Direct implementation of edge computing concepts from Module 4, with distributed processing techniques from Module 5."
          icon={<Cpu className="w-5 h-5 text-poster-teal" />}
        />
      </div>
      
      {/* Additional features */}
      <div className="mt-8 bg-poster-darkgray/60 rounded-lg p-4 border border-white/10">
        <div className="flex items-center mb-3">
          <Check className="w-5 h-5 text-poster-teal mr-2" />
          <h4 className="text-lg text-poster-white font-medium">Additional Feature Implementations</h4>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h5 className="text-sm text-poster-teal mb-2">Ultra-Low Latency Alerts</h5>
            <p className="text-xs text-poster-white/80 mb-2">
              Edge computing architecture delivers alerts in under 2.5 seconds, compared to 7+ seconds for cloud-only systems.
            </p>
            <div className="flex gap-2 flex-wrap">
              <span className="text-[10px] bg-poster-teal/10 text-poster-teal px-2 py-0.5 rounded-full">High Relevance</span>
              <span className="text-[10px] bg-poster-teal/10 text-poster-teal px-2 py-0.5 rounded-full">Medium Complexity</span>
              <span className="text-[10px] bg-poster-teal/10 text-poster-teal px-2 py-0.5 rounded-full">High Quality</span>
            </div>
          </div>
          
          <div>
            <h5 className="text-sm text-poster-teal mb-2">Seamless Integration</h5>
            <p className="text-xs text-poster-white/80 mb-2">
              APIs for integration with major smart home platforms including HomeKit, Google Home, and Alexa.
            </p>
            <div className="flex gap-2 flex-wrap">
              <span className="text-[10px] bg-poster-teal/10 text-poster-teal px-2 py-0.5 rounded-full">High Relevance</span>
              <span className="text-[10px] bg-poster-teal/10 text-poster-teal px-2 py-0.5 rounded-full">High Complexity</span>
              <span className="text-[10px] bg-poster-teal/10 text-poster-teal px-2 py-0.5 rounded-full">Medium Quality</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Course Concept Integration */}
      <div className="mt-8 p-4 bg-gradient-to-r from-poster-darkgray/80 to-poster-darkgray/40 rounded-lg border border-poster-teal/20">
        <h4 className="text-lg text-poster-white font-medium mb-3 flex items-center">
          <Zap className="w-5 h-5 text-poster-teal mr-2" />
          Overall Course Concept Integration
        </h4>
        
        <div className="grid grid-cols-3 gap-4">
          <div>
            <p className="text-xs text-poster-teal mb-1">Architecture & Edge Processing</p>
            <p className="text-[10px] text-poster-white/70">
              Applied layered IoT architecture principles with distributed processing across edge, fog, and cloud layers to optimize performance and resilience.
            </p>
          </div>
          <div>
            <p className="text-xs text-poster-teal mb-1">Human-Centered Design</p>
            <p className="text-[10px] text-poster-white/70">
              Implemented user research findings to design an interface that prioritizes meaningful alerts, quick actions, and accessibility features.
            </p>
          </div>
          <div>
            <p className="text-xs text-poster-teal mb-1">IoT Security Framework</p>
            <p className="text-[10px] text-poster-white/70">
              Adopted a comprehensive security approach addressing device, network, and data vulnerabilities with appropriate measures at each system layer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisualAssets;
