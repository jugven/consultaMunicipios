import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class AppService {   
  constructor(private readonly httpService: HttpService) {}

  async getMunicipiosLetra(nome?: string): Promise <any[]> {
    const response = await firstValueFrom(this.httpService.get('https://servicodados.ibge.gov.br/api/v1/localidades/municipios'));
    return response.data;
  }

  async getMunicipios(): Promise <any[]>{
    const response = await firstValueFrom(this.httpService.get('https://servicodados.ibge.gov.br/api/v1/localidades/municipios'));
    return response.data;
  }
  getHello(): string {
    return 'Hello World!';
  }

}


