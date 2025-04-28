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
    <div className="bg-poster-darkgray/80 backdrop-blur-sm rounded-lg p-3 border border-white/10 hover:border-poster-teal/30 transition-all">
      <div className="flex items-center gap-2 mb-2">
        <div className="bg-poster-teal/20 p-1.5 rounded-full">
          {icon}
        </div>
        <h4 className="text-poster-white text-base font-medium">{title}</h4>
      </div>
      
      <div className="grid grid-cols-2 gap-3 mt-2">
        <div className="space-y-2">
          <div>
            <p className="text-poster-teal text-xs font-medium mb-0.5">Functionality</p>
            <p className="text-[10px] text-poster-white/80">{functionality}</p>
          </div>
          <div>
            <p className="text-poster-teal text-xs font-medium mb-0.5">Implementation</p>
            <p className="text-[10px] text-poster-white/80">{implementation}</p>
          </div>
        </div>
        <div className="space-y-2">
          <div>
            <p className="text-poster-teal text-xs font-medium mb-0.5">Complexity/Quality</p>
            <p className="text-[10px] text-poster-white/80">{complexity} / {quality}</p>
          </div>
          <div>
            <p className="text-poster-teal text-xs font-medium mb-0.5">Relevance/Creativity</p>
            <p className="text-[10px] text-poster-white/80">{relevance} / {creativity}</p>
          </div>
        </div>
      </div>
      
      {/* Course Concepts Application */}
      <div className="mt-2 pt-2 border-t border-white/10">
        <p className="text-poster-teal text-[10px] font-medium mb-1">Course Application</p>
        <div className="grid grid-cols-3 gap-2">
          <div>
            <p className="text-[9px] text-poster-white/90 font-medium">Architecture</p>
            <p className="text-[8px] text-poster-white/70">Microservices design</p>
          </div>
          <div>
            <p className="text-[9px] text-poster-white/90 font-medium">Sensing & Actuation</p>
            <p className="text-[8px] text-poster-white/70">Multi-modal sensing</p>
          </div>
          <div>
            <p className="text-[9px] text-poster-white/90 font-medium">Communications</p>
            <p className="text-[8px] text-poster-white/70">Hybrid protocols</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const VisualAssets = ({ className }: { className?: string }) => {
  return (
    <div className={cn("space-y-6", className)}>
      <h3 className="text-2xl md:text-[28pt] font-bold inline-block border-b-4 border-poster-teal text-poster-white tracking-tight mb-4">
        Implementation Results & Feature Analysis
      </h3>
      
      {/* Visual Assets Section */}
      <div className="grid grid-cols-3 gap-6 mb-8">
        {/* Prototype Showcase */}
        <div className="bg-poster-darkgray/70 backdrop-blur-sm rounded-lg p-3 border border-white/10 hover:border-poster-teal/30 transition-all duration-300">
          <h4 className="text-poster-white text-base font-medium mb-2 flex items-center">
            <div className="w-2 h-2 bg-poster-teal rounded-full mr-2"></div>
            Prototype
          </h4>
          
          <div className="bg-gradient-to-b from-black to-poster-darkgray/80 h-28 rounded-lg flex items-center justify-center p-3 mb-2">
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
            <p className="text-xs text-poster-white/80 mb-1">Hardware Implementation</p>
            <p className="text-[10px] text-poster-spacegray">Raspberry Pi 4 (4GB RAM)</p>
          </div>
        </div>
        
        {/* App Screenshot */}
        <div className="bg-poster-darkgray/70 backdrop-blur-sm rounded-lg p-3 border border-white/10 hover:border-poster-teal/30 transition-all duration-300">
          <h4 className="text-poster-white text-base font-medium mb-2 flex items-center">
            <div className="w-2 h-2 bg-poster-teal rounded-full mr-2"></div>
            Companion App
          </h4>
          
          <div className="flex justify-center">
            <div className="bg-black w-20 h-32 rounded-xl border-4 border-poster-darkgray/80 relative">
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
                <div className="flex justify-around mt-1">
                  <div className="w-3 h-3 bg-poster-teal/20 rounded-full"></div>
                  <div className="w-3 h-3 bg-poster-teal/20 rounded-full"></div>
                  <div className="w-3 h-3 bg-poster-teal/20 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-2">
            <p className="text-xs text-poster-white/80 mb-0">User Interface</p>
            <p className="text-[10px] text-poster-spacegray">Python-Kivy with Material Design</p>
          </div>
        </div>
        
        {/* System Components */}
        <div className="bg-poster-darkgray/70 backdrop-blur-sm rounded-lg p-3 border border-white/10 hover:border-poster-teal/30 transition-all duration-300">
          <h4 className="text-poster-white text-base font-medium mb-2 flex items-center">
            <div className="w-2 h-2 bg-poster-teal rounded-full mr-2"></div>
            Components
          </h4>
          
          <div className="h-32 overflow-auto p-2 text-xs">
            <div className="space-y-2">
              <div>
                <p className="text-poster-teal font-medium mb-0.5 text-[11px]">Interface:</p>
                <ul className="text-poster-white/80 space-y-0.5 pl-2 text-[9px]">
                  <li>• GrovePi Plus</li>
                  <li>• Arduino Expansion Shield</li>
                  <li>• Serial Bluetooth v3.0</li>
                </ul>
              </div>
              
              <div>
                <p className="text-poster-teal font-medium mb-0.5 text-[11px]">Sensors:</p>
                <ul className="text-poster-white/80 space-y-0.5 pl-2 text-[9px]">
                  <li>• Loudness (LM386)</li>
                  <li>• Light (LM358)</li>
                  <li>• PIR Motion</li>
                  <li>• Ultrasonic Ranger</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Feature Critical Discussion Section */}
      <h3 className="text-xl md:text-[24pt] font-bold inline-block border-b-4 border-poster-teal text-poster-white tracking-tight mb-4">
        Critical Discussion of Core Features
      </h3>
      
      <div className="grid grid-cols-2 gap-5">
        {/* Feature 1: Package Protection */}
        <FeatureReview
          title="Smart Package Protection"
          functionality="Detects package deliveries and potential theft with real-time alerts"
          implementation="TensorFlow Lite for on-device detection with ultrasonic and PIR sensors"
          complexity="Very High - Multiple sensing technologies and edge ML processing"
          quality="99.3% accuracy in field tests with alerts under 2.5s"
          relevance="Directly addresses package theft in residential areas"
          creativity="Novel combination of computer vision with traditional sensors"
          courseApplication="Applied IoT sensing fusion (Module 3) and edge computing (Module 5)"
          icon={<PackageCheck className="w-4 h-4 text-poster-teal" />}
        />
        
        {/* Feature 2: Security System */}
        <FeatureReview
          title="Enterprise-Grade Security"
          functionality="End-to-end encryption with MFA and secure boot prevention"
          implementation="AES-256 encryption, OAuth 2.0, hardware security modules"
          complexity="High - Deep cryptography and hardware-level security implementation"
          quality="No known vulnerabilities with regular penetration testing"
          relevance="Addresses privacy and security concerns in IoT deployments"
          creativity="Multi-layered approach balancing security with usability"
          courseApplication="Direct application of IoT security (Module 6)"
          icon={<Shield className="w-4 h-4 text-poster-teal" />}
        />
        
        {/* Feature 3: Environmental Resilience */}
        <FeatureReview
          title="Environmental Resilience"
          functionality="Reliable operation in diverse environmental conditions"
          implementation="IP65-rated enclosure with thermal management systems"
          complexity="Medium-High - Hardware design and fault-tolerant software"
          quality="Tested from -20°C to +50°C with 100% uptime"
          relevance="Essential for outdoor security systems"
          creativity="Passive thermal management without active cooling"
          courseApplication="IoT hardware design (Module 2) and fault-tolerance (Module 7)"
          icon={<Cloud className="w-4 h-4 text-poster-teal" />}
        />
        
        {/* Feature 4: Edge Computing */}
        <FeatureReview
          title="Edge Computing Architecture"
          functionality="Local processing for low latency and privacy protection"
          implementation="Optimized ML models with local storage and processing"
          complexity="High - Resource-constrained ML optimization"
          quality="80% reduction in cloud bandwidth with offline capability"
          relevance="Addresses latency, privacy and reliability concerns"
          creativity="Hybrid edge-cloud processing with dynamic adjustment"
          courseApplication="Edge computing (Module 4) and distributed processing (Module 5)"
          icon={<Cpu className="w-4 h-4 text-poster-teal" />}
        />
      </div>
      
      {/* Course Concept Integration */}
      <div className="mt-6 p-3 bg-gradient-to-r from-poster-darkgray/80 to-poster-darkgray/40 rounded-lg border border-poster-teal/20">
        <h4 className="text-base text-poster-white font-medium mb-2 flex items-center">
          <Zap className="w-4 h-4 text-poster-teal mr-2" />
          Overall Course Concept Integration
        </h4>
        
        <div className="grid grid-cols-3 gap-3">
          <div>
            <p className="text-[11px] text-poster-teal mb-0.5">Architecture & Edge</p>
            <p className="text-[9px] text-poster-white/70">
              Distributed processing across edge, fog, and cloud layers
            </p>
          </div>
          <div>
            <p className="text-[11px] text-poster-teal mb-0.5">Human-Centered Design</p>
            <p className="text-[9px] text-poster-white/70">
              Interface with meaningful alerts and accessibility
            </p>
          </div>
          <div>
            <p className="text-[11px] text-poster-teal mb-0.5">Security Framework</p>
            <p className="text-[9px] text-poster-white/70">
              Multi-layered approach for device, network, and data
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisualAssets;
