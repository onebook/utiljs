
/**
 * @return {String}
 */

function toString(v) {
  if (!v) {
    return ''
  }

  if (typeof v === 'object') {
    return JSON.stringify(v)
  }

  return String(v)
}

/**
 * @return {Number}
 */

function toFloat(v) {
  const f = parseFloat(v)

  if (isNaN(f)) {
    return 0
  }

  return f
}

/**
 * @return {Number}
 */

function toInt(v) {
  const i = parseInt(v)

  if (isNaN(i)) {
    return 0
  }

  return i
}

function splitNum(number, char, digit, direction) {

}

function showCent(money) {

}

/**
 * export
 */

export {
  splitNum,
  showCent,
  toString,
  toFloat,
  toInt
}
