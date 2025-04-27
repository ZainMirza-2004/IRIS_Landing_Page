
import PosterHeader from "@/components/PosterHeader";
import CoreVisual from "@/components/CoreVisual";
import ValueProposition from "@/components/ValueProposition";
import FeaturesGrid from "@/components/FeaturesGrid";
import TechnicalDeepDive from "@/components/TechnicalDeepDive";
import VisualAssets from "@/components/VisualAssets";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-poster-background p-4 md:p-8">
      <div className="poster-container w-full max-w-7xl aspect-[1/1.414] overflow-auto p-8 border border-poster-spacegray/20 shadow-xl shadow-black/20 rounded-sm">
        {/* Project Title & Description */}
        <PosterHeader />
        
        {/* Core Visual Representation */}
        <CoreVisual />
        
        {/* Value Proposition & Features Grid */}
        <div className="grid grid-cols-2 gap-10 mb-10">
          <ValueProposition />
          <FeaturesGrid />
        </div>
        
        {/* Technical Architecture & Data Flow */}
        <TechnicalDeepDive />
        
        {/* Implementation Results */}
        <VisualAssets />
        
        {/* Footer with additional information */}
        <div className="mt-10 pt-6 border-t border-poster-spacegray/20 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-poster-teal to-poster-blue flex items-center justify-center">
              <span className="text-white font-bold">IR</span>
            </div>
            <div>
              <p className="text-poster-white text-sm font-medium">I.R.I.S. Project</p>
              <p className="text-poster-spacegray text-xs">CSE3015 - IoT Systems</p>
            </div>
          </div>
          
          <div className="flex space-x-4">
            <div className="py-1 px-3 rounded-lg bg-poster-darkgray/60 backdrop-blur-sm border border-white/5">
              <p className="text-poster-white/70 text-xs">Created: 2025-04</p>
            </div>
            <div className="py-1 px-3 rounded-lg bg-poster-darkgray/60 backdrop-blur-sm border border-white/5">
              <p className="text-poster-white/70 text-xs">Version: 2.1</p>
            </div>
            <div className="py-1 px-3 rounded-lg bg-gradient-to-r from-poster-teal/20 to-poster-blue/20 backdrop-blur-sm border border-white/5">
              <p className="text-poster-teal text-xs">github.com/iris-project</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
