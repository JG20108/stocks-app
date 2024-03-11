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
  history: number[]; 
}

const HomePage: React.FC = () => {
  const stockOptions = useMemo(() => ['AAPL', 'GOOGL', 'BINANCE:BTCUSDT', 'IC MARKETS:1', 'MSFT', 'AMZN', 'BYND', 'UPOW', 'EXCOF', 'FSLY', 'AMD', 'TSLA'], []);
  const [stocks, setStocks] = useState<Stock[]>([]);
  const [alertPrices, setAlertPrices] = useState<{ [key: string]: number }>({});
  const [isLoading, setIsLoading] = useState(true); 

  // Define handleSubmit function
  const handleSubmit = (selectedStock: string, alertPrice: number) => {
    setAlertPrices(prev => ({ ...prev, [selectedStock]: alertPrice }));
  };

  useEffect(() => {
    let debounceTimer: NodeJS.Timeout;
    const socket = new WebSocket(`wss://ws.finnhub.io?token=${import.meta.env.VITE_FINNHUB_API_KEY}`);

    const subscribeToStocks = () => {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => {
        stockOptions.forEach(stock => {
          console.log(`Subscribing to: ${stock}`); // Log the symbol being subscribed to
          socket.send(JSON.stringify({'type':'subscribe', 'symbol': stock}));
        });
      }, 1000); // Adjust debounce time as needed
    };

    socket.addEventListener('open', subscribeToStocks);

    socket.addEventListener('message', (event) => {
      const response = JSON.parse(event.data);
      console.log(`Message received for: ${response.data ? response.data[0].s : 'Unknown symbol'}`, response); // Log the symbol and response
      if (response.type === "trade" && response.data) {
        setStocks((currentStocks) => {
          const newTrades = response.data.map((trade: { s: string; p: number }) => {
            const existingStock = currentStocks.find(stock => stock.name === trade.s);
            const history = existingStock ? [...existingStock.history, trade.p] : [trade.p]; // Update history
            const previousValue = existingStock ? existingStock.currentValue : trade.p; 
            const change = trade.p - previousValue;
            const marginChange = (change / previousValue) * 100;

            return {
              name: trade.s,
              currentValue: trade.p,
              marginChange: marginChange,
              change: change,
              history: history 
            };
          });
          const updatedStocks = [...currentStocks];
          newTrades.forEach((newTrade: Stock) => {
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
    };
  }, [stockOptions]); // Note the dependency on stockOptions

  useEffect(() => {
    if (stocks.length > 0) {
      setIsLoading(false);
    }
  }, [stocks]);

  if (isLoading) {
    return <div className="spinner">Loading Stocks from Finnhub API...</div>;
  } else {
    return (
      <div className="stock-info flex">
        <div className="stock-selection-form mr-20">
          <StockSelectionForm onSubmit={handleSubmit} stockOptions={stocks.map(stock => stock.name)} />
        </div>
        <div className="stock-display flex flex-wrap">
          <div className="stock-cards-container">
            {stocks.map((stock, index) => (
              <StockCard key={index} stockName={stock.name} currentValue={stock.currentValue} marginChange={stock.marginChange} change={stock.change} alertPrice={alertPrices[stock.name] || 0} />
            ))}
          </div>
          {stocks.map((stock, index) => (
            <div key={index} className="stock-graph-container bg-white p-2 mb-8 mx-auto" style={{ maxWidth: '51.25rem', width: '100%' }}>
              <StockGraph data={{
                labels: stock.history.map((_, i) => i.toString()), // Generate labels based on history length
                datasets: [{
                  label: stock.name,
                  data: stock.history, 
                  fill: false,
                  backgroundColor: 'rgb(255, 99, 132)',
                  borderColor: 'rgba(255, 99, 132, 0.2)',
                }]
              }} />
            </div>
          ))}
        </div>
      </div>
    );
  }
};

export default HomePage;
