const generateSeats = (rows = 10, cols = 12) => {
  const seats = [];

  const rowLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  for (let r = 0; r < rows; r++) {
    for (let c = 1; c <= cols; c++) {
      seats.push({
        seatNumber: `${rowLetters[r]}${c}`,
        row: rowLetters[r],
        column: c,
        type: r < 2 ? "VIP" : "REGULAR",
        price: r < 2 ? 300 : 150,
        status: "AVAILABLE"
      });
    }
  }

  return seats;
};

module.exports = generateSeats;