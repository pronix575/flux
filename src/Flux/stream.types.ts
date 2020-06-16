export type Subscriber<T> = (data: T) => void
export type DispatchCallback<T> = (prev: T) => T
