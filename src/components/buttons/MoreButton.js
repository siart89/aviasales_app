import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Button } from '../filter/styles';

const MoreBtn = styled(Button)`
  border-radius:4px;
  max-width:100%;
  margin-top:20px;
`;

const MoreButton = ({ onClick, isEnd }) => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <MoreBtn
      check={isClicked}
      type="button"
      onClick={onClick}
      onMouseDown={() => setIsClicked(true)}
      onMouseUp={() => setIsClicked(false)}
    >
      {isEnd || 'Показать еще 5 билетов'}
    </MoreBtn>
  );
};

MoreButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  isEnd: PropTypes.string.isRequired,
};

export default MoreButton;
