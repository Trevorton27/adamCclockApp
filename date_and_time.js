function renderTime() {
  const theTime = new Date();
  const second = addLeadingZero(theTime.getSeconds());
  const minute = addLeadingZero(theTime.getMinutes());
  const hour = theTime.getHours();
  const isAm = hour < 12 || hour === 0;
  let amPm = isAm ? 'AM' : 'PM';

  const displayTime = `${formatHour(hour)}:${minute}:${second} ${amPm}`;
  document.getElementById('time').innerText = displayTime;
}

function addLeadingZero(number) {
  return number < 10 ? '0' + number : number;
}

function formatHour(hour) {
  hour = hour >= 13 ? hour - 12 : hour;

  hour = hour === 0 ? hour + 12 : hour;
  return hour;
}

function renderDate() {
  const theDate = new Date();

  const day_of_week = days[theDate.getDay()];
  const month = months[theDate.getMonth()];
  const dateToday = theDate.getDate();
  const year = theDate.getFullYear();

  const date = `${day_of_week}, ${month} ${formatDateSuffix(
    dateToday
  )} ${year}`;
  document.getElementById('date').innerText = date;
}

function formatDateSuffix(date) {
  if (date < 10 || date > 20) {
    switch (date % 10) {
      case 1:
        return `${date}st`;
      case 2:
        return `${date}nd`;
      case 3:
        return `${date}rd`;
    }
  }
  return `${date}th`;
}

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
];

renderTime();
renderDate();

setInterval(() => {
  renderTime();
  renderDate();
}, 1000);
