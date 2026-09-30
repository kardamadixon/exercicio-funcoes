/* 
Exercicio 2: Chaves Especiais

1. Por que "due-date" precisa de aspas e "price" nao?
- Regra de identificadores do JavaScript: chaves sem aspas precisam seguir 
  as regras de nomes de variaveis validas (comecar com letras, _ ou $, e nao conter hifens).
- "price" contem apenas letras validas, portanto as aspas sao opcionais.
- "due-date" contem um hifen (-), que o interpretador do JavaScript le como 
  o operador aritmetico de subtracao (menos). Por isso, as aspas sao obrigatorias 
  para indicar que e uma string literal representando o nome da chave.

2. Como acessar o valor de "due-date" no obj1?
- Deve-se usar obrigatoriamente a notacao de colchetes (bracket notation):
*/

// Exemplo demonstrativo no codigo:
const obj1 = {
  price: 50.9,
  "due-date": "2025-04-15"
};

// Acessando price (notacao de ponto):
console.log(obj1.price);

// Acessando due-date (notacao de colchetes com string):
console.log(obj1["due-date"]); 

//Fazer obj1.due-date resultaria em erro (tentativa de subtrair 'date' de 'obj1.due').