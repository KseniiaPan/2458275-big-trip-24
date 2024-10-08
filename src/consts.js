const TIME_FORMAT = {
  fullDateAndTime: 'DD/MM/YY HH:mm',
  eventDate: 'MMM DD',
  fullEventDate: 'YYYY-MM-DD',
  eventTime: 'HH:mm',

};

const EVENT_TYPES = [
  'taxi',
  'bus',
  'train',
  'ship',
  'drive',
  'flight',
  'check-in',
  'sightseeing',
  'restaurant'
];

const FilterType = {
  EVERYTHING: 'EVERYTHING',
  FUTURE: 'FUTURE',
  PRESENT: 'PRESENT',
  PAST: 'PAST',
};

const Mode = {
  DEFAULT: 'DEFAULT',
  EDITING: 'EDITING',
};

const SortType = {
  DAY: 'day',
  TIME: 'time',
  PRICE: 'pice',
};
const HOURS = 24;
const MINUTES = 60;

export {TIME_FORMAT, HOURS, MINUTES, EVENT_TYPES, FilterType, Mode, SortType};
