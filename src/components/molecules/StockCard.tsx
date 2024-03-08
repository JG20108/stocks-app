import React from 'react';

interface StockCardProps {
  stockName: string;
  currentValue: number;
  marginChange: number;
  change: number; 
}

const StockCard: React.FC<StockCardProps> = ({ stockName, currentValue, marginChange, change }) => {
  const cardBgColor = marginChange < 0 ? 'bg-red-200' : 'bg-green-200';
  const changeSymbol = marginChange < 0 ? '↓' : '↑';

  return (
    <div className={`p-4 rounded shadow-lg ${cardBgColor}`}>
      <h3 className="text-lg font-bold">{stockName}</h3>
      <p className="text-sm">Price: ${currentValue.toFixed(2)}</p>
      <p className="text-sm">{changeSymbol} {marginChange.toFixed(2)}% (${change.toFixed(2)})</p>
    </div>
  );
};

export default StockCard;