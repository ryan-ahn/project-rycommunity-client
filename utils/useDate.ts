export const useToDay = () => {
  const offset = 1000 * 60 * 60 * 9;
  const isoDate = new Date();
  const koreaDate = new Date(isoDate.getTime() + offset);
  return koreaDate;
};
