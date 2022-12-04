// https://adventofcode.com/2022/day/3

import {
  chunk,
  flatten,
  flow,
  intersection,
  intersectionBy,
  map,
  split,
  spread,
  sum,
} from 'lodash/fp'

const getIndexOfChar = (char: string) =>
  'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.indexOf(char) + 1

const input = flow([split('\n'), map(split(''))])(inputs.input3)

const output = flow([
  map((payload: string[][]) => chunk(payload.length / 2)(payload)),
  map(spread(intersection)),
  flatten,
  map(getIndexOfChar),
  sum,
])(input)

/* PART 2 */

const output2 = flow([
  chunk(3),
  map(spread(intersectionBy)),
  flatten,
  map(getIndexOfChar),
  sum,
])(input)

export default [output, output2]
