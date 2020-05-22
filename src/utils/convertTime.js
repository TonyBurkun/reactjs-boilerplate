export const firstZero = (number) => {
   return ('0' + number).slice(-2)
};

export const convertTime = (date) => {
   return  `${firstZero(date.getHours())}:${firstZero(date.getMinutes())}:${firstZero(date.getSeconds())}`
};