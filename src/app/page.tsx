'use client'

import Link from 'next/link'

export default function Home() {
  return (
    <>
      <div className='w-screen h-screen px-60 py-10'>
        <header>
          <h2 className='mb-4 font-bold text-2xl'>Simulado</h2>
        </header>
        <section>
          <div>
            <span>
              Simulados destas tecnologias. Assim, os valores referências apresentados na calculadora refletem a variabilidade encontrada no mercado pelos diferentes fornecedores consultados, bem como diferentes formas de aquisição e/ou subscrição. São valores referenciais e não precisam ser seguidos caso haja uma informação mais completa a ser simulada.
            </span>
          </div>
        </section>
        <section className='mt-10'>
          <Link
            href="/scrum"
            className='py-2 px-8 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75'
          >Scrum</Link>
        </section>
      </div>
    </>
  )
}
