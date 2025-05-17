
import React from 'react';
import { InfoIcon } from 'lucide-react';

interface HeaderProps {
  toggleInfoModal: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleInfoModal }) => {
  return (
    <header className="flex flex-col p-4 bg-koinz-darkNavy">
      <div className="flex items-center">
        <img 
          src="/lovable-uploads/9f81926c-52c2-4f70-901f-58251a46bd4e.png" 
          alt="KoinX" 
          className="h-8" 
        />
      </div>
      
      <div className="flex items-center mt-4">
        <h2 className="text-xl font-semibold mr-2">Tax Harvesting</h2>
        <button className="text-sm text-blue-400 hover:underline">
          How it works?
        </button>
      </div>
      
      <button 
        onClick={toggleInfoModal}
        className="flex items-center text-koinz-gray hover:text-white transition-colors mt-2"
      >
        <InfoIcon className="h-5 w-5 mr-1" />
        <span className="text-sm">Important Notes & Disclaimers</span>
      </button>
    </header>
  );
};

export default Header;
