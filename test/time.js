
'use strict'

const time = require('../lib/time')
const assert = require('assert')

describe('## time', () => {
  describe('# format', () => {
    const ts = 1436584232558

    const dest = {
      year: 2015,
      month: 7,
      date: 11,
      day: 6,
      hour: 11,
      min: 10,
      sec: 32
    }

    it('format(time)', () => {
      assert.deepEqual(time.format(String(ts / 1000 | 0)), dest)
      assert.deepEqual(time.format(new Date(ts)), dest)
      assert.deepEqual(time.format(String(ts)), dest)
      assert.deepEqual(time.format(ts), dest)
    })

    it('format(time) - to timestamp', () => {
      assert.deepEqual(time.format(ts / 1000 | 0, 'x'), ts - (ts % 1000))
      assert.deepEqual(time.format(new Date(ts), 'X'), ts / 1000 | 0)
      assert.deepEqual(time.format(new Date(ts), 'x'), ts)
    })

    it('format(time, fmt)', () => {
      assert.equal(time.format(1420041600000, 'YYYY MM DD'), '2015 01 01')
      assert.equal(time.format(ts / 1000 | 0, 'YYYY-MM-DD'), '2015-07-11')
      assert.equal(time.format(new Date(ts), 'YYYY-MM-DD'), '2015-07-11')
      assert.equal(time.format(ts, 'YYYY-MM-DD'), '2015-07-11')
      assert.equal(time.format(ts, 'YY-MM-DD'), '15-07-11')
    })

    it('format(time, fmt) - YYYY-MM-DD hh:mm:ss', () => {
      assert.equal(time.format(ts / 1000 | 0, 'YYYY-MM-DD hh:mm:ss'), '2015-07-11 11:10:32')
      assert.equal(time.format(ts, 'YYYY/MM/DD hh:mm:ss'), '2015/07/11 11:10:32')
    })
  })

  describe('# now', () => {
    it('now()', () => {
      console.log(time.now())
    })

    it('now(fmt)', () => {
      console.log(time.now('YYYY-MM-DD'))
    })
  })
})
