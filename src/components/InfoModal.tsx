
import React from 'react';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle,
  DialogTrigger,
  DialogClose
} from "@/components/ui/dialog";
import { ChevronDown } from 'lucide-react';

interface InfoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const InfoModal: React.FC<InfoModalProps> = ({ isOpen, onClose }) => {
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="bg-koinz-navy border-koinz-gray/20 max-w-4xl">
        <DialogHeader className="flex flex-row items-center">
          <div className="h-6 w-6 rounded-full bg-blue-600/20 flex items-center justify-center mr-2">
            <ChevronDown className="h-4 w-4 text-blue-400" />
          </div>
          <DialogTitle className="text-lg">Important Notes & Disclaimers</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <ul className="space-y-3 list-disc pl-5 text-sm text-koinz-lightGray">
            <li>Tax-loss harvesting is currently not allowed under Indian tax regulations. Please consult your tax advisor before making any decisions.</li>
            <li>Tax harvesting does not apply to derivatives or futures. These are handled separately as business income under tax rules.</li>
            <li>Price and market value data is fetched from Coingecko, not from individual exchanges. As a result, values may slightly differ from the ones on your exchange.</li>
            <li>Some countries do not have a short-term / long-term bifurcation. For now, we are calculating everything as long-term.</li>
            <li>Only realized losses are considered for harvesting. Unrealized losses in held assets are not counted.</li>
          </ul>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default InfoModal;
