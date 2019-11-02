export default (price) => {
  const cost = [...price.toString()];
  cost.splice((cost.length - 3), 0, ' ');
  return `${cost.join('')} P`;
};
