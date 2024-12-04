import { Schema, model} from "mongoose";

const EsquemaZapatos = new Schema({
    name:String,
    modelo:String,
    talla:Number
})

export const modelozapatos = new model ("Tabla de zapatos", esquemaZapatos)