import React, { useState } from 'react';
import {
  FilterWrapper,
  Title,
  Form,
} from '../styles';
import RadioElement from './RadioElement';

const CheckBox = () => {
  const [transferFilters, setTransferFilters] = useState([
    { title: 'Все', value: 999, isChecked: true },
    { title: 'Без пересадок', value: 0, isChecked: false },
    { title: '1 пересадка', value: 1, isChecked: false },
    { title: '2 пересадки', value: 2, isChecked: false },
    { title: '3 пересадки', value: 3, isChecked: false },
  ]);

  // WHAT TYPE OF FILTER IS ACTIVE

  const handleOnChange = (e) => {
    const forCheckingArr = transferFilters.map((item) => {
      if (item.value === +e.target.value) {
        return { ...item, isChecked: true };
      } return { ...item, isChecked: false };
    });
    setTransferFilters(forCheckingArr);
  };

  return (
    <FilterWrapper>
      <Title>Количество пересадок</Title>
      <Form name="filter" onChange={handleOnChange}>
        {transferFilters.map((filter) => (
          <RadioElement
            isCheked={filter.isChecked}
            key={filter.value}
            value={filter.value}
            title={filter.title}
          />
        ))}
      </Form>
    </FilterWrapper>
  );
};

export default CheckBox;
