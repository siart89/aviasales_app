const filterFromCheckBox = (value) => (
  {
    type: 'CHECKBOX_FILTER',
    payload: value,
  }
);

export default filterFromCheckBox;
