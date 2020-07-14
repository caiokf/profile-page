const now = () => {
  return new Date().toISOString();
};
export const year = (date) => (!date ? "current" : date.slice(0, 4));
