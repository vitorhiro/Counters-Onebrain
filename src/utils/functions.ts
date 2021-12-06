export const zeroPad = (num: number, size: number) => {
  var zero = size - num.toString().length + 1;
  return Array(+(zero > 0 && zero)).join('0') + num;
};

export const randomNumber = () => {
  const random = Math.floor(Math.random() * 9999);

  return random;
};
