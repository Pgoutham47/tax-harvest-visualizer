
import React from 'react';
import { InfoIcon } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

interface HeaderProps {
  toggleInfoModal: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleInfoModal }) => {
  return (
    <header className="flex items-center justify-between p-4 bg-koinz-darkNavy">
      <div className="flex items-center">
        <h1 className="text-2xl font-bold text-blue-500">KoinZ®</h1>
      </div>
      <div className="flex items-center space-x-4">
        <div className="flex items-center">
          <h2 className="text-xl font-semibold mr-2">Tax Harvesting</h2>
          <Popover>
            <PopoverTrigger asChild>
              <button className="text-sm text-blue-400 hover:underline">
                How it works?
              </button>
            </PopoverTrigger>
            <PopoverContent className="w-80 bg-koinz-darkNavy border border-koinz-gray/20">
              <div className="space-y-2">
                <h3 className="font-medium">Tax Harvesting</h3>
                <p className="text-sm text-muted-foreground">
                  Tax harvesting involves selling assets at a loss to offset capital gains tax liability. 
                  This calculator helps you identify which assets to sell to optimize your tax situation.
                </p>
              </div>
            </PopoverContent>
          </Popover>
        </div>
        <button 
          onClick={toggleInfoModal}
          className="flex items-center text-koinz-gray hover:text-white transition-colors"
        >
          <InfoIcon className="h-5 w-5 mr-1" />
          <span className="text-sm">Important Notes & Disclaimers</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
