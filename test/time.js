'use strict'

const time = require('../lib/time')
const assert = require('assert')

describe('## time', function() {
  describe('# format', function() {
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

    it('format(Date)', function() {
      assert.deepEqual(time.format(new Date(ts)), dest)
    })

    it('format(Date, fmt)', function() {
      assert.equal(time.format(new Date(ts), '%year-%month-%date'), '2015-07-11')
    })

    it('format(ts)', function() {
      assert.deepEqual(time.format(ts), dest)
    })

    it('format(ts, fmt) - ms', function() {
      assert.equal(time.format(ts, '%year-%month-%date'), '2015-07-11')
    })

    it('format(ts, fmt) - second', function() {
      assert.equal(time.format(ts / 1000 | 0, '%year-%month-%date'), '2015-07-11')
    })

    it('format(ts, fmt) - %year-%month-%date %hour:%min:%sec', function() {
      assert.equal(time.format(ts / 1000 | 0, '%year-%month-%date %hour:%min:%sec'), '2015-07-11 11:10:32')
    })

    it('format(ts, fmt) - double digit', function() {
      assert.equal(time.format(1420041600000, '%year-%month-%date'), '2015-01-01')
    })
  })

  describe('# now', function() {
    it('now()', function() {
      console.log(time.now())
    })

    it('now(fmt)', function() {
      console.log(time.now('%year-%month-%date'))
    })
  })
})
