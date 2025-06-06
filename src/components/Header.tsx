
import React, { useState } from 'react';
import { InfoIcon, ChevronDown, ChevronUp } from 'lucide-react';
import InfoModal from './InfoModal';

const Header: React.FC = () => {
  const [showInfoModal, setShowInfoModal] = useState(false);

  const toggleInfoModal = () => {
    setShowInfoModal(!showInfoModal);
  };

  return (
    <div className="flex flex-col">
      {/* Top navbar with logo only - full width */}
      <div className="w-full border-b border-border p-6 bg-white dark:bg-koinz-darkNavy">
        <div className="flex items-center">
          <span className="text-blue-500 text-xl font-bold ml-5">
            <img 
              src="/image/9f81926c-52c2-4f70-901f-58251a46bd4e.png" 
              alt="KoinX" 
              className="h-8" 
            />
          </span>
        </div>
      </div>
      
      {/* Content section */}
      <div className="container py-6 bg-white dark:bg-koinz-navy">
        {/* Tax Harvesting section */}
       <div className="flex items-center space-x-2 mb-6 relative">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">Tax Harvesting</h2>

          {/* Tooltip Button */}
          <div className="relative group">
            <button className="text-sm text-blue-400 hover:underline">
              How it works?
            </button>

            {/* Tooltip Content - Dark blue in light mode, white in dark mode */}
            <div className="absolute z-10 hidden group-hover:block bg-blue-800 dark:bg-white text-white dark:text-gray-800 text-sm px-4 py-3 rounded shadow-lg top-full left-1/2 -translate-x-1/2 mt-3 w-72">
              {/* Arrow */}
              <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-blue-800 dark:bg-white rotate-45 shadow-sm" />

              {/* Bullet Points */}
              <ul className="list-disc pl-5">
                <li>See your capital gains for FY 2024-25 in the left card</li>
                <li>Check boxes for assets you plan on selling to reduce your tax liability</li>
                <li>Instantly see your updated tax liability in the right card</li>
                <li>Pro tip: Experiment with different combinations of your holdings to optimize your tax.</li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Info modal button */}
        <div className="mt-2 w-100 mb-0">
          <button 
            onClick={toggleInfoModal}
           className="flex items-center w-full p-3 border border-gray-300 dark:border-blue-500/30 rounded-lg text-gray-800 dark:text-foreground bg-blue-100 hover:bg-blue-100 dark:bg-card dark:hover:bg-accent transition-colors"
          >
            <div className="flex items-center">
              <InfoIcon className="h-5 w-5 mr-2 text-blue-400" />
              <span>Important Notes & Disclaimers</span>
            </div>
            {showInfoModal ? (
              <ChevronUp className="h-5 w-5 ml-auto" />
            ) : (
              <ChevronDown className="h-5 w-5 ml-auto" />
            )}
          </button>

          {/* Info modal content */}
          {showInfoModal && <InfoModal isOpen={true} onClose={toggleInfoModal} />}
        </div>
      </div>
    </div>
  );
};

export default Header;
