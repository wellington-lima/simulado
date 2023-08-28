interface IResposta {
  indice: string
  valor: string
  certa?: boolean
}

export interface IQuestao {
  id: number
  ano?: number
  banca?: string
  orgao?: string
  prova?: string
  pergunta: string
  respostas: IResposta[]
}