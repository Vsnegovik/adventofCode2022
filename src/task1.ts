// https://adventofcode.com/2022/day/1
import { map, sumBy, flow, max, split, sortBy, takeRight } from 'lodash/fp'

const input = flow([split('\n\n'), map(split('\n'))])(inputs.input1)

const output = flow([map(sumBy(Number)), max])(input)

/* PART 2 */

const outputMany = flow([
  map(sumBy(Number)),
  sortBy((x) => x),
  takeRight(3),
  sumBy(Number),
])(input)

export default `${output} ${outputMany}`
