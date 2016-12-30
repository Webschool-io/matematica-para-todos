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

const res = colunas.reverse().reduce((acc, cur, i) => {
  switch (i) {
    case 0: acc.push( calculaProporção(cur).toFixed(2) )
      break
    case 1: acc.push( calculaProporção([colunas[1][0], acc[0]]).toFixed(2) )
      break
    case 2:  acc.push( calculaProporção([acc[1], colunas[2][0]]).toFixed(2) )
      break; 
  }
  if (i === 2) return parseFloat(acc[1]) + parseFloat(acc[2])
  return acc
}, [])

console.log(`
Imagine um casal com 4 gatos, os quais comem 25mˆ3 de raçao em 30 dias. Porém eles adotaram mais 1 gatinho que come o mesmo tanto que os outros! 

Vamos calcular quanto os 5 gatos irão comer em 5 dias.
`)
console.log('Resposta: os 5 gatos irão comer em 5 dias: ', res)
