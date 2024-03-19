import { tipoPedido } from "../../../enum/tipoPedido";
import { iPedido } from "../../../interface/iPedido";

export class Refrigerante implements iPedido {
    tipo: tipoPedido
    tempoDePreparo: number
    descricao: string
    preco: number

    constructor(){
        this.tipo = tipoPedido.PRATO
        this.tempoDePreparo = 15
        this.descricao = "Sushi"
        this.preco = 60
    }
}