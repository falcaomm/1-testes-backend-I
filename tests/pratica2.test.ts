import {pratica2} from "../src/pratica2"

describe("o funcionamento da função pratica2", () => {
    test("retorna true para um numero par", () => {
        const result = pratica2(4)
        expect(result).toBe(true)
    })

    test("retorna false para um numero impar", () => {
        const result = pratica2(5)
        expect(result).toBe(false)
    })

    test("retorna null para um numero não inteiro", () => {
        const result = pratica2(1.75)
        expect(result).toBe(null)
    })

    test("retorna null para um numero não numero", () => {
        const result = pratica2("string" as any)
        expect(result).toBe(null)
    })
})