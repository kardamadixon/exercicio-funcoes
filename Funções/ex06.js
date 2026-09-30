// Analise o codigo abaixo sem executalo:

executar();
function executar(){
var taxa = 1.05;
console.log("Executando cálculo...");
}
console.log(taxa);

/* 1. A chamada executar() na primeira linha funcionara? Justifique com base no
conceito de Function Hoisting.
R= Sim, funcionara normalmente Em JavaScript, as declaracoes tradicionais de funcao
(function declaration) sofrem o processo de Function Hoisting (icamento/elevacao). 
Durante a fase de compilacao/criacao, o motor do JavaScript move a declaracao da funcao 
e todo o seu corpo para o topo do seu escopo de execucao. Portanto, a funcao ja esta 
totalmente disponivel e definida na memoria no momento em que e invocada na primeira linha.

/* 2. O que acontecera ao tentar executar console.log(taxa) na ultima linha?
Justifique com base no escopo de variaveis.
R= Ocorrera um erro em tempo de execucao: ReferenceError: taxa is not defined.
A variavel taxa foi declarada usando var dentro do corpo da funcao executar(). 
Variaveis declaradas com var possuem escopo de funcao (ou escopo local). 
Isso significa que taxa so existe e so pode ser acessada dentro dos limites da 
funcao executar(). Ao tentar acessa-la fora desse bloco no escopo global 
(com console.log(taxa)), o interpretador nao encontra essa variavel e lanca um erro de referencia.