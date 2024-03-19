import { tipoPedido } from "../enum/tipoPedido";

export interface iPedido {
    tipo: tipoPedido
    tempoDePreparo: number
    descricao: string
    preco: number
}