// Calculate date from seconds
export const calculateTime = (timeInSeconds) => {
  let remainder = 0;
  let minutesRemainder = 0;

  remainder = timeInSeconds % 3600;
  const hours = Math.floor(timeInSeconds / 3600);

  minutesRemainder = remainder % 60;
  const minutes = Math.floor(remainder / 60);

  const seconds = Math.round(minutesRemainder);

  if (hours > 0) {
    return `${hours > 9 ? hours : '0' + hours}:${minutes > 9 ? minutes : '0' + minutes}:${
      seconds > 9 ? seconds : '0' + seconds
    }`;
  }

  return `${minutes > 9 ? minutes : '0' + minutes}:${seconds > 9 ? seconds : '0' + seconds}`;
};
