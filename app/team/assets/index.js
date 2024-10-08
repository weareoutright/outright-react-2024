export const extractText = (input) => {
  if (["./", "./index", "./index.js"].includes(input)) return;

  const regex = /\/(.*?)\./;
  const match = input.match(regex);
  return match ? match[1] : null;
};
