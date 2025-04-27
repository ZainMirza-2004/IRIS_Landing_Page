
import PosterHeader from "@/components/PosterHeader";
import CoreVisual from "@/components/CoreVisual";
import ValueProposition from "@/components/ValueProposition";
import FeaturesGrid from "@/components/FeaturesGrid";
import TechnicalDeepDive from "@/components/TechnicalDeepDive";
import VisualAssets from "@/components/VisualAssets";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-poster-background p-4 md:p-8">
      <div className="poster-container w-full max-w-7xl aspect-[1/1.414] overflow-auto p-8 border border-poster-spacegray shadow-lg">
        <PosterHeader />
        
        <CoreVisual />
        
        <div className="grid grid-cols-2 gap-8 mb-8">
          <ValueProposition />
          <FeaturesGrid />
        </div>
        
        <TechnicalDeepDive />
        
        <VisualAssets />
      </div>
    </div>
  );
};

export default Index;
