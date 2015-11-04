
module.exports = {
  createError,
  throwError
}

function createError(arg) {
  if (arg instanceof arg) {
    return arg
  }

  if (typeof arg === 'object') {
    const e = new Error(arg.message || arg.msg || 'unknown error')
    Object.assign(e, arg)
    return e
  }

}

function throwError(err) {
  throw createError(err)
}
