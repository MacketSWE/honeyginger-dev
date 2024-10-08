const idGenerator = () => {
  return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
};

export const getId = () => {
  return `${idGenerator()}-${idGenerator()}-${idGenerator()}-${idGenerator()}-${idGenerator()}-${idGenerator()}`;
};
