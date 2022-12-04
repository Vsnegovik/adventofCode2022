// https://adventofcode.com/2022/day/4

import { compact, flatten, flow, map, size, split } from 'lodash/fp'

const input = flow([split('\n'), map(split(',')), map(map(split('-')))])(
  inputs.input4,
)

const output = flow([
  map(flatten),
  map(([fromA, toA, fromB, toB]) => [fromA - fromB, toA - toB]),
  map(([from, to]) => (from <= 0 && to >= 0) || (from >= 0 && to <= 0)),
  compact,
  size,
])(input)

export default [output]
