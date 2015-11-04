
'use strict'

const convert = require('../lib/convert')
const assert = require('assert')

describe('## convert', () => {
  describe('# splitNum', () => {
    it('', () => {
      assert.equal(convert.splitNum(123456789, 3, ','), '123,456,789')
      assert.equal(convert.splitNum(123456789, 3, '-'), '123-456-789')
    })
  })

  describe('# showCent', () => {

  })

  describe('# toString', () => {

  })

  describe('# toFloat', () => {

  })

  describe('# toInt', () => {

  })
})
