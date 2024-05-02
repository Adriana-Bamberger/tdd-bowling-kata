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
test('scores a normal frame', () => {
  //arrange
  const frame = [3, 2]
  //action
  const expected = 5
  //assert
  const actual = score.scoreFrame(frame)
  expect(actual).toBe(expected)
})
