import { iQueue } from "../../interface/iQueue";

export class Queue implements iQueue{
    private items: any[]; 

    constructor() {
        this.items = [];
    }

    enqueue(item: any): void {
        this.items.push(item);
    }
    dequeue(): any | null {
        if (this.isEmpty()) {
            return null; 
        }
        return this.items.shift(); 
    }
    peek(): any | null {
        if (this.isEmpty()) {
            return null; 
        }
        return this.items[0]; 
    }
    getSize(): number {
        return this.items.length; 
    }
    isEmpty(): boolean {
        return this.items.length === 0; 
    }
}