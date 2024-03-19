import { tipoPedido } from "../../../enum/tipoPedido";
import { iPedido } from "../../../interface/iPedido";

export class Bolo implements iPedido {
    tipo: tipoPedido
    tempoDePreparo: number
    descricao: string
    preco: number

    constructor(){
        this.tipo = tipoPedido.SOBREMESA
        this.tempoDePreparo = 10
        this.descricao = "Bolo"
        this.preco = 15
    }
}