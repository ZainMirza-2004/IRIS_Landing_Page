
const TechnicalDeepDive = () => {
  return (
    <div className="mb-8">
      <div className="bg-poster-darkgray bg-opacity-50 rounded-lg p-6">
        <h3 className="text-xl font-bold mb-4 text-poster-white">Architecture Diagram</h3>
        
        <div className="flex items-center justify-between mb-6">
          <div className="flex flex-col items-center">
            <div className="bg-poster-darkgray p-2 rounded">
              <p className="text-poster-teal font-medium">Edge Layer</p>
              <p className="text-poster-white text-xs">Arduino (PIR)</p>
              <p className="text-poster-spacegray text-xs">BLE</p>
            </div>
          </div>
          
          <div className="text-poster-teal">→</div>
          
          <div className="flex flex-col items-center">
            <div className="bg-poster-darkgray p-2 rounded">
              <p className="text-poster-teal font-medium">Fog Layer</p>
              <p className="text-poster-white text-xs">Raspberry Pi</p>
              <p className="text-poster-spacegray text-xs">Wi-Fi</p>
            </div>
          </div>
          
          <div className="text-poster-teal">→</div>
          
          <div className="flex flex-col items-center">
            <div className="bg-poster-darkgray p-2 rounded">
              <p className="text-poster-teal font-medium">Cloud</p>
              <p className="text-poster-white text-xs">AWS IoT Core</p>
              <p className="text-poster-spacegray text-xs">AES-256</p>
            </div>
          </div>
          
          <div className="text-poster-teal">→</div>
          
          <div className="flex flex-col items-center">
            <div className="bg-poster-darkgray p-2 rounded">
              <p className="text-poster-teal font-medium">App</p>
              <p className="text-poster-white text-xs">iOS/Android</p>
              <p className="text-poster-spacegray text-xs">MQTT</p>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center space-x-4">
          <div className="bg-poster-darkgray px-3 py-1 rounded-full">
            <span className="text-poster-white text-xs">CSE3015 (IoT Systems)</span>
          </div>
          <div className="bg-poster-darkgray px-3 py-1 rounded-full">
            <span className="text-poster-white text-xs">CSE3050 (Security)</span>
          </div>
          <div className="bg-poster-darkgray px-3 py-1 rounded-full">
            <span className="text-poster-white text-xs">CSE2010 (Networks)</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnicalDeepDive;
