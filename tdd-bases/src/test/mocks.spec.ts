import React from "react";
import { functionToMock, funcionQueLlamaMetodoDelMock } from '../functionToMock';


describe('pruebas de mocks', ()=>{
    jest.mock('../functionToMock');

    test('mock de funciones', () => {
        const tet = jest.fn();
        tet();
        expect(tet).toHaveBeenCalled();
    });

    test('mock con valores personalizados', () => {
        // puede retornar varios valores, los retorna en el orden en el que se ejecuta
        const mock = jest.fn()
            .mockReturnValueOnce(true)
            .mockReturnValueOnce(1);
        const result = mock();
        const result2 = mock();
        const result3 = mock();
        console.log(result, result2, result3);
        expect(result).toBeTruthy();
    });

    xtest('test for mock external functions', () => {
        console.log(functionToMock);
        funcionQueLlamaMetodoDelMock(1);
        expect(functionToMock.save).toHaveBeenCalled();
    });
})
