import { Injectable } from '@nestjs/common';
import { ok } from 'assert';

let autores = [
  {
    id: 1,
    nome: 'brayan martins',
    email: 'brayan@gmail.com',
  },

  {
    id: 2,
    nome: 'lucas martins',
    email: 'lucas@gmail.com',
  },
  {
    id: 3,
    nome: 'Midiel martins',
    email: 'Midiel@gmail.com',
  },
];

@Injectable()
export class AutoresSevice {
  ListarAutores() {
    //return "brayan martins "
    return autores;
  }

  ListarAutor(id: number) {
    const autorEncontrado = autores.find((autor) => autor.id === id);
    if (!autorEncontrado) {
      return 'Nao encontrado!';
    }
    return autorEncontrado;
  }
}
