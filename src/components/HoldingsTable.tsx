
import React, { useState } from 'react';
import { Checkbox } from "@/components/ui/checkbox";
import { Holding } from '@/types';

interface HoldingsTableProps {
  holdings: Holding[];
  selectedHoldings: string[];
  onSelectionChange: (selectedCoins: string[]) => void;
}

const HoldingsTable: React.FC<HoldingsTableProps> = ({ 
  holdings, 
  selectedHoldings, 
  onSelectionChange 
}) => {
  const [showAll, setShowAll] = useState(false);
  
  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      onSelectionChange(holdings.map(holding => holding.coin));
    } else {
      onSelectionChange([]);
    }
  };
  
  const handleSelectHolding = (coin: string, checked: boolean) => {
    if (checked) {
      onSelectionChange([...selectedHoldings, coin]);
    } else {
      onSelectionChange(selectedHoldings.filter(c => c !== coin));
    }
  };
  
  const isAllSelected = holdings.length > 0 && selectedHoldings.length === holdings.length;
  
  // Display only first 4 holdings unless "View All" is clicked
  const displayedHoldings = showAll ? holdings : holdings.slice(0, 4);
  
  return (
    <div className="mt-8">
      <h3 className="text-xl font-semibold mb-4">Holdings</h3>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead className="bg-koinz-darkNavy">
            <tr>
              <th className="p-4 text-left">
                <Checkbox 
                  checked={isAllSelected} 
                  onCheckedChange={(checked) => handleSelectAll(!!checked)} 
                />
              </th>
              <th className="p-4 text-left">Asset</th>
              <th className="p-4 text-right">
                Holdings
                <div className="text-xs text-koinz-gray">Current Market Rate</div>
              </th>
              <th className="p-4 text-right">Total Current Value</th>
              <th className="p-4 text-right">Short-term</th>
              <th className="p-4 text-right">Long-Term</th>
              <th className="p-4 text-right">Amount to Sell</th>
            </tr>
          </thead>
          <tbody>
            {displayedHoldings.map((holding) => {
              const isSelected = selectedHoldings.includes(holding.coin);
              const totalValue = holding.totalHolding * holding.currentPrice;
              
              return (
                <tr 
                  key={holding.coin}
                  className={`border-b border-koinz-gray/10 ${isSelected ? 'bg-blue-500/5' : ''} hover:bg-koinz-gray/5`}
                >
                  <td className="p-4">
                    <Checkbox 
                      checked={isSelected}
                      onCheckedChange={(checked) => handleSelectHolding(holding.coin, !!checked)}
                    />
                  </td>
                  <td className="p-4">
                    <div className="flex items-center">
                      <div className="w-4 mr-2 text-center">•</div>
                      <img 
                        src={holding.logo} 
                        alt={holding.coin} 
                        className="w-8 h-8 rounded-full mr-3"
                      />
                      <div>
                        <div className="font-medium">{holding.coinName}</div>
                        <div className="text-xs text-koinz-gray">{holding.coin}</div>
                      </div>
                    </div>
                  </td>
                  <td className="p-4 text-right">
                    <div>{holding.totalHolding.toFixed(holding.coin === "BTC" || holding.coin === "ETH" ? 3 : 2)} {holding.coin}</div>
                    <div className="text-xs text-koinz-gray">${holding.currentPrice.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}/{holding.coin}</div>
                  </td>
                  <td className="p-4 text-right">
                    ${totalValue.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}
                  </td>
                  <td className="p-4 text-right">
                    <div className={holding.stcg.gain >= 0 ? 'text-koinz-green' : 'text-koinz-red'}>
                      {holding.stcg.gain !== 0 ? `${holding.stcg.gain >= 0 ? '+' : '-'}$${Math.abs(holding.stcg.gain).toLocaleString('en-US', {maximumFractionDigits: 0})}` : ''}
                    </div>
                    <div className="text-xs text-koinz-gray">
                      {holding.stcg.balance > 0 ? `${holding.stcg.balance.toFixed(3)} ${holding.coin}` : ''}
                    </div>
                  </td>
                  <td className="p-4 text-right">
                   <div className={holding.stcg.gain >= 0 ? 'text-koinz-green' : 'text-koinz-red'}>
                      {holding.ltcg.gain !== 0 ? `${holding.ltcg.gain >= 0 ? '+' : '-'}$${Math.abs(holding.ltcg.gain).toLocaleString('en-US', {maximumFractionDigits: 0})}` : ''}
                    </div>
                    <div className="text-xs text-koinz-gray">
                      {holding.ltcg.balance > 0 ? `${holding.ltcg.balance.toFixed(3)} ${holding.coin}` : ''}
                    </div>
                  </td>
                  <td className="p-4 text-right">
                    {isSelected ? (
                      <div>{holding.totalHolding.toFixed(holding.coin === "BTC" || holding.coin === "ETH" ? 4 : 2)} {holding.coin}</div>
                    ) : (
                      <div className="text-center">-</div>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      
      {!showAll && holdings.length > 4 && (
        <div className="flex justify-center mt-4">
          <button 
            onClick={() => setShowAll(true)}
            className="px-4 py-2 bg-koinz-blue text-white rounded-md hover:bg-blue-600 transition-colors"
          >
            View All
          </button>
        </div>
      )}
    </div>
  );
};

export default HoldingsTable;
