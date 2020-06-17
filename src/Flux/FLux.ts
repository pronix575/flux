import { Subscriber, DispatchCallback } from "./stream.types"
import { diff } from 'deep-diff'

export class Stream<T> {

    private _difference: any

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

    dispatch(...callbacks: Array<DispatchCallback<T>>): Stream<T> {
        
        const oldState = Object.create({ data: this.data })

        callbacks.forEach((callback) => {
            this._data = callback(this._data)
        })

        this._difference = diff(oldState, { data: this.data })

        if (!this.difference) return this

        this
            .subscribers
            .forEach(subscriber => subscriber(this.data))
        
        return this
    }
}

export default Stream