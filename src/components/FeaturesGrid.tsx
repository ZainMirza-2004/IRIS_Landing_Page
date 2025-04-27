
import { Package, Bell, Shield, Smartphone, Droplets, Network, Moon, Cloud, Fingerprint, Box } from "lucide-react";

type FeatureCardProps = {
  icon: React.ReactNode;
  title: string;
  detail: string;
  complexity: string;
  technology: string;
  courseLink: string;
}

const FeatureCard = ({ icon, title, detail, complexity, technology, courseLink }: FeatureCardProps) => {
  return (
    <div className="feature-card group relative backdrop-blur-sm border border-white/5">
      <div className="flex flex-col items-center">
        <div className="mb-2 text-poster-teal transform transition-all duration-300 group-hover:scale-110 group-hover:text-poster-white">
          {icon}
        </div>
        <h4 className="text-poster-white text-sm font-medium mb-1.5 tracking-tight">{title}</h4>
        <p className="text-poster-spacegray text-xs tracking-wide">{detail}</p>
        
        <div className="absolute -bottom-24 left-0 right-0 bg-gradient-to-b from-poster-darkgray/95 to-poster-darkgray border border-poster-teal/20 p-3 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg shadow-poster-teal/5 z-10 transform translate-y-2 group-hover:translate-y-0 pointer-events-none">
          <div className="flex flex-col space-y-1.5">
            <div className="flex justify-between items-center">
              <span className="text-[10px] text-poster-spacegray">Complexity:</span>
              <span className="text-[10px] text-poster-teal font-medium">{complexity}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-[10px] text-poster-spacegray">Tech:</span>
              <span className="text-[10px] text-poster-white/80">{technology}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-[10px] text-poster-spacegray">Course:</span>
              <span className="text-[10px] text-poster-teal">{courseLink}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const FeaturesGrid = () => {
  const features = [
    { 
      icon: <Network size={28} strokeWidth={1.5} />, 
      title: "Motion Detection", 
      detail: "99% accuracy",
      complexity: "Medium",
      technology: "PIR + ML Model",
      courseLink: "CSE3015"
    },
    { 
      icon: <Fingerprint size={28} strokeWidth={1.5} />, 
      title: "Smart Lock", 
      detail: "TLS 1.3 encryption",
      complexity: "High",
      technology: "Secure Enclave",
      courseLink: "CSE3050"
    },
    { 
      icon: <Cloud size={28} strokeWidth={1.5} />, 
      title: "Cloud Storage", 
      detail: "AES-256",
      complexity: "Medium",
      technology: "AWS IoT Core",
      courseLink: "CSE2010"
    },
    { 
      icon: <Moon size={28} strokeWidth={1.5} />, 
      title: "Night Vision", 
      detail: "4K IR camera",
      complexity: "High",
      technology: "IR + Image Processing",
      courseLink: "CSE3015"
    },
    { 
      icon: <Package size={28} strokeWidth={1.5} />, 
      title: "Package Alerts", 
      detail: "TensorFlow Lite AI",
      complexity: "Very High",
      technology: "TensorFlow, Edge ML",
      courseLink: "CSE3015"
    },
    { 
      icon: <Bell size={28} strokeWidth={1.5} />, 
      title: "Real-Time Alerts", 
      detail: "<3s latency",
      complexity: "Medium",
      technology: "MQTT Protocol",
      courseLink: "CSE2010"
    },
    { 
      icon: <Shield size={28} strokeWidth={1.5} />, 
      title: "Breach Detection", 
      detail: "MFA",
      complexity: "High",
      technology: "Anomaly Detection",
      courseLink: "CSE3050"
    },
    { 
      icon: <Smartphone size={28} strokeWidth={1.5} />, 
      title: "Companion App", 
      detail: "SwiftUI",
      complexity: "High",
      technology: "SwiftUI, React Native",
      courseLink: "CSE3015"
    },
    { 
      icon: <Droplets size={28} strokeWidth={1.5} />, 
      title: "Weatherproof", 
      detail: "IP65 rating",
      complexity: "Medium",
      technology: "Enclosure Design",
      courseLink: "CSE3015"
    },
    { 
      icon: <Box size={28} strokeWidth={1.5} />, 
      title: "Scalable", 
      detail: "Plug-and-play",
      complexity: "Medium",
      technology: "Modular Architecture",
      courseLink: "CSE3015"
    }
  ];

  return (
    <div className="mb-8">
      <h3 className="text-2xl md:text-[32pt] font-bold mb-8 inline-block border-b-4 border-poster-teal text-poster-white tracking-tight">
        Engineered for Intelligence
      </h3>
      
      <div className="grid grid-cols-5 gap-6 relative">
        {features.map((feature, index) => (
          <FeatureCard 
            key={index}
            icon={feature.icon}
            title={feature.title}
            detail={feature.detail}
            complexity={feature.complexity}
            technology={feature.technology}
            courseLink={feature.courseLink}
          />
        ))}
      </div>
      
      <div className="mt-8 text-xs text-poster-white/50 italic text-right">
        <p>Hover over features to view implementation details</p>
      </div>
    </div>
  );
};

export default FeaturesGrid;
