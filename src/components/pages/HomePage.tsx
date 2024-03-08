import React, { useState } from 'react';
import StockSelectionForm from '@organisms/StockSelectionForm';
import StockCard from '@molecules/StockCard';
import StockGraph from '@organisms/StockGraph';

const HomePage: React.FC = () => {
  const stockOptions = ['AAPL', 'GOOGL', 'MSFT'];
  const [stocks, setStocks] = useState([
    { name: 'AAPL', currentValue: 150, marginChange: 5 },
    { name: 'GOOGL', currentValue: 2800, marginChange: -2 },
    { name: 'MSFT', currentValue: 300, marginChange: 3 },
  ]);

  const handleSubmit = (stock: string, alertPrice: number) => {
    console.log(stock, alertPrice);
    // Add logic to update stocks state based on form submission
  };

  return (
    <div>
      <StockSelectionForm onSubmit={handleSubmit} stockOptions={stockOptions} />
      {stocks.map((stock, index) => (
        <StockCard key={index} stockName={stock.name} currentValue={stock.currentValue} marginChange={stock.marginChange} change={/* Provide the change value here */} />
      ))}
      <StockGraph data={{ labels: ['Jan', 'Feb'], datasets: [{ label: 'AAPL', data: [150, 155], fill: false, backgroundColor: 'rgb(255, 99, 132)', borderColor: 'rgba(255, 99, 132, 0.2)', }] }} />
    </div>
  );
};

export default HomePage;