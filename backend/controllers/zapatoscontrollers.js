import { ModeloZapatos } from "../models/zapatosmodels";

ModeloZapatos.create({
    name:"adidas",
    modelo:"campus",
    talla:10
})

export const test =() =>{
    console.log("Funciona el controlador")
}