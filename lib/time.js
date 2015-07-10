'use strict'

const util = require('util')

module.exports = {
  format: format,
  now: now
}

/**
 * @param {Date|Number} ts (timestamp)
 * @param {String} fmt
 */
function format(ts, fmt) {
  let d = ts instanceof Date ? ts : new Date(normalize(ts))

  let year = d.getFullYear()
  let month = d.getMonth() + 1
  let date = d.getDate()
  let day = d.getDay()

  if (fmt) {
    month = doubleDigit(month)
    date = doubleDigit(date)

    return util.format.call(null, fmt, year, month, date)
  }

  return {
    year: year,
    month: month,
    date: date,
    day: day
  }
}

/**
 * @param {String} fmt - optional
 */
function now(fmt) {
  return format(new Date(), fmt)
}

/**
 * @param {Number} ts
 */
function normalize(ts) {
  let len = String(ts).length

  if (len !== 10 && len !== 13) {
    throw new Error('invalid timestamp')
  }

  if (len === 10) {
    // second
    ts = ts * 1000
  }

  return ts
}

function doubleDigit(i) {
  if (i < 10) {
    return '0' + i
  }

  return i
}
