const daysCounter = document.querySelector("#days");
const hoursCounter = document.querySelector("#hours");
const minutesCounter = document.querySelector("#minutes");
const secondsCounter = document.querySelector("#seconds");

const MILLISECONDS_PER_SECOND = 1000;
const SECONDS_PER_MINUTE = 60;
const MINUTES_PER_HOUR = 60;
const HOURS_PER_DAY = 24;

const DATE = new Date("24 Sep 2022 00:00:00 GMT");

const interval = setInterval(updateCounters, 1000);

function updateCounters() {
  const CURRENT_DATE = new Date();
  const DATE_DIFFERENCE = DATE.getTime() - CURRENT_DATE.getTime();

  daysCounter.textContent = formatCounterValue(getDays(DATE_DIFFERENCE));
  hoursCounter.textContent = formatCounterValue(getHours(DATE_DIFFERENCE));
  minutesCounter.textContent = formatCounterValue(getMinutes(DATE_DIFFERENCE));
  secondsCounter.textContent = formatCounterValue(getSeconds(DATE_DIFFERENCE));

  if (DATE_DIFFERENCE < 0) clearInterval(interval);
}

function getDays(date) {
  return (
    date /
    (MILLISECONDS_PER_SECOND *
      SECONDS_PER_MINUTE *
      MINUTES_PER_HOUR *
      HOURS_PER_DAY)
  );
}

function getHours(date) {
  return (
    (date / (MILLISECONDS_PER_SECOND * SECONDS_PER_MINUTE * MINUTES_PER_HOUR)) %
    HOURS_PER_DAY
  );
}

function getMinutes(date) {
  return (
    (date / (MILLISECONDS_PER_SECOND * SECONDS_PER_MINUTE)) % MINUTES_PER_HOUR
  );
}

function getSeconds(date) {
  return (date / MILLISECONDS_PER_SECOND) % MINUTES_PER_HOUR;
}

function formatCounterValue(value) {
  const flooredValue = Math.floor(value);
  return flooredValue <= 9 ? `0${flooredValue}` : flooredValue;
}
