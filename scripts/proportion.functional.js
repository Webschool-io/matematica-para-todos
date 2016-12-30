/*
4 gatos = 25mˆ3 = 30 dias
5 gatos =   x   = 5 dias
*/
const col1 = [4, 5]
const col2 = [25]
const col3 = [30, 5]

const colunas = [col1, col2, col3]

const calculaProporção = (valores) => 
valores.sort((a, b) => (a < b)).reduce((a, b) => parseFloat(a / b))

const res = colunas.reverse().reduce((a, b, i) => {
  switch (i) {
    case 0: a.push( calculaProporção(b).toFixed(2) )
      break
    case 1: a.push( calculaProporção([colunas[1][0], a[0]]).toFixed(2) )
      break
    case 2:  a.push( calculaProporção([colunas[2][0], a[1]]).toFixed(2) )
      break 
  }
  if (i === 2) return parseFloat(a[1]) + parseFloat(a[2])
  return a
}, [])

console.log(`
Imagine um casal com 4 gatos, os quais comem 25mˆ3 de raçao em 30 dias. 
Porém eles adotaram mais 1 gatinho que come o mesmo tanto que os outros! 

Vamos calcular quanto os 5 gatos irão comer em 5 dias.
`)
console.log('Resposta: os 5 gatos irão comer em 5 dias: ' + res + 'm^3')
