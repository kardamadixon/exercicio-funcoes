const curso = {
    id: 101,
    titulo: "Desenvolvimento Web",
    cargaHoraria: 60,
    professor: {
        nome: "Alex Green",
        email: "alex@gmail.com"
    },
    disciplinas: [
        { nome: "JavaScript Avançado", semestre: 1 },
        { nome: "ReactJS", semestre: 2 }
    ]
};

console.log(curso.professor.nome);
console.log(curso.disciplinas[1]);