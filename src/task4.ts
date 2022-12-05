// https://adventofcode.com/2022/day/4

import { compact, flatten, flow, map, size, split } from 'lodash/fp'

const input = flow([split('\n'), map(split(',')), map(map(split('-')))])(
  inputs.input4,
)

const output = flow([
  map(flatten),
  map(map(Number)),
  map(
    ([fromA, toA, fromB, toB]) =>
      (fromA >= fromB && toA <= toB) || (fromA <= fromB && toA >= toB),
  ),
  compact,
  size,
])(input)

export default [output]
