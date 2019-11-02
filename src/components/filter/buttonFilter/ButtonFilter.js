import React, { useState } from 'react';
import { ButtonFilterWrapper } from '../styles';
import CheckButton from './CheckButton';

const ButtonFilter = () => {
  const [buttons, setButtons] = useState([{
    value: 'CHEAP',
    title: 'Самый дешевый',
    isCheck: false,
  },
  {
    value: 'QUICK',
    title: 'Самый быстрый',
    isCheck: false,
  }]);

  const handleOnClick = (value) => {
    const activeBtn = buttons.slice();

    activeBtn.map((btn) => {
      if (btn.value === value) {
        const newBtn = btn;
        newBtn.isCheck = true;
        return newBtn;
      }
      const newBtn = btn;
      newBtn.isCheck = false;
      return newBtn;
    });
    setButtons(activeBtn);
  };

  return (
    <ButtonFilterWrapper>
      {buttons.map(((button, ind) => (
        <CheckButton
          key={button.value}
          title={button.title}
          value={button.value}
          check={button.isCheck}
          ind={ind}
          handleOnClick={handleOnClick}
        />
      )))}
    </ButtonFilterWrapper>
  );
};

export default ButtonFilter;
