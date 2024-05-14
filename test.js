function dateEXP(expDate, year, month, day){
  let date = new Date(year, month - 1, day); // Month in JavaScript Date starts from 0 (0 = January, 1 = February, ..., 11 = December)
  expDate.innerHTML = new Date(date).toLocaleDateString();
  console.log(date);
  dateA1 = date.getTime();
  console.log(dateA1)
}

// Example usage:
dateEXP(expDateA1, 2024, 4, 4);
console.log(dateA1); // Log dateA1 after it's assigned a value inside dateEXP
