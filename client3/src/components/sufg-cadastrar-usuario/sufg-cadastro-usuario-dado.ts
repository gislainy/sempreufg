interface AlternativasPerguntasCadastroUsuario {
  title: string,
  correta: boolean
}

export interface PerguntaCadastroUsuario {
  _id: string,
  nome: string,
  alternativas: Array<AlternativasPerguntasCadastroUsuario>
}

export const listaDePerguntas: Array<PerguntaCadastroUsuario> = [
  {
    _id: "nome_da_mae",
    nome: "Qual nome da sua mãe?",
    alternativas: [
      {
        title: "Maria",
        correta: false,
      },
      {
        title: "Viviane",
        correta: true,
      },
      {
        title: "Antônia ",
        correta: false,
      },
      {
        title: "Vera",
        correta: false,
      },
      {
        title: "Joilma",
        correta: false,
      },
    ]
  },
  {
    _id: "nascimento",
    nome: "Qual é o ano do seu nascimento?",
    alternativas: [
      {
        title: "1987",
        correta: false,
      },
      {
        title: "1986",
        correta: false,
      },
      {
        title: "1997",
        correta: true,
      },
      {
        title: "1993",
        correta: false,
      },
      {
        title: "1990",
        correta: false,
      },
    ]
  },
  {
    _id: "naturalidade",
    nome: "Qual é a sua naturalidade?",
    alternativas: [
      {
        title: "Goiânia",
        correta: true,
      },
      {
        title: "São Bernado do Campo",
        correta: false,
      },
      {
        title: "Anicuns",
        correta: false,
      },
      {
        title: "São Paulo",
        correta: false,
      },
      {
        title: "Aparecida de Goiânia",
        correta: false,
      },
    ]
  },
  {
    _id: "curso",
    nome: "Qual curso você fez na UFG?",
    alternativas: [
      {
        title: "Ciẽncia da Computação",
        correta: false,
      },
      {
        title: "Medicina",
        correta: false,
      },
      {
        title: "Sistema de Informação",
        correta: true,
      },
      {
        title: "Engenharia Eletrica",
        correta: false,
      },
      {
        title: "Sociologia",
        correta: false,
      },
    ]
  },
  {
    _id: "matricula",
    nome: "Qual eram os três últimos digitos da sua matrícula?",
    alternativas: [
      {
        title: "666",
        correta: false,
      },
      {
        title: "178",
        correta: false,
      },
      {
        title: "254",
        correta: false,
      },
      {
        title: "637",
        correta: true,
      },
      {
        title: "621",
        correta: false,
      },
    ]
  },
]