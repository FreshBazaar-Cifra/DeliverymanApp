const months = [
  "января", "февраля", "марта", "апреля", "мая", "июня",
  "июля", "августа", "сентября", "октября", "ноября", "декабря",
];
const weekDays = [
  "воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота",
];


export const getFormattedDateTimeOrder = (datetime) => {
  const dateTime = new Date(datetime);

  const day = dateTime.getDate();
  const month = months[dateTime.getMonth()];
  const year = dateTime.getFullYear();
  const hours = dateTime.getHours();
  const minutes = dateTime.getMinutes();

  return `${day} ${month} ${year} г. в ${hours}:${minutes.toString().padStart(2, "0")}`;
};

export const getFormattedDateTimeTransaction = (dateTimeString) => {
  const dateTime = new Date(dateTimeString);
  const day = dateTime.getDate();
  const month = months[dateTime.getMonth()];
  const weekDay = weekDays[dateTime.getDay()];

  return `${day} ${month}, ${weekDay}`;
};
