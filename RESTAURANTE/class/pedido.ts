import {List} from "./arrays/list"

export class Pedido {
    itens: List
    ordem: number

    constructor(itens: any[]){
        for(let item of itens){
            this.itens.add(item)
        }
        this.ordem = 0
    }
}

