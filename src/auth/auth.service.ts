import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable({})
export class AuthService{

    constructor(private prisma: PrismaService){
        
    }
    signup(){
        return {
            msg: "this is the sign up method"
        }
    }

    signin(){
        return {
            msg: "this is the sign in method"
        }
    }
}