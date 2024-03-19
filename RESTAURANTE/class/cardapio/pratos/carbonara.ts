import { tipoPedido } from "../../../enum/tipoPedido";
import { iPedido } from "../../../interface/iPedido";

export class Carbonara implements iPedido {
    tipo: tipoPedido
    tempoDePreparo: number
    descricao: string
    preco: number

    constructor(){
        this.tipo = tipoPedido.PRATO
        this.tempoDePreparo = 9
        this.descricao = "Carbonara"
        this.preco = 30
    }
}