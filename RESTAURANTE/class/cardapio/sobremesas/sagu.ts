import { tipoPedido } from "../../../enum/tipoPedido";
import { iPedido } from "../../../interface/iPedido";

export class Sagu implements iPedido {
    tipo: tipoPedido
    tempoDePreparo: number
    descricao: string
    preco: number

    constructor(){
        this.tipo = tipoPedido.SOBREMESA
        this.tempoDePreparo = 3
        this.descricao = "Sagu"
        this.preco = 5
    }
}