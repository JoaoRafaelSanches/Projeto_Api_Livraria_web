<<<<<<< HEAD
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
=======
import { Controller, Get, Param, ParseIntPipe } from "@nestjs/common";
import { AutoresSevice } from "./autores.service";

@Controller("autores")
export class AutoresController{
 
    constructor(private readonly  autoresSevice: AutoresSevice ) {}

    @Get("/Listar-autores")
    ListarAutores(){
       return this.autoresSevice.ListarAutores();
    
    }

    @Get("/Listar-autor/:id")
    ListarAutor(@Param('id', ParseIntPipe)id: number){
        return this.autoresSevice.ListarAutor(id);
          
    }

    

     
    
>>>>>>> c28f00821b50d6e71dff95df2871167a33882551
}
