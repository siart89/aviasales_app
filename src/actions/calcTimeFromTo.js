// CALCULATE DEPARTURE TIME AND ARRIVAL TIME
export default (info) => {
  const depart = new Date(info.date);
  const arrivel = new Date(depart.getTime() + info.duration * 60 * 1000);
  // TRANSFORM TIME TO "hh:mm" FORMAT
  const formatingTime = (time) => {
    if (time < 10) return `0${time}`;
    return time;
  };

  const departH = formatingTime(depart.getHours());
  const departM = formatingTime(depart.getMinutes());
  const arrivelH = formatingTime(arrivel.getHours());
  const arrivelM = formatingTime(arrivel.getMinutes());

  return `${departH}:${departM} - ${arrivelH}:${arrivelM}`;
};
