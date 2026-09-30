//Considere o seguinte trecho extraido do codigo de aula: JavaScrip

const txt = '{"nome": "Computador", "price": 50.9, "due-date": "2025-04-15"}';
const obj = JSON.parse(txt);
console.log(txt.name); // Retorna: undefined
console.log(obj.nome); // Retorna: "Computador"

/* 1. Por que a instrucao console.log(txt.name) retorna undefined?
A variavel txt armazena uma string (texto simples em formato JSON) e nao um objeto JavaScript.
Ao tentar aceder a txt.name, o interpretador do JavaScript procura 
uma propriedade chamada name no objeto primitivo String, a qual nao existe.
Dentro da propria string JSON, o nome da chave definida foi "nome" e nao "name". 
O acesso direto a propriedades atraves da notacao de ponto so passa a ser possivel 
apos a string ser convertida num objeto real em memoria, como foi feito com obj.nome 

/* 2. Qual e o papel dos metodos JSON.parse() e JSON.stringify() no desenvolvimento de sistemas web?
JSON.parse(): Converte uma string formatada em JSON num objeto/array de JavaScript. 
E fundamental para processar dados recebidos de APIs externas, respostas de servidores HTTP ou itens 
armazenados no localStorage. JSON.stringify(): Realiza o processo inverso: converte um objeto/array de 
JavaScript numa string de texto JSON. e essencial para serializar dados antes de os transmitir pela rede em 
requisicoes HTTP (por exemplo, no corpo de um metodo POST ou PUT).  