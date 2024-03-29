import styled, { css } from 'styled-components';

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

  @media (max-width: 768px) {
    max-width:100%;
  }
`;

export const Title = styled.span`
  font-weight:600;
  font-size:12px;
  line-height: 12px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  padding: 20px 0 20px 20px;
  text-align:center;
`;
export const Form = styled.form`
 
    @media (max-width: 768px) {
      display: flex;
      flex-direction: row;
      text-align: center;
      align-items: center;
      justify-content:space-between;
      padding: 0 5px 5px 5px;
  }
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
  @media (max-width: 768px) {
    font-size:13px;
    &:hover{
    background: none;
  }
  }
  @media (max-width: 475px) {
    font-size:10px;
  }
`;

export const LabelText = styled.span`
  margin-left:50px;
  line-height: 20px;
  
  @media (max-width: 768px) {
    margin-left:25px;
    padding-left:5px;
  }
  @media (max-width: 475px) {
    line-height:10px;
  }
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

    @media (max-width: 475px) {
    top:1px;
  }
  }
  @media (max-width: 768px) {
    left:5px;
  }
`;

// CHECKBUTTON STYLES
export const ButtonFilterWrapper = styled.div`
  display:flex;
  height:50px;
`;

export const Button = styled.span`
  max-width: 251px;
  width:100%;
  height:100%;
  color:#4A4A4A;
  background-color:#fff;
  border:1px solid #DFE5EC;
/* Settings if button is active */
  ${(props) => (props.check && css`
    color:#fff;
    background-color:#2196F3;
    border:none;
  `)}

  ${(props) => (props.position === 'LEFT' ? css`
    border-radius: 4px 0 0 4px;
  ` : css`
      border-radius: 0 4px 4px 0;
  `
  )}
  font-weight:600;
  display:flex;
  justify-content:center;
  align-items:center;
  letter-spacing:0.5px;
  text-transform:uppercase;
  font-size:12px;
  line-height:20px;
  cursor:pointer;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;
