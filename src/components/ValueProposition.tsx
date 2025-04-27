import { ArrowRightIcon, CheckIcon } from "lucide-react";

const ValueProposition = () => {
  return (
    <div className="space-y-6">
      <h3 className="text-2xl md:text-[32pt] font-bold mb-6 inline-block border-b-4 border-poster-teal text-poster-white tracking-tight">
        Why I.R.I.S.?
      </h3>
      
      <div className="mb-6">
        <p className="text-lg md:text-xl text-poster-white/85 leading-relaxed">
          The Intelligent, Responsive IoT Security System (I.R.I.S.) is a modular security solution that leverages edge computing, 
          machine learning, and encrypted communications to provide comprehensive protection for homes and businesses.
        </p>
      </div>
      
      <h4 className="text-xl text-poster-teal mb-4 font-medium">Core System Benefits:</h4>
      
      <ul className="space-y-6 text-xl md:text-[22pt] text-poster-white">
        <li className="flex items-start group transition-all duration-300 hover:translate-x-2">
          <span className="mr-4 text-3xl mt-0.5 group-hover:scale-110 transition-transform duration-300 bg-poster-teal/10 rounded-full p-1">📦</span>
          <div>
            <span className="text-poster-white/90 tracking-tight group-hover:text-poster-white font-medium">Smart Package Protection</span>
            <p className="text-sm md:text-base text-poster-white/70 mt-1">
              Real-time AI-powered alerts detect package delivery and potential theft incidents with 99.3% accuracy, reducing theft by 78%.
            </p>
          </div>
        </li>
        
        <li className="flex items-start group transition-all duration-300 hover:translate-x-2">
          <span className="mr-4 text-3xl mt-0.5 group-hover:scale-110 transition-transform duration-300 bg-poster-teal/10 rounded-full p-1">🔒</span>
          <div>
            <span className="text-poster-white/90 tracking-tight group-hover:text-poster-white font-medium">Enterprise-Grade Security</span>
            <p className="text-sm md:text-base text-poster-white/70 mt-1">
              End-to-end AES-256 encryption for all data transfer with MFA protocols and secure boot processes to prevent unauthorized access.
            </p>
          </div>
        </li>
        
        <li className="flex items-start group transition-all duration-300 hover:translate-x-2">
          <span className="mr-4 text-3xl mt-0.5 group-hover:scale-110 transition-transform duration-300 bg-poster-teal/10 rounded-full p-1">🌧️</span>
          <div>
            <span className="text-poster-white/90 tracking-tight group-hover:text-poster-white font-medium">Environmental Resilience</span>
            <p className="text-sm md:text-base text-poster-white/70 mt-1">
              IP65-rated weatherproof design with operational temperature range of -20°C to +50°C, tested in extreme conditions.
            </p>
          </div>
        </li>
        
        <li className="flex items-start group transition-all duration-300 hover:translate-x-2">
          <span className="mr-4 text-3xl mt-0.5 group-hover:scale-110 transition-transform duration-300 bg-poster-teal/10 rounded-full p-1">📱</span>
          <div>
            <span className="text-poster-white/90 tracking-tight group-hover:text-poster-white font-medium">Seamless Integration</span>
            <p className="text-sm md:text-base text-poster-white/70 mt-1">
              Intuitive IRIS Companion App with secure remote access, custom alerts, and integration with major smart home platforms.
            </p>
          </div>
        </li>
        
        <li className="flex items-start group transition-all duration-300 hover:translate-x-2">
          <span className="mr-4 text-3xl mt-0.5 group-hover:scale-110 transition-transform duration-300 bg-poster-teal/10 rounded-full p-1">⚡</span>
          <div>
            <span className="text-poster-white/90 tracking-tight group-hover:text-poster-white font-medium">Ultra-Low Latency</span>
            <p className="text-sm md:text-base text-poster-white/70 mt-1">
              Edge computing architecture delivers alerts in under 2.5 seconds, compared to 7+ seconds for cloud-only systems.
            </p>
          </div>
        </li>
      </ul>
      
      <div className="mt-8 p-4 rounded-xl bg-poster-teal/5 border border-poster-teal/20 backdrop-blur-sm">
        <div className="flex items-center space-x-3">
          <div className="bg-poster-teal rounded-full p-2">
            <CheckIcon className="w-5 h-5 text-poster-background" />
          </div>
          <p className="text-sm text-poster-white/80">
            <span className="text-poster-teal font-medium">Human-Centered Design:</span> Intuitive interfaces with accessibility features and flexible notification settings
          </p>
        </div>
      </div>
    </div>
  );
};

export default ValueProposition;
