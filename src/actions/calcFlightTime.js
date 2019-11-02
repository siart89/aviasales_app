export default (info) => {
  let hours = Math.floor(info.duration / 60);
  let minutes = info.duration - hours * 60;
  if (hours < 10) hours = `0${hours}`;
  if (minutes < 10) minutes = `0${minutes}`;
  return `${hours}ч ${minutes}м`;
};
