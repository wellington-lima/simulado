'use client'

import { useState, useEffect } from 'react'
import { IQuestao } from '@/interfaces/interfaces';

export default function Etapa01() {
  const [questoes, setQuestoes] = useState<IQuestao[]>();

  useEffect(() => {
    fetch(`/api/?materia=1`)
      .then((data) => data.json())
      .then((response) => setQuestoes(response))
  }, []);

  return (
    <>
      <div className='h-auto m-32 overflow-hidden'>
        <form className="mt-4" action="">
          {questoes != null &&
            questoes.map((questao) => (
              <>
                <h2 className='font-bold text-sky-900 text-lg'>
                  {questao.pergunta}
                </h2>

                { questao.respostas.map((resposta, index) => (
                  <div key={questao.id} className="h-14 content-center rounded-xl px-4 py-1 mt-2 bg-slate-100 hover:bg-slate-200 hover:drop-shadow-lg">
                    <div className="items-center"><span className='text-sky-900 '> {resposta.indice}) {resposta.valor}</span></div>
                  </div>
                ))

                }
              </>
            ))
          }
        </form>
      </div>
    </>
  )
}