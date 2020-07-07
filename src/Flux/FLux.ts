import { Subscriber, CallStack, IStream } from "./stream.types"
import { diff } from 'deep-diff'
import clone from 'clone'

export class Stream<T> implements IStream<T> {

    private _difference: Array<any> | undefined

    constructor(
        private _data: T,
        private _subscribers: Array<Subscriber<T>> = []
    ) {}

    get difference() {
        return this._difference
    }

    get data() {
        return this._data
    }

    get subscribers() {
        return this._subscribers
    }

    subscribe(...subscribers: Array<Subscriber<T>>): Stream<T> {
 
        this.subscribers.push(...subscribers)

        return this
    }

    unsubscribe(): Stream<T> { 

        this._subscribers = []
        
        return this
    }    

    dispatch(...callStack: CallStack<T>): Stream<T> {

        const oldState = clone(this.data)

        callStack.forEach(callback => {
            this._data = callback(this._data)
        })

        this._difference = diff(oldState, this.data)

        if (!this.difference) return this

        this
            .subscribers
            .forEach(subscriber => subscriber(this.data))
        
        return this
    }
}

export default Stream 
export const Flux = Stream