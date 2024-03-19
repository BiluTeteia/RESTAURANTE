import { tipoPedido } from "../../../enum/tipoPedido";
import { iPedido } from "../../../interface/iPedido";

export class Sorvete implements iPedido {
    tipo: tipoPedido
    tempoDePreparo: number
    descricao: string
    preco: number

    constructor(){
        this.tipo = tipoPedido.SOBREMESA
        this.tempoDePreparo = 1
        this.descricao = "Sorvete"
        this.preco = 10
    }
}