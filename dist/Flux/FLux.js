"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var deep_diff_1 = require("deep-diff");
var Stream = /** @class */ (function () {
    function Stream(_data, _subscribers) {
        if (_subscribers === void 0) { _subscribers = []; }
        this._data = _data;
        this._subscribers = _subscribers;
    }
    Object.defineProperty(Stream.prototype, "difference", {
        get: function () {
            return this._difference;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Stream.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Stream.prototype, "subscribers", {
        get: function () {
            return this._subscribers;
        },
        enumerable: true,
        configurable: true
    });
    Stream.prototype.subscribe = function () {
        var _a;
        var subscribers = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            subscribers[_i] = arguments[_i];
        }
        (_a = this.subscribers).push.apply(_a, subscribers);
        return this;
    };
    Stream.prototype.unsubscribe = function (name) {
        this._subscribers = [];
        return this;
    };
    Stream.prototype.dispatch = function () {
        var _this = this;
        var callbacks = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            callbacks[_i] = arguments[_i];
        }
        var oldState = Object.create({ data: this.data });
        callbacks.forEach(function (callback) {
            _this._data = callback(_this._data);
        });
        this._difference = deep_diff_1.diff(oldState, { data: this.data });
        // console.log(oldState, { data: this.data })
        if (!this.difference)
            return this;
        this
            .subscribers
            .forEach(function (subscriber) { return subscriber(_this.data); });
        return this;
    };
    return Stream;
}());
exports.Stream = Stream;
exports.default = Stream;
