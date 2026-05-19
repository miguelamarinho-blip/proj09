// 1ª Parte: Array criado e corrigido (Sua parte!)
let alunos = [
    {nome: "Letycia", idade: 16, disciplinaFavorita: "História"},
    {nome: "Vinicius Além do Ar", idade: 17, disciplinaFavorita: "Matemática"},
    {nome: "Livia", idade: 16, disciplinaFavorita: "Biologia"},
    {nome: "Isabella", idade: 15, disciplinaFavorita: "Educação Física"},
    {nome: "Miguel Arcanjo", idade: 16, disciplinaFavorita: "Educação Física"}
];

// 2ª Parte: Acessando os dados solicitados
let primeiroNome = alunos[0].nome;
let ultimaDisciplina = alunos[4].disciplinaFavorita;

// Mostrando os resultados no console
console.log("Nome do primeiro aluno:", primeiroNome); // Vai mostrar: Letycia
console.log("Disciplina favorita do último aluno:", ultimaDisciplina); // Vai mostrar: Educação Física