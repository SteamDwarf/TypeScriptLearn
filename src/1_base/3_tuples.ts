//Array can store only two elements, only number and string
const skill: [number, string] = [1, 'React'];

const id = skill[0];
const skillName = skill[1];
//const something = skill[2]; ERROR

//Optional element
const color: [number, number, number, number?] = [255, 0, 1]
const color2: [number, number, number, number?] = [255, 0, 1, 0.5]

//Optional spread
const opt: [number, ...string[]] = [1]
const opt2: [number, ...string[]] = [1, 'hello', 'world']
