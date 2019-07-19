export const msToTime = duration => {
  // const milliseconds = parseInt((duration % 1000) / 100, 10);
  // let seconds = parseInt((duration / 1000) % 60, 10);
  let minutes = parseInt((duration / (1000 * 60)) % 60, 10);
  let hours = parseInt((duration / (1000 * 60 * 60)) % 24, 10);

  hours = hours < 10 ? `0${hours}` : hours;
  minutes = minutes < 10 ? `0${minutes}` : minutes;
  // seconds = seconds < 10 ? `0${seconds}` : seconds;

  // return `${hours}h, ${minutes}min, ${seconds}.${milliseconds}s`;
  return `${hours}h, ${minutes}min`;
};
