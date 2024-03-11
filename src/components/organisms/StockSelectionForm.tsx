import React, { useState } from 'react';
import Button from '@atoms/Button';
import Input from '@atoms/Input';
import Select from '@atoms/Select';

// Form for selecting a stock and setting an alert price
interface StockSelectionFormProps {
  onSubmit: (stock: string, alertPrice: number) => void;
  stockOptions: string[];
}

const StockSelectionForm: React.FC<StockSelectionFormProps> = ({ onSubmit, stockOptions }) => {
  // Manages state for selected stock and alert price
  const [selectedStock, setSelectedStock] = useState(stockOptions[0]);
  const [alertPrice, setAlertPrice] = useState('');

  // Handles form submission, preventing default action and calling onSubmit prop
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(selectedStock, parseFloat(alertPrice));
  };

  // Renders a form with a select dropdown for stocks and input for alert price
  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
      <Select
        options={stockOptions}
        value={selectedStock}
        onChange={(e) => setSelectedStock(e.target.value)}
      />
      <Input
        type="number"
        placeholder="Set alert price"
        value={alertPrice}
        onChange={(e) => setAlertPrice(e.target.value)}
        inputProps={{
          min: "0", 
        }}
      />
      <Button label="Set Alert" onClick={() => {}} />
    </form>
  );
};

export default StockSelectionForm;