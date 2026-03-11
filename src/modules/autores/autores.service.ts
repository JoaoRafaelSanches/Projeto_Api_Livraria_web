<<<<<<< HEAD
import { Injectable } from '@nestjs/common';

let autores = [
  {
    id: 1,
    nome: 'João da Silva',
    email: 'joao.silva@gmail.com',
  },
  {
    id: 2,
    nome: 'Maria Oliveira',
    email: 'maria.oliveira@gmail.com',
  },
  {
    id: 3,
    nome: 'Pedro Santos',
    email: 'pedro.santos@gmail.com',
  },
];

@Injectable()
export class AutoresService {
  listarAutores() {
    return autores;
  }

  listarAutor(id: number) {
    const autorEncontrado = autores.find((autor) => autor.id === id);

    if (!autorEncontrado) {
      return 'Autor não encontrado';
    }
    return autorEncontrado;
  }
}
=======
import { Injectable } from "@nestjs/common";
import { ok } from "assert";

let autores = [{
     id:1 
    ,nome :"brayan martins"
    ,email: "brayan@gmail.com"
},

{
    id:2 
    ,nome :"lucas martins"
    ,email: "lucas@gmail.com" 
},
{
    id:3 
    ,nome :"Midiel martins"
    ,email: "Midiel@gmail.com"
}
]

@Injectable()
export class AutoresSevice{
    ListarAutores(){
        //return "brayan martins "
        return autores;
    }

    ListarAutor(id: number){
        const autorEncontrado = autores.find((autor) => autor.id === id);
         if( !autorEncontrado){
            return "Nao encontrado!" 
         }
        return  autorEncontrado; 
    }
}
>>>>>>> c28f00821b50d6e71dff95df2871167a33882551
