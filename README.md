# Matemática para todos

Eu, Suissa, sempre falei e acredito que podemos ensinar matemática para qualquer pessoa, utilizando alguns conceitos de programação.

![](http://vignette3.wikia.nocookie.net/meme/images/b/b6/Y_wat_2.jpg/revision/latest?cb=20150614223422)

O primeiro que sempre me vem a cabeça é: a **tipagem forte**.

> Ué Suissa você não usa JS?

> - **Uso, mas curto tipos também. Obrigado programação funcional.**

![casinha geométrica](http://www.eunascinoviladaserra.com.br/wp-content/uploads/2014/08/brinquedo-5.jpg)

Essa criança já assimilou, de forma empírica, o conceito de tipos.

> Quantos tipos você vê abaixo?

![](http://gepettobrinquedos.com.br/loja/wp-content/uploads/2013/01/encaixe_form-geo.jpg)


Mas se isso não lhe convenceu, analise a sequência abaixo:


``` 
 1 
+5 
__________
 6 
``` 

``` 
 4 
+5 
__________
 9 
``` 

``` 
 3 
+4 
__________
 7 
``` 

``` 
 2 
+3 
__________
 5 
``` 

> O que você acha que isso significará para uma criança? Que problema está sendo resolvido? Isso muito abstrato,.

Agora vamos utilizar alguns tipos para dar sentido aos cálculos:

``` 
 1 bala
+5 balas
__________
 6 balas
``` 

``` 
 4 trilhões
+5 trilhões
__________
 9 trilhões
``` 

``` 
 3 K
+4 K
__________
 7 K
``` 

``` 
 2e7 // 20000000
+3e7 // 30000000
__________
 5e7 // 50000000
``` 

> **- O que você achou agora?**

E hoje estava curtindo umas palestras do TED quando me deparei com essa: [Math isn't hard, it's a language](https://youtu.be/3icoSeGqQtY?t=4m39s) 


Porém sempre pensei em iniciar o ensino das operações mostrando-as de forma visual e até já demonstrei algumas vezes aqui em casa. Pois para mim é muito mais lógico, para alguém que não possua nenhum pré-conhecimento matemático, que a pessoa visualize o problema a ser solucionado.

Logo depois veio essa
[How you can be good at math, and other surprising facts about learning | Jo Boaler | TEDxStanford](https://www.youtube.com/watch?v=3icoSeGqQtY) que para meu espanto corroborou o que eu sempre falei. 

Sabendo que, quando calculamos algo, várias áreas do cérebro, o que inclui o córtex visual, os números não são visuais, eles precisam de mais alguma coisa para ter sentido, além disso creio que a Matemática, assim como a Programaçao, só deveriam ser ensinadas após o aluno ter problemas a serem resolvidos. Acredito que quando você conecta algo abstrato com algo que lhe é concreto, você gera uma ligação da teoria com a prática.

O interessante de utilizar-se a programação é porque ela ao mesmo tempo que é abstrata, tornar-se-á concreta no momento da sua execução (quando mostrará seu resultado)

Não entrarei nesse assunto aqui, mas levo esse mesmo conceito para explicar programação para qualquer um.

> **Agora quero SUA atenção!** 
> 
> Você que desejas contribuir na educação de qualquer pessoa, esta é sua oportunidade de contribuir com a comunidade Open Source e ainda fomentar uma educaçao autodidata a qual é o cerne da Webschool.

## Ideia

Quando você chegar em [4m39s da última palestra](https://www.youtube.com/watch?v=3icoSeGqQtY&feature=youtu.be&t=4m39s) ela irá mostrar diversas formas visuais de demonstrar algumas operações. 

Vale a pena conferir! Minha dica é: Wayne's Wolrd

### Desafio

Desenvolver, **visualmente**, alguma das formas mostradas no vídeo, precisando **obrigatoriamente** implementar a soma e o quadrado.

**Você poderá fazer com qualquer framework ou biblioteca de JS, ou até sem JS nenhum!**

As seguintes operações são bônus:

- subtração
- multiplicação
- divisão
- **raiz quadrada**


> E aí? Topa o desafio?

*ps: um site muito bom para visualizar códigos rodando é [http://www.pythontutor.com/](http://www.pythontutor.com/)*. Além disso você pode conferir alguns tipos do JS [aqui](http://www.pythontutor.com/visualize.html#code=var%20intNum%20%3D%2042%3B%0Avar%20floatNum%20%3D%203.14159%3B%0Avar%20nanNum%20%3D%20NaN%3B%0Avar%20infNum%20%3D%20Infinity%3B%0Avar%20ninfNum%20%3D%20-Infinity%3B%0A%0Avar%20str%20%3D%20%22hello%20world%22%3B%0A%0Avar%20boolTrue%20%3D%20true%3B%0Avar%20boolFalse%20%3D%20false%3B%0A%0Avar%20nullVal%20%3D%20null%3B%0Avar%20undefVal%20%3D%20undefined%3B%0A%0Avar%20lst%20%3D%20%5B'a',%20'b',%203,%204,%205,%20'f'%5D%3B%0A%0Avar%20obj%20%3D%20%7Bname%3A%20'John',%20age%3A%2035,%20hasChildren%3A%20true%7D%3B%0A%0Avar%20i%20%3D%205%3B%0Avar%20obj_lst%20%3D%20%5Bi,%20%7Bfoo%3A%20i%2B1,%20poop%3A%20%5B1,%202,%203%5D%7D,%20%7Bbar%3A%20i%2B2%7D%5D%3B%0A%0Aobj.name%20%3D%20'Jane'%3B&cumulative=false&curInstr=14&heapPrimitives=false&mode=display&origin=opt-frontend.js&py=js&rawInputLstJSON=%5B%5D&textReferences=false).

![](http://weknowmemes.com/generator/uploads/generated/g1352217865361546904.jpg)

## Regra de 3

> **Ensinarei-te uma técnica que percebi que calcula automaticamente usando apenas proporções!**


Imagine um casal com 4 gatos, os quais comem 25mˆ3 de ração em 30 dias. Porém eles adotaram mais 1 gatinho que come o mesmo tanto que os outros! 

Vamos calcular quanto os 5 gatos irao comer em 5 dias.

```
4 gatos = 25mˆ3 = 30 dias

5 gatos =   x   = 5 dias
```

Uma dica que sempre dou é:

> Visulize o que o problema pede como resultado. `5 dias`

Entao em vez de começar calculando o quanto 5 gatos comem vamos começar pelo final, precisamos calcular qual a proporçao entre: 30 dias e 5 dias.

No caso é: `6` 

> Por que fizemos isso?
>
> -**Pense comigo!**

Se a proporcao é 6, vamos calcular a proporçao da comida:

```
25 / 6 = 4.16
```

Com isso sabemos que 4 gatos comem 4.16m^3 de ração em 5 dias e agora?? Precisamos calcular isso para 5 gatos, eu prefiro fazer assim:

> -**Calculo quanto 1 gato come e depois somo esse valor ao 4.16, veja comigo:**


```
4.16 / 4 = 1.04
4.16 + 1.04 = 5.20
```

Logo nosso resultado é: 

> Os 5 gatos comem 5.2mˆ3 em 5 dias.

Eu ainda nao ensinarei como resolver por Regra de 3 Composta pois eu acho essa forma muito mais simples, entao vamos criar uma fórmula para isso.

```js
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
```



### Exercício

**Utilize o código anterior para agilizar sua vida.**

Imagine um casal com 4 gatos, os quais comem 25mˆ3 de ração a cada 60 dias. Porém eles adotaram mais 1 gatinho que come o mesmo tanto que os outros! Entretanto o custo de R$30 por pacote de ração de 10Kg.

Calcular quanto os 5 gatos irao comer em 1 semana e qual o custo anual com rações, se possível em R$ e $ (dólar).








