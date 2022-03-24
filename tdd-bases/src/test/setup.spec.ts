import React from "react";

describe('setup y teardown', () => {
    beforeAll(()=>{
        // se corre antes de todos los test
        console.log("beforeall");
    });

    beforeEach(()=>{
        // se corre antes de cada test
        console.log("beforeEach");
    });

    afterAll(()=>{
       // se ejecuta despues de que pasaron todos los test
    });

    afterEach(()=>{
        // se ejecuta despues de que pasa cada test
    });

    test('test de estructurar con beforeALL y each', () => {
        expect(1).toBe(1)
    });

    test('beforeEach 2', () => {
        expect(1).toBe(1)
    });
})
