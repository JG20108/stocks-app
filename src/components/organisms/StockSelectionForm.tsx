import React, { useState } from 'react';
import Button from '@atoms/Button';
import Input from '@atoms/Input';
import Select from '@atoms/Select';

interface StockSelectionFormProps {
  onSubmit: (stock: string, alertPrice: number) => void;
  stockOptions: string[];
}

const StockSelectionForm: React.FC<StockSelectionFormProps> = ({ onSubmit, stockOptions }) => {
  const [selectedStock, setSelectedStock] = useState(stockOptions[0]);
  const [alertPrice, setAlertPrice] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(selectedStock, parseFloat(alertPrice));
  };

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
      />
      <Button label="Set Alert" onClick={() => {}} />
    </form>
  );
};

export default StockSelectionForm;