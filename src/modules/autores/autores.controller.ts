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

    

     
    
}
