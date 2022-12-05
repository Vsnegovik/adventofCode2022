// https://adventofcode.com/2022/day/4

import { filter, flatten, flow, map, size, split } from 'lodash/fp'

const input = flow([
  split('\n'),
  map(split(',')),
  map(map(split('-'))),
  map(flatten),
  map(map(parseInt)),
])(inputs.input4)

const fullyContains = ([fromA, toA, fromB, toB]: number[]) =>
  (fromA >= fromB && toA <= toB) || (fromA <= fromB && toA >= toB)

const output = flow([filter(fullyContains), size])(input)

/* PART 2 */

const overlapAtAll = ([fromA, toA, fromB, toB]: number[]) =>
  !(fromA > toB || toA < fromB)

const output2 = flow([filter(overlapAtAll), size])(input)

export default [output, output2]
