import { Module } from '@nestjs/common';
import { AutoresController } from './autores.controller';
import {AutoresSevice }from './autores.service';

@Module({
 controllers:[AutoresController],
 providers:[AutoresSevice],
 exports:[]
})
export class AutoresModule {}