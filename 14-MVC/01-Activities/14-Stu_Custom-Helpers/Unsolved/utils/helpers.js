module.exports = {
  format_time: (date) => {
    return date.toLocaleTimeString('M/D/YYY');
  },
  // TODO: Create a custom helper 'format_date' that takes in a timestamp,
  // adds five years to the date, and formats it as M/D/YYYY
};
