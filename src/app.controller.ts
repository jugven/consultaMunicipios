import { BadRequestException, Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { promises } from 'fs';

const pathMunicipios = 'municipios.txt';
const pathFibonacci = 'fib.txt'; //ta certo???

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { };

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('municipios/:nome?')//rota 
  async getMunicipios(@Param('nome') nomeInput?: string): Promise<any[]> {
    const municipios = await this.appService.getMunicipios();
    if (nomeInput) {
      const nomes = municipios.map(m => m.nome);
      const filteredByNome = nomes.filter(n => n.toLowerCase().startsWith(nomeInput.toLocaleLowerCase()));
      const topTen = filteredByNome.slice(0, 10);
      await promises.appendFile(pathMunicipios, topTen.join('\n') + '\n');
      return topTen;
    } else {
      return municipios
    }

  }
  @Get('fibonacci/:num?')//rota 
  async fibonacci(@Param('num') numInput?: string): Promise<number> {
    const n = parseInt(numInput);

    if (isNaN(n)) {
      throw new BadRequestException("input is not a number! ");
    }
    const r = this.appService.getFibonacci(n);
    const d = this.appService.getDateTime();

    await promises.appendFile(pathFibonacci, `Resultado: ${r} \n Busca realizada em ${d} \n \n`);
    return r;
  }


}