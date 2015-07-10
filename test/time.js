'use strict'

const time = require('../lib/time')
const assert = require('assert')

describe('## time', function() {
  describe('# format', function() {
    let ts = 1436584232558

    it('format(Date)', function() {
      assert.deepEqual(time.format(new Date(ts)), {
        year: 2015,
        month: 7,
        date: 11,
        day: 6
      })
    })

    it('format(Date, fmt)', function() {
      assert.equal(time.format(new Date(ts), '%s-%s-%s'), '2015-07-11')
    })

    it('format(ts)', function() {
      assert.deepEqual(time.format(ts), {
        year: 2015,
        month: 7,
        date: 11,
        day: 6
      })
    })

    it('format(ts, fmt) - ms', function() {
      assert.equal(time.format(ts, '%s-%s-%s'), '2015-07-11')
    })

    it('format(ts, fmt) - second', function() {
      assert.equal(time.format(ts / 1000 | 0, '%s-%s-%s'), '2015-07-11')
    })

    it('format(ts, fmt) - double digit', function() {
      assert.equal(time.format(1420041600000, '%s-%s-%s'), '2015-01-01')
    })
  })

  describe('# now', function() {
    it('now()', function() {
      console.log(time.now())
    })

    it('now(fmt)', function() {
      console.log(time.now('%s-%s-%s'))
    })
  })
})
