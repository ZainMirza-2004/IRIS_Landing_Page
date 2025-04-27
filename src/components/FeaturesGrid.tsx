
import { Moon, Package, Bell, Shield, Smartphone, Fingerprint, Cloud, Droplets, Network } from "lucide-react";

type FeatureCardProps = {
  icon: React.ReactNode;
  title: string;
  detail: string;
}

const FeatureCard = ({ icon, title, detail }: FeatureCardProps) => {
  return (
    <div className="feature-card group">
      <div className="flex flex-col items-center">
        <div className="mb-3 text-poster-teal transform transition-all duration-300 group-hover:scale-110">
          {icon}
        </div>
        <h4 className="text-poster-white text-sm font-medium mb-2 tracking-tight">{title}</h4>
        <p className="text-poster-spacegray text-xs tracking-wide">{detail}</p>
      </div>
    </div>
  );
};

const FeaturesGrid = () => {
  const features = [
    { icon: <Network size={28} strokeWidth={1.5} />, title: "Motion Detection", detail: "99% accuracy" },
    { icon: <Fingerprint size={28} strokeWidth={1.5} />, title: "Smart Lock", detail: "TLS 1.3 encryption" },
    { icon: <Cloud size={28} strokeWidth={1.5} />, title: "Cloud Storage", detail: "AES-256" },
    { icon: <Moon size={28} strokeWidth={1.5} />, title: "Night Vision", detail: "4K IR camera" },
    { icon: <Package size={28} strokeWidth={1.5} />, title: "Package Alerts", detail: "TensorFlow Lite AI" },
    { icon: <Bell size={28} strokeWidth={1.5} />, title: "Real-Time Alerts", detail: "<3s latency" },
    { icon: <Shield size={28} strokeWidth={1.5} />, title: "Breach Detection", detail: "MFA" },
    { icon: <Smartphone size={28} strokeWidth={1.5} />, title: "Companion App", detail: "SwiftUI" },
    { icon: <Droplets size={28} strokeWidth={1.5} />, title: "Weatherproof", detail: "IP65 rating" },
    { icon: <Network size={28} strokeWidth={1.5} />, title: "Scalable", detail: "Plug-and-play" }
  ];

  return (
    <div className="mb-8">
      <h3 className="text-2xl md:text-[32pt] font-bold mb-8 inline-block border-b-4 border-poster-teal text-poster-white tracking-tight">
        Engineered for Intelligence
      </h3>
      
      <div className="grid grid-cols-5 gap-6">
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
