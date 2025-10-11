import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import {promises} from 'fs';

const path = 'municipios.txt'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('municipios/:nome?')//rota 
  async getMunicipios(@Param('nome') nomeInput?: string): Promise<any[]> {
    const municipios = await this.appService.getMunicipios();
    const nomes = municipios.map(m => m.nome);
    const filteredByNome = nomes.filter(n => n.toLowerCase().startsWith(nomeInput.toLocaleLowerCase()))
    const topTen = filteredByNome.slice(0, 10);
    await promises.appendFile(path, topTen.join('\n') + '\n');
    return topTen;
  }
}