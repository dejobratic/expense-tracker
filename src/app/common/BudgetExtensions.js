const toFormattedString = (amount) => {
  /*
        exactly 2 decimal points
        comma separating the thousands

        2310.4567 -> + 2,310.46
        2000 -> + 2,000.00
    */
  let sign = amount >= 0 ? "+" : "-"
  let absoluteAmount = Math.abs(amount)

  let splittedAmount = (absoluteAmount.toFixed(2)).split(".")

  let integer = splittedAmount[0]

  if (integer.length > 3) {
    integer =
      integer.substr(0, integer.length - 3) +
      "," +
      integer.substr(integer.length - 3, 3) //input 23510, output 23,510
  }

  let decimal = splittedAmount[1]

  return `${sign} ${integer}.${decimal}`
}

export { toFormattedString }
