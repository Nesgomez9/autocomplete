import { useEffect, useState } from 'react';

import { ToDo } from './repositories/types';
import { AutoComplete } from './components/AutoComplete/AutoComplete';

import './App.css';
import { getDataService } from './repositories';

function App() {
  const [inputValue, setInputValue] = useState<string>('');
  const [searchText, setSearchText] = useState<string>('');
  const [filteredOptions, setFilteredOptions] = useState<ToDo[]>([]);
  const onChangeText = (value: string) => {
    setInputValue(value);
  };

  useEffect(() => {
    const fetchFilteredOptions = async () => {
      const data = await getDataService.getData();
      const options = data.filter((item) => {
        return item?.title
          ?.toLowerCase()
          .includes(searchText.trim().toLowerCase());
      });
      setFilteredOptions(options);
    };
    if (searchText.length > 0) {
      fetchFilteredOptions();
    } else {
      setFilteredOptions([]);
    }
  }, [searchText]);

  return (
    <div className="App">
      <h1>What are you looking for?</h1>
      <AutoComplete
        placeholder="Type a name to search"
        inputValue={inputValue}
        onChangeText={onChangeText}
        filteredOptions={filteredOptions}
        setSearchText={setSearchText}
      />
    </div>
  );
}

export default App;
