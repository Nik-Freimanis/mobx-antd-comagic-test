
export function isExists<T>(
    value: T | null | undefined,
    message?: string,
): asserts value is T {
    if (value === undefined || value === null) throw Error(message);
}