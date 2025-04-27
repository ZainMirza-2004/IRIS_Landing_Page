
const VisualAssets = () => {
  return (
    <div className="grid grid-cols-3 gap-6">
      <div className="bg-poster-darkgray rounded-lg p-4">
        <h4 className="text-poster-white text-lg font-medium mb-2">Prototype</h4>
        <div className="bg-black h-32 rounded flex items-center justify-center">
          <div className="bg-poster-darkgray w-16 h-10 rounded relative">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-poster-teal rounded-full"></div>
          </div>
        </div>
      </div>
      
      <div className="bg-poster-darkgray rounded-lg p-4">
        <h4 className="text-poster-white text-lg font-medium mb-2">App Screenshot</h4>
        <div className="flex justify-center">
          <div className="bg-black w-16 h-32 rounded-2xl border-4 border-poster-darkgray relative">
            <div className="absolute top-0 w-6 h-3 bg-poster-darkgray rounded-b-lg left-1/2 transform -translate-x-1/2"></div>
            <div className="p-1">
              <div className="bg-poster-teal h-10 rounded mb-1"></div>
              <div className="bg-poster-darkgray h-3 rounded mb-1"></div>
              <div className="bg-poster-darkgray h-3 rounded mb-1"></div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-poster-darkgray rounded-lg p-4">
        <h4 className="text-poster-white text-lg font-medium mb-2">Alert Latency</h4>
        <div className="h-32 flex items-end space-x-2 pt-4">
          <div className="flex-1 flex flex-col items-center">
            <div className="bg-poster-teal h-16 w-full rounded-t"></div>
            <p className="text-poster-white text-xs mt-1">I.R.I.S</p>
          </div>
          <div className="flex-1 flex flex-col items-center">
            <div className="bg-poster-spacegray h-24 w-full rounded-t"></div>
            <p className="text-poster-white text-xs mt-1">Others</p>
          </div>
        </div>
        <div className="text-center mt-2">
          <p className="text-poster-white text-sm">Alert Latency: 2.5s avg.</p>
        </div>
      </div>
    </div>
  );
};

export default VisualAssets;
