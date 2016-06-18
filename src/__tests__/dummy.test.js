/* global it, describe */

/**
 * @file: This file contains tests
 */

const expect = require('expect')

describe('Array', () => {
  describe('#indexOf()', () => {
    it('should return -1 when the value is not present', () => {
      expect([1, 2, 3].indexOf(5)).toEqual(-1)
    })
  })
})
