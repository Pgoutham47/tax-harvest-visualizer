import React, { useState } from 'react';
import { Checkbox } from "@/components/ui/checkbox";
import { Holding } from '@/types';

interface HoldingsTableProps {
  holdings: Holding[];
  selectedHoldings: string[];
  onSelectionChange: (selectedCoins: string[]) => void;
  isPreHarvesting?: boolean;
}

type SortColumn = 'stcg' | 'ltcg' | 'none';
type SortDirection = 'asc' | 'desc';

const HoldingsTable: React.FC<HoldingsTableProps> = ({
  holdings,
  selectedHoldings,
  onSelectionChange,
  isPreHarvesting = false
}) => {
  const [showAll, setShowAll] = useState(false);
  const [sortConfig, setSortConfig] = useState<{
    column: SortColumn;
    direction: SortDirection;
  }>({ column: 'none', direction: 'asc' });

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

  const sortedHoldings = [...holdings].sort((a, b) => {
    if (sortConfig.column === 'none') return 0;

    const aValue = sortConfig.column === 'stcg' ? a.stcg.gain : a.ltcg.gain;
    const bValue = sortConfig.column === 'stcg' ? b.stcg.gain : b.ltcg.gain;

    return sortConfig.direction === 'asc' ? aValue - bValue : bValue - aValue;
  });

  const displayedHoldings = showAll ? sortedHoldings : sortedHoldings.slice(0, 4);

  const requestSort = (column: SortColumn) => {
    let direction: SortDirection = 'asc';
    if (sortConfig.column === column && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ column, direction });
  };

  const bgColorClass = isPreHarvesting 
    ? 'bg-white dark:bg-koinz-lightNavy' 
    : 'bg-white dark:bg-koinz-darkNavy';

  const SortIndicator = ({ column }: { column: SortColumn }) => {
    if (sortConfig.column !== column) return <span className="ml-1">↕</span>;
    return <span className="ml-1">{sortConfig.direction === 'asc' ? '↑' : '↓'}</span>;
  };

  return (
    <div className={`mt-8 rounded-lg p-6 ${bgColorClass} text-gray-800 dark:text-white`}>
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">Holdings</h3>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 dark:bg-koinz-navy">
              <th className="p-4 text-left rounded-tl-lg">
                <Checkbox
                  checked={isAllSelected}
                  onCheckedChange={(checked) => handleSelectAll(!!checked)}
                />
              </th>
              <th className="p-4 text-left">Asset</th>
              <th className="p-4 text-right">
                Holdings
                <div className="text-xs text-gray-500 dark:text-koinz-gray">Current Market Rate</div>
              </th>
              <th className="p-4 text-right">Total Current Value</th>
              <th
                className="p-4 text-right cursor-pointer hover:bg-gray-200 dark:hover:bg-koinz-gray/20"
                onClick={() => requestSort('stcg')}
              >
                Short-term
                <SortIndicator column="stcg" />
              </th>
              <th
                className="p-4 text-right cursor-pointer hover:bg-gray-200 dark:hover:bg-koinz-gray/20"
                onClick={() => requestSort('ltcg')}
              >
                Long-Term
                <SortIndicator column="ltcg" />
              </th>
              <th className="p-4 text-right rounded-tr-lg">Amount to Sell</th>
            </tr>
          </thead>
          <tbody>
            {displayedHoldings.map((holding) => {
              const isSelected = selectedHoldings.includes(holding.coin);
              const totalValue = holding.totalHolding * holding.currentPrice;

              return (
                <tr
                  key={holding.coin}
                  className={`border-b border-gray-200 dark:border-koinz-gray/10 
                    ${isSelected ? 'bg-blue-100 dark:bg-blue-500/10' : ''} 
                    hover:bg-gray-100 dark:hover:bg-koinz-gray/10`}
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
                        <div className="text-xs text-gray-500 dark:text-koinz-gray">{holding.coin}</div>
                      </div>
                    </div>
                  </td>
                  <td className="p-4 text-right">
                    <div
                      title={`${holding.totalHolding} ${holding.coin}`}
                    >
                      {holding.totalHolding.toFixed(holding.coin === "BTC" || holding.coin === "ETH" ? 3 : 2)} {holding.coin}
                    </div>
                    <div
                      className="text-xs text-gray-500 dark:text-koinz-gray"
                      title={`$${holding.currentPrice.toLocaleString('en-US', { minimumFractionDigits: 2 })}/${holding.coin}`}
                    >
                      ${holding.currentPrice.toLocaleString('en-US', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2
                      })}/{holding.coin}
                    </div>
                  </td>
                  <td className="p-4 text-right"
                    title={`$${totalValue.toLocaleString('en-US', { maximumFractionDigits: 2 })}`}
                  >
                    ${totalValue.toLocaleString('en-US', {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2
                    })}
                  </td>
                  <td className="p-4 text-right">
                    <div
                      className={holding.stcg.gain >= 0 ? 'text-green-600 dark:text-koinz-green' : 'text-red-600 dark:text-koinz-red'}
                      title={holding.stcg.gain !== 0 ? `$${holding.stcg.gain}` : '-'}
                    >
                      {holding.stcg.gain !== 0
                        ? `${holding.stcg.gain >= 0 ? '+' : '-'}$${Math.abs(holding.stcg.gain).toLocaleString('en-US', { maximumFractionDigits: 0 })}`
                        : '-'}
                    </div>
                    <div
                      className="text-xs text-gray-500 dark:text-koinz-gray"
                      title={holding.stcg.balance > 0 ? `${holding.stcg.balance} ${holding.coin}` : ''}
                    >
                      {holding.stcg.balance > 0
                        ? `${holding.stcg.balance.toFixed(3)} ${holding.coin}`
                        : ''}
                    </div>
                  </td>
                  <td className="p-4 text-right">
                    <div
                      className={holding.ltcg.gain >= 0 ? 'text-green-600 dark:text-koinz-green' : 'text-red-600 dark:text-koinz-red'}
                      title={holding.ltcg.gain !== 0 ? `$${holding.ltcg.gain}` : '-'}
                    >
                      {holding.ltcg.gain !== 0
                        ? `${holding.ltcg.gain >= 0 ? '+' : '-'}$${Math.abs(holding.ltcg.gain).toLocaleString('en-US', { maximumFractionDigits: 0 })}`
                        : '-'}
                    </div>
                    <div
                      className="text-xs text-gray-500 dark:text-koinz-gray"
                      title={holding.ltcg.balance > 0 ? `${holding.ltcg.balance} ${holding.coin}` : ''}
                    >
                      {holding.ltcg.balance > 0
                        ? `${holding.ltcg.balance.toFixed(3)} ${holding.coin}`
                        : ''}
                    </div>
                  </td>
                  <td className="p-4 text-right">
                    {isSelected ? (
                      <div title={`${holding.totalHolding} ${holding.coin}`}>
                        {holding.totalHolding.toFixed(holding.coin === "BTC" || holding.coin === "ETH" ? 4 : 2)} {holding.coin}
                      </div>
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
        <div className="flex justify-start mt-4">
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
