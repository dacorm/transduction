import { ArrayCombiner } from "../types";
import { toArray } from "../utils";

export const flatMap =
    <T, R>(mapper: (val: T) => R | ReadonlyArray<R>) =>
        (combiner: ArrayCombiner<R>) =>
            (acc: R[], c: T, exit: () => void) => {
                const mappedValue = toArray(mapper(c));
                return (mappedValue as any[]).reduce((acc: R[], v: R) => combiner(acc, v, exit), acc);
            };