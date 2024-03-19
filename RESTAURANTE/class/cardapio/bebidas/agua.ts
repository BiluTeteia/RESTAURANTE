import { tipoPedido } from "../../../enum/tipoPedido";
import { iPedido } from "../../../interface/iPedido";

export class Agua implements iPedido {
    tipo: tipoPedido
    tempoDePreparo: number
    descricao: string
    preco: number

    constructor(){
        this.tipo = tipoPedido.BEBIDA
        this.tempoDePreparo = 1
        this.descricao = "Agua"
        this.preco = 3
    }
}