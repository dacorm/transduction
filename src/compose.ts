import { AnyFunction } from "./types";

export function compose(...funcs: AnyFunction[]) {
    switch (funcs.length) {
        case 1:
            return funcs[0]!;
        default:
            return funcs.reduce(composeReducer);
    }
}

function composeReducer(a: Function, b: Function) {
    return function () {
        return a.call(null, b.apply(null, arguments));
    };
}