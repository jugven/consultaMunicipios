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

  getFibonacci(n): number{
    if (n === 0){
      return 0;
    }
    if (n === 1){
      return 1;
    }
    else if (n < 30) { return this.getFibonacci(n-1) + this.getFibonacci(n-2)}
    else{
      let a = 0;
      let b = 1;
      for (let i = 0; i <= n; i++){
        let r = a + b;
        a = b;
        b = r;
      }
      return b;
    }
  }

  getDateTime(): String{
    const now = new Date();

    const dateTimeSp = now.toLocaleString('pt-br',{
      timeZone: 'America/Sao_Paulo'
    })
    return dateTimeSp;
  }
  

  getHello(): string {
    return 'Hello World!';
  }
}


