import { Schema, model} from "mongoose";

const EsquemaZapatos = new Schema({
    name:String,
    modelo:String,
    talla:Number
})

export const ModeloZapatos = new model ("Tabla de zapatos", EsquemaZapatos)