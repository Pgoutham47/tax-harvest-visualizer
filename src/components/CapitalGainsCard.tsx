
import React from 'react';

interface GainsData {
  profits: number;
  losses: number;
}

interface CapitalGainsCardProps {
  title: string;
  stcg: GainsData;
  ltcg: GainsData;
  isAfterHarvesting?: boolean;
  savings?: number;
}

const CapitalGainsCard: React.FC<CapitalGainsCardProps> = ({ 
  title, 
  stcg, 
  ltcg, 
  isAfterHarvesting = false,
  savings 
}) => {
  const stcgNet = stcg.profits - stcg.losses;
  const ltcgNet = ltcg.profits - ltcg.losses;
  const totalGains = stcgNet + ltcgNet;
  
  const bgColorClass = isAfterHarvesting ? 'bg-koinz-blue' : 'bg-koinz-darkNavy';
  
  return (
    <div className={`rounded-lg p-6 ${bgColorClass} w-full`}>
      <h3 className="text-xl font-semibold mb-8">{title}</h3>
      
      <div className="grid grid-cols-3 gap-4 mb-3">
        <div></div>
        <div className="text-center text-sm text-koinz-gray">Short-term</div>
        <div className="text-center text-sm text-koinz-gray">Long-term</div>
      </div>
      
      <div className="grid grid-cols-3 gap-4 mb-3 items-center">
        <div className="text-left">Profits</div>
        <div className="text-center text-koinz-green">₹ {stcg.profits.toFixed(0)}</div>
        <div className="text-center text-koinz-green">₹ {ltcg.profits.toFixed(0)}</div>
      </div>
      
      <div className="grid grid-cols-3 gap-4 mb-3 items-center">
        <div className="text-left">Losses</div>
        <div className="text-center text-koinz-red">- ₹ {stcg.losses.toFixed(0)}</div>
        <div className="text-center text-koinz-red">- ₹ {ltcg.losses.toFixed(0)}</div>
      </div>
      
      <div className="grid grid-cols-3 gap-4 mb-8 items-center">
        <div className="text-left">Net Capital Gains</div>
        <div className={`text-center ${stcgNet >= 0 ? 'text-koinz-green' : 'text-koinz-red'}`}>
          {stcgNet >= 0 ? '₹ ' : '- ₹ '}{Math.abs(stcgNet).toFixed(0)}
        </div>
        <div className={`text-center ${ltcgNet >= 0 ? 'text-koinz-green' : 'text-koinz-red'}`}>
          {ltcgNet >= 0 ? '₹ ' : '- ₹ '}{Math.abs(ltcgNet).toFixed(0)}
        </div>
      </div>
      
      <div className="flex items-center justify-between">
        <div className="text-xl">
          {isAfterHarvesting ? 'Effective Capital Gains:' : 'Realised Capital Gains:'}
        </div>
        <div className={`text-2xl font-bold ${totalGains >= 0 ? 'text-koinz-green' : 'text-koinz-red'}`}>
          {totalGains >= 0 ? '₹ ' : '- ₹ '}{Math.abs(totalGains).toFixed(0)}
        </div>
      </div>
      
      {isAfterHarvesting && savings && savings > 0 && (
        <div className="mt-4 flex items-center text-yellow-300">
          <span className="mr-2">🎉</span>
          <span>You are going to save upto ₹ {savings.toFixed(0)}</span>
        </div>
      )}
    </div>
  );
};

export default CapitalGainsCard;
