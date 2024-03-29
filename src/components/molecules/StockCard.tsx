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
    <div className={`p-4 rounded shadow-lg ${cardBgColor} w-full sm:w-48`}>
      <h3 className="text-lg font-bold mb-2">{stockName}</h3>
      <p className="text-md font-semibold">Price / Value: <span className="font-bold">${currentValue.toFixed(2)}</span></p>
      <p className="text-md">
        {change >= 0 ? <span className="text-xl">↑</span> : <span className="text-xl">↓</span>} 
        <span className={change >= 0 ? 'text-green-600' : 'text-red-600'}>
          {Math.abs(marginChange) < 1 ? marginChange.toFixed(4) : marginChange.toFixed(2)}% (${change.toFixed(2)})
        </span>
      </p>
      {alertPrice > 0 ? (
        <p className="text-md font-semibold">Alert Price: <span className="font-bold">${alertPrice.toFixed(2)}</span></p>
      ) : (
        <p className="text-md font-semibold text-gray-400">Alert Price: <span className="font-bold">N/A</span></p>
      )}
    </div>
  );
};

export default StockCard;