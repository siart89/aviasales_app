export default (info) => {
  let text = 'Пересадка';
  if (info.stops.length === 0) {
    return 'Без пересадок';
  }
  if (info.stops.length >= 2 && info.stops.length <= 4) {
    text = 'Пересадки';
  }
  if (info.stops.length >= 5 && info.stops.length <= 20) {
    text = 'Пересадок';
  }
  return `${info.stops.length} ${text}`;
};
