import { BadRequestException } from "@nestjs/common";
import { Request, Response, NextFunction } from "express";

//request e response são interfaces dizendo que o objeto é do tipo request/response
export function wordCheckMiddleware(req: Request, res: Response, next: NextFunction){
  if (/^[a-zA-ZÀ-ÖØ-öø-ÿ ]+$/.test(req.params.word)){
    console.log(req.params.word)
    next();
  }
  else{
    console.log(req.params.word)
    throw new BadRequestException("não deve conter caracteres especiais")
  }
}