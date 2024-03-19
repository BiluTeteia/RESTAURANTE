import { tipoPedido } from "../../../enum/tipoPedido";
import { iPedido } from "../../../interface/iPedido";

export class Caipirinha implements iPedido {
    tipo: tipoPedido
    tempoDePreparo: number
    descricao: string
    preco: number

    constructor(){
        this.tipo = tipoPedido.BEBIDA
        this.tempoDePreparo = 2
        this.descricao = "Caipirinha"
        this.preco = 15
    }
}