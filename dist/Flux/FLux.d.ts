import { Subscriber, CallStack, IStream } from "./stream.types";
export declare class Stream<T> implements IStream<T> {
    private _data;
    private _subscribers;
    private _difference;
    constructor(_data: T, _subscribers?: Array<Subscriber<T>>);
    get difference(): any[];
    get data(): T;
    get subscribers(): Subscriber<T>[];
    subscribe(...subscribers: Array<Subscriber<T>>): Stream<T>;
    unsubscribe(): Stream<T>;
    dispatch(...callStack: CallStack<T>): Stream<T>;
}
export default Stream;
export declare const Flux: typeof Stream;
