import Stream from "./FLux"

export type Subscriber<T> = (data: T) => void
export type DispatchCallback<T> = (prev: T) => T
export type CallStack<T> = Array<DispatchCallback<T>>
export interface IStream<T> {
    subscribe(...subscribers: Array<Subscriber<T>>): Stream<T>,
    unsubscribe(): Stream<T>,
    dispatch(...callStack: CallStack<T>): Stream<T>
}