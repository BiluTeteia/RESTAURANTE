export interface iQueue {
    enqueue(item: any): void; 
    dequeue(): any | null; 
    peek(): any | null; 
    getSize(): number;
    isEmpty(): boolean; 
}