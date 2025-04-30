//
const alunos = [
  { nome: "Edward", nota: 10 },
  { nome: "Delonios", nota: 9 },
  { nome: "Robson", nota: 4 },
  { nome: "Rafael", nota: 6 },
  { nome: "Felipe", nota: 7 },
];

const AlunoAprovado = alunos.filter((item) => item.nota >= 6);

console.log(AlunoAprovado);
