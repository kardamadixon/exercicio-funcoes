const entradaJson = '{"cliente": "Carlos", "ativo": true, "desconto": 0.1, "valorTotal": 200.0}';

const objCliente = JSON.parse(entradaJson);
objCliente.valorFinal = objCliente.valorTotal - (objCliente.valorTotal * objCliente.desconto);
const saidaJson = JSON.stringify(objCliente);
console.log(saidaJson);