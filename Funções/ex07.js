function processarValor(operacao, a, b) {
    return operacao(a, b);
}

const multiplicar = (x, y) => x * y;
const maior = (x, y) => Math.max(x, y);

console.log(processarValor(multiplicar, 5, 4));
console.log(processarValor(maior, 12, 25));