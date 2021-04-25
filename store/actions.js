export const CHANGECOUNT = "CHANGECOUNT";

export const changeCount = (count) => {
  return { type: CHANGECOUNT, number: count };
};
