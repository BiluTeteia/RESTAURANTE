export interface iStack {
    push(item: any): void;
    pop(): any | null;
    peek(): any | null;
    isEmpty(): boolean;
    size(): number;
}