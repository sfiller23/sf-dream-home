export const cssSizeToNumber = (size: string): number => {
  const numericSize = size.replace(/\D/g, "");
  return Number(numericSize);
};
