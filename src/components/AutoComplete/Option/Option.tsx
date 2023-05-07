import React from 'react';

import './Option.css';
import { OptionProps } from './types';

export const Option: React.FC<OptionProps> = ({
  label,
  changeInput,
}: OptionProps) => {
  return (
    <div
      className="searchResult"
      onClick={() => {
        changeInput(label);
      }}
    >
      {label}
    </div>
  );
};
