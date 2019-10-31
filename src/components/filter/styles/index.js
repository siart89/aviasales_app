import styled from 'styled-components';


export const FilterWrapper = styled.div`
  max-width:232px;
  width:100%;
  height:max-content;
  background-color:#fff;
  display:flex;
  flex-direction:column;
  justify-content:flex-start;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  color: #4A4A4A;
`;

export const Title = styled.span`
  font-weight:600;
  font-size:12px;
  line-height: 12px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  padding: 20px 0 20px 20px;
`;

export const Label = styled.label`
  font-size: 13px;
  display:flex;
  align-items:center;
  height:40px;
  position: relative;
  cursor:pointer;
  &:hover{
    background: #F1FCFF;
  }
  & input{
    display:none
  }
`;

export const LabelText = styled.span`
  margin-left:50px;
  line-height: 20px;
`;

export const CheckBox = styled.div.attrs((props) => ({
  bordColor: props.isCheked ? '#2196F3' : '#9ABBCE',
}))`
  position:absolute;
  height:20px;
  width:20px;
  border: 1px solid ${(props) => props.bordColor};
  border-radius: 2px;
  left:20px;
  box-sizing:border-box;
  display:flex;
  justify-content:center; 
  align-items:flex-start;
  /* Position for ICON - check */
  & i{
    position: absolute;
    top: -1px;
    left: 2px;
  }
`;
