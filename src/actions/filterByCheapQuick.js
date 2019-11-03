const compareQuick = (a, b) => {
  let first = 0;
  a.segments.forEach((segment) => {
    first += segment.duration;
  });
  let second = 0;
  b.segments.forEach((segment) => {
    second += segment.duration;
  });
  return first - second;
};

const compareCheap = (a, b) => (
  a.price - b.price
);

export default (arrForSort, value) => {
  if (value === 'QUICK') {
    return arrForSort.sort(compareQuick);
  }
  if (value === 'CHEAP') {
    return arrForSort.sort(compareCheap);
  }
  return arrForSort;
};
