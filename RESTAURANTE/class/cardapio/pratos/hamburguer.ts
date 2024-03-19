import { tipoPedido } from "../../../enum/tipoPedido";
import { iPedido } from "../../../interface/iPedido";

export class Hamburger implements iPedido {
    tipo: tipoPedido
    tempoDePreparo: number
    descricao: string
    preco: number

    constructor(){
        this.tipo = tipoPedido.PRATO
        this.tempoDePreparo = 10
        this.descricao = "Hamburger"
        this.preco = 40
    }
}