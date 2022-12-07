// https://adventofcode.com/2022/day/5

import { zip } from 'lodash'
import {
  compact,
  drop,
  flow,
  map,
  replace,
  reverse,
  split,
  spread,
  take,
  parseInt,
  each,
  takeRight,
  nth,
  concat,
  last,
  join,
  dropRight,
} from 'lodash/fp'

const replaceEmpty = (row: string) => row.replaceAll(/\s{4}/g, () => ' []')
const crates = flow([
  split('\n'),
  take(8),
  reverse,
  map(replaceEmpty),
  map(split(' ')),
  spread(zip),
  map(map(replace(/\[(.?)\]/, '$1'))),
  map(compact),
])(inputs.input5)

const crates1 = JSON.parse(JSON.stringify(crates))
const crates2 = JSON.parse(JSON.stringify(crates))

flow([
  split('\n'),
  drop(10),
  map(replace(/(move |from |to )/g, '')),
  map(split(' ')),
  map(map(parseInt(10))),
  each(([move, from, to]) => {
    crates1[to - 1] = flow([
      nth(from - 1),
      takeRight(move),
      reverse,
      concat(crates1[to - 1]),
    ])(crates1)
    crates1[from - 1] = dropRight(move)(crates1[from - 1])
  }),
])(inputs.input5)

flow([
  split('\n'),
  drop(10),
  map(replace(/(move |from |to )/g, '')),
  map(split(' ')),
  map(map(parseInt(10))),
  each(([move, from, to]) => {
    crates2[to - 1] = flow([
      nth(from - 1),
      takeRight(move),
      concat(crates2[to - 1]),
    ])(crates2)
    crates2[from - 1] = dropRight(move)(crates2[from - 1])
  }),
])(inputs.input5)

const output = flow([map(last), join('')])(crates1)
const output2 = flow([map(last), join('')])(crates2)

export default [output, output2]
