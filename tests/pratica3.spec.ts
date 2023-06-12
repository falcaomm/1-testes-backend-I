import { fixacao, pratica3 } from "../src/pratica3"

describe("o funcionamento da função pratica2", () => { 

    test("logica funcionando com numeros inteiros", () => { 
        const inputA = 4
        const inputB = 2
        const result = pratica3(inputA, inputB)
        expect(result).toEqual({sum:6, mult:8})
    })

    test("logica funcionando com numeros não-inteiros", () =>{
        const inputA = 2.5
        const inputB = 2
        const result = pratica3(inputA, inputB)
        expect(result).toEqual({ sum: 4.5, mult: 5 })
    })

    test("logica funcionando com 1 valor 0", () => { 
        const inputA = 0
        const inputB = 2
        const result = pratica3(inputA, inputB)
        expect(result).toEqual({ sum: 2, mult: 0 })
    })

    test("logica funcionando com 2 valor 0", () => { 
        const inputA = 0
        const inputB = 0
        const result = pratica3(inputA, inputB)
        expect(result).toEqual({ sum: 0, mult: 0 })
    })

    test("Retonra null com um valor que não é numero", () => { 
        const inputA = 'str' as any
        const inputB = 2
        const result = pratica3(inputA, inputB)
        expect(result).toEqual(null)
    })

    test("Retonra null com dois valores que não é numero", () => { 
        const inputA = 'str' as any
        const inputB = 'str' as any
        const result = pratica3(inputA, inputB)
        expect(result).toEqual(null)
    })
    
})

describe("fixacao", () => {
    test("retorna null se não for string", () => {
        const result = fixacao(5 as any)
        expect(result).toEqual(null)
    })
})