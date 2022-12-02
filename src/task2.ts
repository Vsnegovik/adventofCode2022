// https://adventofcode.com/2022/day/2
import { map, flow, split, flatten, sum, tail } from 'lodash/fp'

enum EActionCost {
  X = 1,
  Y,
  Z,
}
enum EResultCost {
  LOST = 0,
  DRAW = 3,
  WON = 6,
}

enum EEnemySign {
  A = 'A',
  B = 'B',
  C = 'C',
}

enum EFriendSign {
  X = 'X',
  Y = 'Y',
  Z = 'Z',
}

const rules: Record<EFriendSign, Record<EEnemySign, EResultCost>> = {
  [EFriendSign.X]: {
    [EEnemySign.A]: EResultCost.DRAW,
    [EEnemySign.B]: EResultCost.LOST,
    [EEnemySign.C]: EResultCost.WON,
  },
  [EFriendSign.Y]: {
    [EEnemySign.A]: EResultCost.WON,
    [EEnemySign.B]: EResultCost.DRAW,
    [EEnemySign.C]: EResultCost.LOST,
  },
  [EFriendSign.Z]: {
    [EEnemySign.A]: EResultCost.LOST,
    [EEnemySign.B]: EResultCost.WON,
    [EEnemySign.C]: EResultCost.DRAW,
  },
}

const input = flow([split('\n'), map(split(' '))])(inputs.input2)

const getActionCost = (sign: EActionCost) => EActionCost[sign]
const getRoundCost = ([enemy, friend]: [EEnemySign, EFriendSign]) => rules[friend][enemy]

const amountOfSigns = flow([map(tail), flatten, map(getActionCost), sum])(input)
const amountOfRounds = flow([map(getRoundCost), sum])(input)

export default sum([amountOfSigns, amountOfRounds])
