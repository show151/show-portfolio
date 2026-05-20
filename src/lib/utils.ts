export const toTime = (date: string | undefined): number => {
  if (!date) return 0;
  const normalized = date.length === 7 ? `${date}-01` : date;
  return new Date(normalized).getTime();
};
