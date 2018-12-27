const calendarMatrixMaker = (firstDay, daysInMonth) => {
  const weekdays = {
    sunday: 0,
    monday: 1,
    tuesday: 2,
    wednesday: 3,
    thursday: 4,
    friday: 5,
    saturday: 6,
  };
  const calArray = Array(42).fill(null);
  const startIndex = weekdays[firstDay];
  for (let i = 1, j = startIndex; i <= daysInMonth; i += 1, j += 1) {
    calArray[j] = i;
  }
  const calMatrix = [
    calArray.slice(0, 7),
    calArray.slice(7, 14),
    calArray.slice(14, 21),
    calArray.slice(21, 28),
    calArray.slice(28, 35),
    calArray.slice(35),
  ];

  return calMatrix;
};

module.exports = calendarMatrixMaker;
