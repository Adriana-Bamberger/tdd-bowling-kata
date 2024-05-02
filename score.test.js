import { test, expect } from 'vitest'
import * as score from './score'

test('test setup working', () => {
  expect(true).toBeTruthy()
})

test('scores a gutterball frame', () => {
  const frame = [0, 0]
  const expected = 0
  const actual = score.scoreFrame(frame)

  expect(actual).toBe(expected)
})
//originally used the var "num" but to make this work we wil use numbers as suggested in the read me
// got help from Jarad to get the test workign again, we where trying to test a whole game not a single frame lol.
test('scores a normal frame', () => {
  //arrange
  const frame = [3, 2]
  //action
  const expected = 5
  //assert
  const actual = score.scoreFrame(frame)
  expect(actual).toBe(expected)
})

test('scores a spare frame', () => {
  //arrange
  const frame1 = [6, 4]
  const frame2 = [2, 4]
  //action
  const expected = 12
  //assert
  const actual = score.scoreSpareFrame(frame1, frame2)
  expect(actual).toBe(expected)
})

test('scores a single strike frame', () => {
  //arrange
  const frame1 = [10, 0]
  const frame2 = [2, 4]
  //action
  const expected = 16
  //assert
  const actual = score.scoreStrikeFrame(frame1, frame2)
  expect(actual).toBe(expected)
})
