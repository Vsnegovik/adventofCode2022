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

flow([
  split('\n'),
  drop(10),
  map(replace(/(move |from |to )/g, '')),
  map(split(' ')),
  map(map(parseInt(10))),
  each(([move, from, to]) => {
    crates[to - 1] = flow([
      nth(from - 1),
      takeRight(move),
      reverse, // only for part 1. Need refactor
      concat(crates[to - 1]),
    ])(crates)
    crates[from - 1] = dropRight(move)(crates[from - 1])
  }),
])(inputs.input5)

const output = flow([map(last), join('')])(crates)

export default [output]
