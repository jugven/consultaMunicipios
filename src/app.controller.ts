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

  @Get('municipios/:nome?')//rota 

  async getMunicipiosLetra(@Param('nome') nome?: string): Promise<any[]> {
    const municipios = await this.appService.getMunicipiosLetra(nome);
    console.log(municipios);
    return municipios;
  }

    @Get('municipios')//rota 

  async getMunicipios(): Promise<any[]> {
    const municipios = await this.appService.getMunicipios();
    console.log(municipios);
    return municipios;
  }
}