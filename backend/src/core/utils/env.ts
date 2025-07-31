import dotenv from "dotenv";
dotenv.config();

export function getOrThrow(env: string) {
    const value = process.env[env];
    if(value === undefined){
        throw new Error(`'${env}' is required env`)
    }
    
    return value;
}
