import React from "react";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Cliente from "../core/Cliente";

export default function Home() {
  
  const clientes = [
    new Cliente('Anna', 22, '1'),
    new Cliente('Davi', 25, '2'),
    new Cliente('Arlyanne', 28, '3'),
    new Cliente('Amora', 33, '4'),
    new Cliente('Chicó', 36, '5')
    
  ]

  function clienteSelecionado(cliente : Cliente) {
    console.log(cliente.nome)
  }

  function clienteExcluido(cliente : Cliente) {
    console.log(`Excluir... ${cliente.nome}`)
  }
  
  return (
      <div className={`
           flex justify-center items-center h-screen
           bg-gradient-to-r from-blue-500 to-purple-500
            text-white`
      }>
        <Layout titulo="Cadastro Simples">
              <Tabela clientes={clientes}
                  clienteSelecionado={clienteSelecionado}
                  clienteExcluido={clienteExcluido}
              />
        </Layout> 
          
      </div>
  )
}