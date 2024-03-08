import React, { useState } from 'react';
import Button from '@atoms/Button';
import Input from '@atoms/Input';

const SearchBar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    console.log(`Searching for ${searchTerm}`);
    // Implement search functionality here
  };

  return (
    <div className="flex space-x-2">
      <Input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Button label="Search" onClick={handleSearch} />
    </div>
  );
};

export default SearchBar;