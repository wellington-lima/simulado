interface IResposta {
  indice: string
  valor: string
  respostaCerta: boolean
  selecionar(): void
}

export function Resposta({indice, valor, respostaCerta, selecionar}: IResposta) {



  return (
    <>
      <div
        className="h-14 content-center rounded-xl
          px-4
          py-1
          mt-2
          bg-slate-100
          hover:drop-shadow-lg
          hover:bg-slate-200
          cursor-pointer"

          onClick={()=>selecionar()}
      >
        <div className="items-center"><span className='text-sky-900 '> {indice}) {valor}</span></div>
      </div>
    </>
  )
}