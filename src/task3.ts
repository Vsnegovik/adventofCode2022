// https://adventofcode.com/2022/day/3

import { chunk, flatten, flow, intersection, map, split, sum } from 'lodash/fp'

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

export default output
