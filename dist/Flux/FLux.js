"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const deep_diff_1 = require("deep-diff");
const clone_1 = __importDefault(require("clone"));
class Stream {
    constructor(_data, _subscribers = []) {
        this._data = _data;
        this._subscribers = _subscribers;
    }
    get difference() {
        return this._difference;
    }
    get data() {
        return this._data;
    }
    get subscribers() {
        return this._subscribers;
    }
    subscribe(...subscribers) {
        this.subscribers.push(...subscribers);
        return this;
    }
    unsubscribe() {
        this._subscribers = [];
        return this;
    }
    dispatch(...callStack) {
        const oldState = clone_1.default(this.data);
        callStack.forEach(callback => {
            this._data = callback(this._data);
        });
        this._difference = deep_diff_1.diff(oldState, this.data);
        if (!this.difference)
            return this;
        this
            .subscribers
            .forEach(subscriber => subscriber(this.data));
        return this;
    }
}
exports.Stream = Stream;
exports.default = Stream;
exports.Flux = Stream;
