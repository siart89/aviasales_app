import React, { useState } from 'react';
import {
  FilterWrapper,
  Title,
} from '../styles';
import RadioElement from './RadioElement';

const CheckBox = () => {
  const [transferFilters, setTransferFilters] = useState([
    { title: 'Все', value: 'all', isChecked: true },
    { title: 'Без пересадок', value: 'none', isChecked: false },
    { title: '1 пересадка', value: 'one', isChecked: false },
    { title: '2 пересадки', value: 'two', isChecked: false },
    { title: '3 пересадки', value: 'three', isChecked: false },
  ]);
  const handleOnChange = (e) => {
    const forCheckingArr = transferFilters.map((item) => {
      if (item.value === e.target.value) {
        return { ...item, isChecked: true };
      } return { ...item, isChecked: false };
    });
    setTransferFilters(forCheckingArr);
  };

  return (
    <FilterWrapper>
      <Title>Количество пересадок</Title>
      <form name="filter" onChange={handleOnChange}>
        {transferFilters.map((filter) => (
          <RadioElement
            isCheked={filter.isChecked}
            key={filter.value}
            value={filter.value}
            title={filter.title}
          />
        ))}
      </form>
    </FilterWrapper>
  );
};

export default CheckBox;
