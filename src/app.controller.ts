import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { firstValueFrom } from 'rxjs';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('municipios')//rota 
  async getMunicipios(): Promise<any[]> {
    const municipios = await this.appService.getMunicipios();
    const nomes = municipios.map(m => m.nome);
    console.log(nomes.slice(0, 10));
    return nomes;
  }

  // @Get('municipios/:nome?')//rota (n funciona ainda)
  // async getMunicipiosLetra(@Param('nome') nome?: string): Promise<any[]> {
  //   const municipios = await this.appService.getMunicipiosLetra(nome);
  //   console.log(municipios);
  //   return municipios;
  // }


}