import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class AppService {   
  constructor(private readonly httpService: HttpService) {}

  
  async getMunicipios(): Promise <any[]>{
    const response = await firstValueFrom(this.httpService.get('https://servicodados.ibge.gov.br/api/v1/localidades/municipios'));
    const data = response.data;
    return data;
  }

  // async getMunicipiosLetra(nome?: string): Promise <any[]> {
  //   const response = await firstValueFrom(this.httpService.get('https://servicodados.ibge.gov.br/api/v1/localidades/municipios?orderBy=nome'));
  //   const data = response.data;
  //   return data;
    

  //   // if (nome) {
  //   //   const filteredData = data.filter()
  //   // }
  // }

  getHello(): string {
    return 'Hello World!';
  }

}


