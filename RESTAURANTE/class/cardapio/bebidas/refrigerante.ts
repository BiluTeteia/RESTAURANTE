import { tipoPedido } from "../../../enum/tipoPedido";
import { iPedido } from "../../../interface/iPedido";

export class Refrigerante implements iPedido {
    tipo: tipoPedido
    tempoDePreparo: number
    descricao: string
    preco: number

    constructor(){
        this.tipo = tipoPedido.BEBIDA
        this.tempoDePreparo = 1
        this.descricao = "Refrigerante"
        this.preco = 5
    }
}