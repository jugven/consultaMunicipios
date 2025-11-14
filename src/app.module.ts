import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HttpModule } from '@nestjs/axios';
import { wordCheckMiddleware } from './wordMiddleware';

@Module({
  imports: [HttpModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(c: MiddlewareConsumer){
    c
    .apply(wordCheckMiddleware)
    .forRoutes('palindromo/:word?')
  }
}
