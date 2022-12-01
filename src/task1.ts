// https://adventofcode.com/2022/day/1
import { map, sumBy, flow, max, split } from 'lodash/fp'

const input = flow([split('\n\n'), map(split('\n'))])(inputs.input1)

export default flow([map(sumBy(Number)), max])(input)
