// https://adventofcode.com/2022/day/1
const input = inputs.input1.split('\n\n').map((item) => item.split('\n'))

export default Math.max(...input.map((item) => item.reduce((acc, curr) => acc + Number(curr), 0)))
