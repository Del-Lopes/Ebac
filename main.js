//
const alunos = [
  { nome: "Edward", nota: 10 },
  { nome: "Delonios", nota: 9 },
  { nome: "Robson", nota: 4 },
  { nome: "Rafael", nota: 6 },
  { nome: "Felipe", nota: 7 },
];

function AlunosNotaMaiorIgualSeis(lista) {
  return lista.filter((aluno) => aluno.nota >= 6);
}
const AlunoAprovado = AlunosNotaMaiorIgualSeis(alunos);
console.log(AlunoAprovado);
