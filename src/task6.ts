import { each, map, size, slice } from 'lodash'
import { flow, split, uniq } from 'lodash/fp'

const input = flow([split('')])(inputs.input6)
const getInputData = (n: number) =>
  map(input, (_, i: number) => slice(input, i, i + n))

const getOutput = (n: number) => {
  let output = 0

  each(getInputData(n), (el, i) => {
    if (size(uniq(el)) === size(el) && !output) {
      output = i + n
    }
  })

  return output
}

export default [getOutput(4), getOutput(14)]
