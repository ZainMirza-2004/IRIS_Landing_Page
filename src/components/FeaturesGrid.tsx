
import { Moon, Box, Bell, Shield, iPhone, Fingerprint, Cloud, Rain, Nodes } from "lucide-react";

type FeatureCardProps = {
  icon: React.ReactNode;
  title: string;
  detail: string;
}

const FeatureCard = ({ icon, title, detail }: FeatureCardProps) => {
  return (
    <div className="feature-card">
      <div className="flex flex-col items-center">
        <div className="mb-2 text-poster-teal">
          {icon}
        </div>
        <h4 className="text-poster-white text-sm font-medium mb-1">{title}</h4>
        <p className="text-poster-spacegray text-xs">{detail}</p>
      </div>
    </div>
  );
};

const FeaturesGrid = () => {
  const features = [
    { icon: <Nodes size={24} />, title: "Motion Detection", detail: "99% accuracy" },
    { icon: <Fingerprint size={24} />, title: "Smart Lock", detail: "TLS 1.3 encryption" },
    { icon: <Cloud size={24} />, title: "Cloud Storage", detail: "AES-256" },
    { icon: <Moon size={24} />, title: "Night Vision", detail: "4K IR camera" },
    { icon: <Box size={24} />, title: "Package Alerts", detail: "TensorFlow Lite AI" },
    { icon: <Bell size={24} />, title: "Real-Time Alerts", detail: "<3s latency" },
    { icon: <Shield size={24} />, title: "Breach Detection", detail: "MFA" },
    { icon: <iPhone size={24} />, title: "Companion App", detail: "SwiftUI" },
    { icon: <Rain size={24} />, title: "Weatherproof", detail: "IP65 rating" },
    { icon: <Nodes size={24} />, title: "Scalable", detail: "Plug-and-play" }
  ];

  return (
    <div className="mb-8">
      <h3 className="text-2xl md:text-[32pt] font-bold mb-6 inline-block border-b-4 border-poster-teal text-poster-white">
        Engineered for Intelligence
      </h3>
      
      <div className="grid grid-cols-5 gap-3">
        {features.map((feature, index) => (
          <FeatureCard 
            key={index}
            icon={feature.icon}
            title={feature.title}
            detail={feature.detail}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturesGrid;
