export default (arr, activeFilter) => {
  const forSort = [];
  if (+activeFilter !== 999) {
    // filter array with active filter value
    arr.tickets.forEach((elem) => {
      // must have if segments more then 1, stop1 should be equal stop2
      if (elem.segments[0].stops.length === elem.segments[1].stops.length) {
        elem.segments.forEach((segment) => {
          if (+segment.stops.length === activeFilter) {
            forSort.push(elem);
          }
        });
      }
    });
    return forSort;
  }
  const newforSort = arr.tickets.slice();
  return newforSort;
};
