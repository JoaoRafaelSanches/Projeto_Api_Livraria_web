import { Module } from '@nestjs/common';
import { AutoresController } from './autores.controller';
<<<<<<< HEAD


@Module({
 controllers:[AutoresController],
 providers:[],
=======
import {AutoresSevice }from './autores.service';

@Module({
 controllers:[AutoresController],
 providers:[AutoresSevice],
>>>>>>> c28f00821b50d6e71dff95df2871167a33882551
 exports:[]
})
export class AutoresModule {}