
'use strict'

module.exports = {
  format,
  now
}

/**
 * @param {Date|String|Number} time
 * @param {String} fmt
 */

function format(time, fmt) {
  const d = time instanceof Date ? time : normalize(time)

  if (fmt === 'X') {
    return d.getTime() / 1000 | 0
  }

  if (fmt === 'x') {
    return d.getTime()
  }

  const year = d.getFullYear()
  let month = d.getMonth() + 1
  let date = d.getDate()

  const hour = d.getHours()
  const min = d.getMinutes()
  const sec = d.getSeconds()

  const day = d.getDay()

  if (fmt) {
    month = doubleDigit(month)
    date = doubleDigit(date)

    return fmt
      .replace(/YYYY/, year)
      .replace(/MM/, month)
      .replace(/YY/, String(year).slice(2))
      .replace(/DD/, date)
      .replace(/hh/, hour)
      .replace(/mm/, min)
      .replace(/ss/, sec)
      .replace(/d/, day)
  }

  return {
    year, month, date, day, hour, min, sec
  }
}

/**
 * @param {String} fmt - optional
 */

function now(fmt) {
  return format(new Date(), fmt)
}

/**
 * @param {Number|String} time
 */

function normalize(time) {
  if (parseInt(time) == time) {
    // timestamp
    const len = String(time).length
    if (len !== 10 && len !== 13) {
      throw new Error('invalid timestamp')
    }

    time = parseInt(time)

    if (len === 10) {
      // second
      time = time * 1000
    }
  }

  return new Date(time)
}

function doubleDigit(i) {
  if (i < 10) {
    return '0' + i
  }

  return i
}
