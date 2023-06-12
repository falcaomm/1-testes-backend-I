export const pratica3 = (a: number, b: number): any => {
    if (typeof a !== "number" || typeof b !== "number") {
        return null
    }

    const result = {
        sum: a + b,
        mult: a*b
    }

    return result
}

export const fixacao = (input: string) => {
    if (typeof input !== "string") {
        return null
    }

    return input.split("")
}