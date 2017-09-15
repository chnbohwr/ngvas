"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var easing_1 = require("./easing");
var TweenManager = (function () {
    function TweenManager() {
        this._collection = [];
    }
    // private _preExecutor: Function[] = [];
    // private _postExecutor: Function[] = [];
    /**
     * Execute tweens.
     */
    TweenManager.prototype.tween = function () {
        // this._preExecutor.forEach(e => e());
        this._collection = this._collection.filter(function (f) { return f(); });
        // this._postExecutor.forEach(e => e());
    };
    TweenManager.prototype.clear = function () {
        this._collection = [];
        // this._preExecutor = [];
        // this._postExecutor = [];
    };
    // public addPreExecutor (f: Function) {
    //     this._preExecutor.push(f);
    // }
    // public addPostExecutor (f: Function) {
    //     this._postExecutor.push(f);
    // }
    TweenManager.prototype.addTween = function (target, tween, duration, toValues, paramKeys, callback, priority, preFunc, postFunc) {
        if (priority === void 0) { priority = 10; }
        var start = Date.now();
        var end = Date.now() + duration;
        var startValues = paramKeys.map(function (k) { return target[k]; });
        var func = function () {
            var now = Date.now();
            if (preFunc !== undefined) {
                preFunc();
            }
            if (now >= end) {
                paramKeys.forEach(function (k, i) { target[k] = toValues[i]; });
                if (postFunc !== undefined) {
                    postFunc(toValues);
                }
                if (callback !== undefined) {
                    callback(target);
                }
                return false;
            }
            var results = startValues.map(function (v, i) { return (tween || easing_1.easeLinear)(now - start, v, toValues[i] - v, duration); });
            paramKeys.forEach(function (p, i) { target[p] = results[i]; });
            if (postFunc !== undefined) {
                postFunc(results);
            }
            return true;
        };
        func["$priority"] = priority;
        this._collection.push(func);
        this._collection.sort(function (a, b) { return a.$priority - b.$priority; });
    };
    return TweenManager;
}());
exports.TweenManager = TweenManager;
//# sourceMappingURL=TweenManager.js.map