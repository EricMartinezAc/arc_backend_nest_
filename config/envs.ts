
import 'dotenv/config'
import * as joi from 'joi' //validador de esquema

interface Envs {
    //como se quiere que luzcan
    PORT: number,
    DATABASE_URL: string
}

const envSchema= joi.object({
    //validaciones de env
    PORT: joi.number().required(),
    DATABASE_URL: joi.string().required()
})
.unknown(true)
const { error, value } = envSchema.validate(process.env) //ejecuta validacion

if(error) {
    //si hay error
    throw new Error(`Config validation error: ${error.message}`)
}
//tipado
const envVars: Envs = value
console.log(envVars)

//exportar
export const envs = {
    PORT: envVars.PORT,
    DATABASE_URL: envVars.DATABASE_URL
}