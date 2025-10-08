import { Injectable } from '@nestjs/common';


@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getMunicipios(): string[]{
    const munic: string[] = [];
    for (let i = 0; i < 10; i++ ){
      munic.push('oii');
    }
    return munic
  }
}

