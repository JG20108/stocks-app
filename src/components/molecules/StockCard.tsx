import React from 'react';

// Displays individual stock information in a card format
interface StockCardProps {
  stockName: string;
  currentValue: number;
  marginChange: number;
  change: number; 
  alertPrice: number; 
}

const StockCard: React.FC<StockCardProps> = ({ stockName, currentValue, marginChange, change, alertPrice }) => {
  // Determines background color based on the stock's current value compared to the alert price
  const cardBgColor = currentValue > alertPrice ? 'bg-green-200' : 'bg-red-200';

  // Renders stock information including name, current value, and price change
  return (
    <div className={`p-4 rounded shadow-lg ${cardBgColor}`}>
      <h3 className="text-lg font-bold">{stockName}</h3>
      <p className="text-sm">Price / Value: ${currentValue.toFixed(2)}</p>
      <p className="text-sm">{change >= 0 ? '↑' : '↓'} {Math.abs(marginChange) < 1 ? marginChange.toFixed(4) : marginChange.toFixed(2)}% (${change.toFixed(2)})</p>
      <p className="text-sm">Alert Price: ${alertPrice.toFixed(2)}</p>
    </div>
  );
};

export default StockCard;