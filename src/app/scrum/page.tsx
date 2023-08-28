'use client'

import { useState, useEffect } from 'react'
import { IQuestao } from '@/interfaces/interfaces';

export default function Scrum() {
  const [questoes, setQuestoes] = useState<IQuestao[]>();
  const [activeButton, setActiveButton] = useState(0);
  const [respostaSelecionada, setRespostaSelecionada] = useState("");
  const [respostaCerta, setRespostaCerta] = useState(false);

  useEffect(() => {
    fetch(`/api/?materia=1`)
      .then((data) => data.json())
      .then((response) => setQuestoes(response))
  }, []);

  const selecionarResposta = (certa: boolean, indice: string) => {
    console.log({ certa, respostaSelecionada });
    setRespostaCerta(certa);
    setRespostaSelecionada(indice);


    
  }

  const responder = () => {
    if(respostaCerta) {
      alert("Resposta certa")
    } else {
      alert("Resposta errada")
    }
      
    
  }

  return (
    <>
      <div className='h-auto m-32 overflow-hidden'>
        <form className="mt-4" action="">
          {questoes != null &&
            questoes.map((questao) => (
              <>
                <h3 key={questao.id} className='font-medium text-sky-900 text-lg mb-10'>
                  {questao.pergunta}
                </h3>

                { questao.respostas.map((resposta, index) => (
                  <div 
                    key={resposta.indice} 
                    className={`
                      h-14
                      content-center
                      rounded-xl
                      px-4
                      py-1
                      mt-2
                      bg-slate-100
                      hover:drop-shadow-lg
                      active:bg-sky-200
                      cursor-pointer
                      ${respostaSelecionada == resposta.indice ? "bg-sky-200" : "bg-slate-100"}`
                    }

                    onClick={() => selecionarResposta(resposta.certa ? true : false, resposta.indice)}
                  >
                    <div className="items-center"><span className='text-sky-900 '> {resposta.indice}) {resposta.valor}</span></div>
                  </div>
                  ))
                }
              </>
            ))
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
            />
          </section>
        </form>
      </div>
    </>
  )
}