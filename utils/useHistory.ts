export const pushHistory = (location: string, currentHistory: string[]) => {
  const resultHistory = [...currentHistory];
  if (location === '/') {
    return ['/'];
  }
  if (location !== currentHistory[1]) {
    resultHistory.unshift(location);
  } else {
    resultHistory.shift();
  }

  return resultHistory;
};
