import { Injectable } from "@nestjs/common";

@Injectable({})
export class AuthService{

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