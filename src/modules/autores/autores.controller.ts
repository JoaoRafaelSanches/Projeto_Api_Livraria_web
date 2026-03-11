import { Controller, Get, Param } from '@nestjs/common';
import { AutoresService } from './autores.service';

@Controller('autores')
export class AutoresController {
  constructor(private readonly autoresService: AutoresService) {}

  @Get('/Listar-autores')
  ListarAutores() {
    return this.autoresService.listarAutores();
  }

  @Get('/listar-autor/:id')
  ListarAutor(@Param('id, ParcelIntPipe') id: number) {
    return this.autoresService.listarAutor(id);
  }
}
