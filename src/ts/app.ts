const n = (): number => {
  return 2
}

const s: string = 'fff'
console.log(s);

const isFe: boolean = true;
const isLoad: boolean = false;
let int: number = 24;
int = 2
const float: number = 2e22
let str: string = 'd'
str = 'ds'


let numArr: [string, number, number, number] = ['s', 2, 1, 3]

console.log(numArr)

let ds: any = '222d'
ds = 22

const funk = (x: number): void => {
  console.log(x)
}

funk(10)

type castType = string | number
let a1: castType = 11
let a2: castType = '22'
// let a3: castType = []
 
interface Rec {
  readonly id: string
  color?: string
  size: {
    width: number,
    height: number
  }
}

const rec: Rec = {
  id: 'id',
  color: '#fff',
  size: {
    width: 11,
    height: 1
  }
}
rec.color = 'black'
console.log(rec)


