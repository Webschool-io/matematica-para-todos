/*
4 gatos = 25mˆ3 = 30 dias

5 gatos =   x   = 5 dias
*/

const col1 = [4, 5]
const col2 = [25]
const col3 = [30, 5]

const colunas = [col1, col2, col3]

const calculaProporção = (valores) => 
valores.sort((a, b) => (a < b)).reduce((acc, cur) => acc / cur)

const etapa1 = (valores) => calculaProporção(valores).toFixed(2)
const etapa2 = (valores) => calculaProporção(valores).toFixed(2)
const etapa3 = (valores) => calculaProporção(valores).toFixed(2)

const proporção1 = etapa1(colunas[2])
const proporção2 = etapa2([colunas[1][0], proporção1])
const proproção3 = etapa3([colunas[0][0], proporção2])
const resultado = parseFloat(proporção2) + parseFloat(proproção3)

// console.log(calculaProporção([5,2]))
console.log('proporção 1: ', proporção1)
console.log('proporção 2: ', proporção2)
console.log('proproção 3: ', proproção3)
console.log('resultado: ', resultado)
