import { ToDo } from '../../repositories/types';

export interface AutoCompleteProps {
  placeholder: string;
  inputValue: string;
  onChangeText: (value: string) => void;
  setSearchText: (value: string) => void;
  filteredOptions: ToDo[];
}
