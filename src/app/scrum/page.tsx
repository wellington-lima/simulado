'use client'

import { useState, useEffect } from 'react'
import { IQuestao } from '@/interfaces/interfaces'
import { Resposta } from '../components/Resposta'

export default function Scrum() {
  const [questoes, setQuestoes] = useState<IQuestao[]>()
  const [questao, setQuestao] = useState<IQuestao>()
  const [numQuestao, setNumQuestao] = useState(0);
  const [activeButton, setActiveButton] = useState(0)
  const [respostaSelecionada, setRespostaSelecionada] = useState("")
  const [respostaCerta, setRespostaCerta] = useState(false)

  useEffect(() => {
    fetch(`/api/?materia=1`)
      .then((data) => data.json())
      .then((response) => {
        setQuestoes(response)
      })
  }, [])

  const proxima = () => {
    setNumQuestao(numQuestao + 1);
  }

  const selecionarResposta = () => {
    //setRespostaCerta(certa)
    //setRespostaSelecionada(indice)
    console.log({ respostaCerta, respostaSelecionada })
  }

  const responder = () => {
    if (respostaCerta) {
      alert("Resposta certa")
    } else {
      alert("Resposta errada")
    }
  }

  return (
    <>
      <div className='h-auto m-32 overflow-hidden'>
        <div>Questão {numQuestao + 1} de {questoes?.length} </div>
        <div>Resposta selecionada: {respostaSelecionada}: { JSON.stringify(respostaCerta)}</div>
        <form className="mt-4" action="">
          {questoes &&
            <>
              <h3 className='font-medium text-sky-900 text-lg mb-10'>
                {questoes[numQuestao].pergunta}
              </h3>

              {questoes[numQuestao].respostas.map((resposta, index) => (
                <Resposta 
                  indice={resposta.indice}
                  valor={resposta.valor}
                  respostaCerta={Boolean(resposta.certa)}
                  selecionar={()=>setRespostaSelecionada()}  
                />
              ))}
            </>
          }

          <section className='mt-10 flex justify-end'>
            <input
              type="button"
              value="Responder"
              className="py-2 mx-2 px-8 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 cursor-pointer"
              onClick={responder}
            />

            <input
              type="button"
              value="Próximo"
              className="py-2 mx-2 px-8 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 cursor-pointer"
              onClick={proxima}
            />
          </section>
        </form>
      </div>
    </>
  )
}