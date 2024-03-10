import React, { useState, useEffect, useMemo } from 'react';
import StockSelectionForm from '@organisms/StockSelectionForm';
import StockCard from '@molecules/StockCard';
import StockGraph from '@organisms/StockGraph';

// Define an interface for the stock data
interface Stock {
  name: string;
  currentValue: number;
  marginChange: number;
  change: number;
}

interface Trade {
  name: string;
  currentValue: number;
  marginChange: number;
  change: number;
}

const HomePage: React.FC = () => {
  const stockOptions = useMemo(() => ['AAPL', 'BINANCE:BTCUSDT', 'IC MARKETS:1'], []);
  const [stocks, setStocks] = useState<Stock[]>([]);
  const [alertPrices, setAlertPrices] = useState<{ [key: string]: number }>({});

  // Define handleSubmit function
  const handleSubmit = (selectedStock: string, alertPrice: number) => {
    console.log("Form submitted with stock:", selectedStock);
    setAlertPrices(prev => ({ ...prev, [selectedStock]: alertPrice }));
  };

  useEffect(() => {
    let debounceTimer: NodeJS.Timeout;
    const socket = new WebSocket(`wss://ws.finnhub.io?token=${import.meta.env.VITE_FINNHUB_API_KEY}`);

    const subscribeToStocks = () => {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => {
        stockOptions.forEach(stock => {
          socket.send(JSON.stringify({'type':'subscribe', 'symbol': stock}));
        });
        console.log("Subscribed to stocks after debounce.");
      }, 1000); // Adjust debounce time as needed
    };

    socket.addEventListener('open', subscribeToStocks);

    socket.addEventListener('message', (event) => {
      console.log("Message from server:", event.data); // Log every message received
      const response = JSON.parse(event.data);
      if (response.type === "trade" && response.data) {
        setStocks((currentStocks) => {
          const newTrades = response.data.map((trade: { s: string; p: number }) => ({
            name: trade.s,
            currentValue: trade.p,
            marginChange: 0, // Update logic as needed
            change: 0, // Update logic as needed
          }));
          const updatedStocks = [...currentStocks];
          newTrades.forEach((newTrade: Trade) => {
            const index = updatedStocks.findIndex(stock => stock.name === newTrade.name);
            if (index !== -1) {
              updatedStocks[index] = { ...updatedStocks[index], ...newTrade };
            } else {
              updatedStocks.push(newTrade);
            }
          });
          return updatedStocks;
        });
      }
    });

    socket.addEventListener('error', (error) => {
      console.error("WebSocket error:", error);
    });

    return () => {
      clearTimeout(debounceTimer);
      stockOptions.forEach(stock => {
        if (socket.readyState === WebSocket.OPEN) {
          socket.send(JSON.stringify({'type':'unsubscribe','symbol': stock}));
        }
      });
      socket.close();
      console.log("WebSocket connection closed.");
    };
  }, [stockOptions]); // Note the dependency on stockOptions

  return (
    <div className="stock-info">
      <StockSelectionForm onSubmit={handleSubmit} stockOptions={stockOptions} />
      <div className="stock-display">
        {stocks.map((stock, index) => (
          <StockCard key={index} stockName={stock.name} currentValue={stock.currentValue} marginChange={stock.marginChange} change={stock.change} alertPrice={alertPrices[stock.name] || 0} />
        ))}
      </div>
      <StockGraph data={{ labels: ['Jan', 'Feb'], datasets: [{ label: 'AAPL', data: [150, 155], fill: false, backgroundColor: 'rgb(255, 99, 132)', borderColor: 'rgba(255, 99, 132, 0.2)', }] }} />
    </div>
  );
};

export default HomePage;
